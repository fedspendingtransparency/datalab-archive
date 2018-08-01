# Create the Product and Service Parent Categories Indexs

# Clear environment
# rm(list = ls())

library(dplyr)
library(Hmisc)
library(plyr)
library(stats)
library(tools)
library(tidyr)

# Create Working Directory Short Cuts
local_dir <- "C:\\Users\\Desktop\\"
setwd(local_dir)

#################################################
# PSC Datasets Can Be Accessed Here:
# https://www.acquisition.gov/PSC_Manual

# PSC_data_Oct012015FY2016_editted.csv = Product and Service Codes Manual

# AcquisitionsGovPSCIndex.csv =  Final PSC Category Alignment

#################################################
# Import Historical Product and Service Code Master list
codelist <- read.csv("PSC_data_Oct012015FY2016_editted.csv", header = TRUE, 
                     na.strings = c("NA", " ", ""))

# Import Categorized PSC list tables and classifications from GSA/Acquisitions.gov
newcodes <- read.csv("AcquisitionsGovPSCIndex.csv", header = TRUE, na.strings = c("NA"))
newcodes <- newcodes[, -(7:23)]

# Index of Level 1 Category to Model Classification
index <- read.csv("PSCCategory_ModelClassIndex.csv", header = TRUE, na.strings = c("NA", " ", ""))

# Remove observations with incomplete fields
index <- index[complete.cases(index),]

##################################################
# Subset to only 2 digit parent codes to create index of parent codes
codelist$PSC.CODE <- trimws(codelist$PSC.CODE)
codesub <- subset(codelist, nchar(as.character(PSC.CODE)) <= 2)
codesub <- codesub[, c(1:5)]

###################################################
# Format the parent psc code list and merge to replace missing psc code name
# Use the psccode variable to create a parent category column
codelist <- separate(codelist, PSC.CODE, c("parentCode", "codesuffix"), sep = 2, remove = FALSE)

# Remove unneeded columns
codelist <- codelist[!(names(codelist) %in% c("codesuffix"))]
codeparents <- codelist[, c(2:3)]

# Remove duplicated codes/descriptions to maintian only the parent code for the 2 digit code
codeparents <- codeparents[!duplicated(codeparents$parentCode), ]

# Merge modified codesub list and the parent code list created
names(codeparents)
names(codesub)
codesub <- merge(codesub, codeparents, by.x = "PSC.CODE", by.y = "parentCode", all.x = TRUE, all.y = TRUE)
codesub <- codesub[, c(1:3)]

# Remove duplicate parent codes that are out of date
codesub <- codesub[order(codesub$PSC.CODE, desc(codesub$START.DATE)),]
codesub <- codesub[!duplicated(codesub$PSC.CODE),]
codesub <- codesub[, c(1:2)]

# Merge with full historical code list
codelistM <- merge(codelist, codesub, by.x = "parentCode", by.y = "PSC.CODE", all.x = TRUE)

# Remove unneeded columns
codelistM <- codelistM[ , c(1:5, 10)]

# Replace missing code names with the parent code
codelistM$PRODUCT.AND.SERVICE.CODE.NAME[which(is.na(codelistM$PRODUCT.AND.SERVICE.CODE.NAME))] <-
  codelistM$PRODUCT.AND.SERVICE.CODE.NAME.x[which(is.na(codelistM$PRODUCT.AND.SERVICE.CODE.NAME))]

# Fix the missing values for F series psc parent codes
codelistM$PRODUCT.AND.SERVICE.CODE.NAME[which(codelistM$parentCode == "F2" | codelistM$parentCode == "F1" |
                                                  codelistM$parentCode == "F3" | codelistM$parentCode == "F4" |
                                                  codelistM$parentCode == "F5" | codelistM$parentCode == "F6" |
                                                  codelistM$parentCode == "F7" | codelistM$parentCode == "F8" |
                                                  codelistM$parentCode == "F9")] <- 
  codelistM$PRODUCT.AND.SERVICE.CODE.NAME[which(codelistM$parentCode == "F")]

codelistM$PRODUCT.AND.SERVICE.CODE.NAME[which(is.na(codelistM$PRODUCT.AND.SERVICE.CODE.NAME))] <-
  codelistM$PRODUCT.AND.SERVICE.CODE.NAME.x[which(is.na(codelistM$PRODUCT.AND.SERVICE.CODE.NAME))]

# remove unneeded columns
codelistM <- codelistM[, c(1:4,6)]

# Clean up column names
names(codelistM)
colnames(codelistM)[2:3] <- c("psCode", "pscName")
colnames(codelistM)[5] <- "parentCodeName"

# Remove duplicates that are out of date
codelistM <- codelistM[order(codelistM$psCode, desc(codelistM$START.DATE)),]
codelistM <- codelistM[!duplicated(codelistM$psCode),]

#################################################
# Format the new codes data for merger of historical data with new codes 
newcodes$Level.1.Category <- trimws(newcodes$Level.1.Category, which = "both")
newcodes$Level.1.Category <- toTitleCase(newcodes$Level.1.Category)

# Structure each dataset for merger
colnames(newcodes)[1] <- "pscName"

#################################################
# Create parent level category index
newcodesParent <- separate(newcodes, X4.Digit.PSC, c("parentCode", "codesuffix"), sep = 2,
                   remove = FALSE)
newcodesParent <- newcodesParent[, c(3, 5:6)]

# take the mode of the values for each group
parentcodes <- as.data.frame(table(newcodesParent$parentCode, newcodesParent$Level.1.Category, newcodesParent$Level.1))
parentcodes <- parentcodes[which(parentcodes$Freq > 0),]
parentcodes <- parentcodes[order(parentcodes$Var1, desc(parentcodes$Freq)),]
parentcodes <- parentcodes[!duplicated(parentcodes$Var1),]
parentcodes <- parentcodes[, c(1:3)]
colnames(parentcodes) <- c("parentCode", "Level1Category", "LevelNumber")

##########################################################################################
# Merge parent and level one index to add level 1 categories for missing parent categories
longIndex <- merge(parentcodes, codesub, by.x = "parentCode", by.y = "PSC.CODE", all = TRUE)
longIndex <- subset(longIndex, nchar(as.character(longIndex$parentCode)) != 1)
missing <- longIndex[which(is.na(longIndex$Level1Category)),]

# add level 1 category to parent codes with missing values
longIndex$Level1Category[which(longIndex$parentCode == 18)] <- 
  longIndex$Level1Category[which(longIndex$parentCode == 16)]
longIndex$Level1Category[which(longIndex$parentCode == "AU")] <- 
  longIndex$Level1Category[which(longIndex$parentCode == "AA")]
longIndex$Level1Category[which(longIndex$parentCode == "M2" | longIndex$parentCode == "M3")] <- 
  longIndex$Level1Category[which(longIndex$parentCode == "M1")]
longIndex$Level1Category[which(longIndex$parentCode == "E2" | longIndex$parentCode == "E3")] <- 
  longIndex$Level1Category[which(longIndex$parentCode == "E1")]
longIndex$Level1Category[which(longIndex$parentCode == "X2" | longIndex$parentCode == "X3")] <- 
  longIndex$Level1Category[which(longIndex$parentCode == "X1")]
longIndex$Level1Category[which(longIndex$parentCode == "Y2" | longIndex$parentCode == "Y3")] <- 
  longIndex$Level1Category[which(longIndex$parentCode == "Y1")]
longIndex$Level1Category[which(longIndex$parentCode == "R1" | longIndex$parentCode == "R2" | 
                                 longIndex$parentCode == "R3" | longIndex$parentCode == "R5")] <- 
  longIndex$Level1Category[which(longIndex$parentCode == "R4")]
longIndex$Level1Category[which(longIndex$parentCode == "Z3")] <- 
  longIndex$Level1Category[which(longIndex$parentCode == "Z1")]
longIndex$Level1Category[which(longIndex$parentCode == "F2" | longIndex$parentCode == "F3" | 
                                 longIndex$parentCode == "F4" | longIndex$parentCode == "F5" )] <- 
  longIndex$Level1Category[which(longIndex$parentCode == "F1")]

# Reduce index columns
longIndex <- longIndex[, c(1:3)]
longIndex <- longIndex[!duplicated(longIndex),]

rm(newcodesParent, parentcodes, codesub)

###################################################################
# Merge parent code data with the merged codelist 
codelistMerge <- merge(codelistM, longIndex, by.x = "parentCode", by.y = "parentCode", all.x = TRUE)
rm(codelistM, codeparents, missing)

# Replace missing level 1 category for parent codes (single letter codes)
codelistMerge$Level1Category[which(codelistMerge$parentCode == "B")] <- 
  codelistMerge$Level1Category[which(codelistMerge$psCode == "B5")]

codelistMerge$Level1Category[which(codelistMerge$parentCode == "C")] <- 
  codelistMerge$Level1Category[which(codelistMerge$psCode == "C1")]

codelistMerge$Level1Category[which(codelistMerge$parentCode == "D")] <- 
  codelistMerge$Level1Category[which(codelistMerge$psCode == "D3")]

codelistMerge$Level1Category[which(codelistMerge$parentCode == "E")] <- 
  codelistMerge$Level1Category[which(codelistMerge$psCode == "E1")]
codelistMerge$Level1Category[which(codelistMerge$parentCode == "F")] <- 
  codelistMerge$Level1Category[which(codelistMerge$psCode == "F0")]
codelistMerge$Level1Category[which(codelistMerge$parentCode == "G")] <- 
  codelistMerge$Level1Category[which(codelistMerge$psCode == "G0")]
codelistMerge$Level1Category[which(codelistMerge$parentCode == "H")] <- 
  codelistMerge$Level1Category[which(codelistMerge$psCode == "H1")]
codelistMerge$Level1Category[which(codelistMerge$parentCode == "J")] <- 
  codelistMerge$Level1Category[which(codelistMerge$psCode == "J0")]
codelistMerge$Level1Category[which(codelistMerge$parentCode == "K")] <- 
  codelistMerge$Level1Category[which(codelistMerge$psCode == "K0")]
codelistMerge$Level1Category[which(codelistMerge$parentCode == "L")] <- 
  codelistMerge$Level1Category[which(codelistMerge$psCode == "L0")]

###################################################################
# Merge the index that includes the model class with the psc code dataset
codes <- merge(codelistMerge, index, by.x = "Level1Category", by.y = "Level.1.Category", all.x = TRUE)
codes <- codes[!(names(codes) %in% c("LevelNumber"))]

# Reduce to Minimum Needed Columns for Export
names(codes)
codes <- codes[(names(codes) %in% c("Level1Category", "parentCode", "psCode", "pscName", 
                                         "Model.Categorization"))]
# Save the PSC Code Index
saveRDS(codes, file = "NewPSCCodeIndex.RData")

# remove the unneeded lists
rm(codelist, codelistMerge, longIndex, newcodes)
