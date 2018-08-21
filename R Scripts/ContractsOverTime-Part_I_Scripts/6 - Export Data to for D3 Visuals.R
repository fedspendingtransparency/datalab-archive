# Export Data Files to CSV for Part 1 - Descriptive Visualizations (6 Visualizations)

# Clear environment
# rm(list = ls())

options(scipen = 20, digits = 2)

library(dplyr)
library(lubridate)
library(Hmisc)
library(plyr)
library(tidyr)
library(ggplot2)

# Create Working Directory
local_dir <- "C:\\Users\\Desktop\\"
setwd(local_dir)

####################################################################
# 1 - Bar Chart of Total Contract Spending by Fiscal Year
fytotals <- readRDS(file = "Part_I_Data\\Script2-FYContractTotals07-2018_raw.RData")

# Subset to columns needed and format for visualization code
fytotals <- fytotals[, c(1, 3)]
fytotals <- fytotals[order(fytotals$fiscal_year), ]
colnames(fytotals) <- c("fiscalYear", "val")

# Save/Export for Total Contract Spending by Fiscal Year Bar Chart Visualization
write.csv(fytotals, file = "JSONFiles\\TotalContractsAwardsbyYear.csv", row.names = FALSE)

####################################################################
# 2 - Line Chart of Average Spending by Week for Fiscal Year
weekaverage <- readRDS(file = "Part_I_Data\\Script4-WeeklyAverageContractingData_raw.RData")

# Subset to columns needed for visualization
weekaverage <- weekaverage[, c(1:2)]
colnames(weekaverage) <- c("weeknumber", "val")

# Import and subset date index dataset
datelist <- readRDS(file = "Part_I_Data\\Script3-DateIndexbyYearWeek.RData")
datelist <- datelist[datelist$date <= "2007-09-30", ]
# Create a weeknumber column for merger to the week average dataset
datelist$week <- format(datelist$date, "%U")
datelist <- datelist[, names(datelist) %in% c("date", "week")]

# Merge Weekly Average Dataset with date data to order observations for graphing 
weekaverage <- merge(weekaverage, datelist, by.x = "weeknumber", by.y = "week")
weekaverage <- weekaverage[order(weekaverage$date),]
weekaverage <- weekaverage[, names(weekaverage) %in% c("val", "date")]

# Save/Export for Average Weekly Contract Spending Totals Graph
write.csv(weekaverage, file = "JSONFiles\\WeeklyAverageContractingData_raw.csv", row.names = FALSE)

rm(weekaverage, datelist)

####################################################################
# 3 - Line Chart of Spending by week for 2007 to 2017
weekdata <- readRDS(file = "Part_I_Data\\Script4-PrimaryWeekdataset_raw.RData")

# Format for visualization code
colnames(weekdata) <- c("date", "val")

# Save/Export for Ten Year Weekly COntract Totals Graph
write.csv(weekdata, file = "JSONFiles\\WeeklyDataTotals.csv", row.names = FALSE)
rm(weekdata)

####################################################################
# 4 - Multi-Line Chart of Contract Spending by Week by Contract Category (New/Modifications)
weektotals <- readRDS(file = "Part_I_Data\\Script4-WeeklyTotalsbyContractType.RData")
colnames(weektotals) <- c("contracttype", "val", "date")

# Separate each category into separate dataframe and format for visualization code
contractMods <- weektotals[weektotals$contracttype == "Contract Modification",]
contractMods <- contractMods[, (names(contractMods) %in% c("val", "date"))]

contractNew <- weektotals[weektotals$contracttype == "New Contract",]
contractNew <- contractNew[, (names(contractNew) %in% c("val", "date"))]

# Save/Export for New Contracts vs Modifications Graph
write.csv(contractMods, file = "JSONFiles\\WeeklyData_ContractModificationsTotals.csv", row.names = FALSE)
write.csv(contractNew, file = "JSONFiles\\WeeklyData_NewContractTotals.csv", row.names = FALSE)

rm(contractMods, contractNew, weektotals)
####################################################################
# 5 - Panel Multi-Line Chart of Contract Spending by PSC Category - Contract Purchase Type
pscdata_cat <- readRDS(file = "Part_I_Data\\Script5-PSCWeeklyTotals_withCategorization.RData")

######
# Calculate totals by category to subset to key categories for the graph
psctable <- pscdata_cat %>% group_by(lineData) %>%
  dplyr::summarise(total = sum(val, na.rm = TRUE),
                   mean = mean(val, na.rm = TRUE))

# Selecting the two largest categories by volume and the smallest: Weapons & Ammunition
# Separate each file and save as individual files for export
pscweapons <- pscdata_cat[which(pscdata_cat$lineData == "Weapons & Ammunition"),]
pscequip <- pscdata_cat[which(pscdata_cat$lineData == "Facilities, Equipment & Construction"),]
pscprof <- pscdata_cat[which(pscdata_cat$lineData == "Professional Services, Education & Training"),]

# Rename column for visualization code
pscweapons <- pscweapons[names(pscweapons) %in% c("date", "val")]
pscequip <- pscequip[names(pscequip) %in% c("date", "val")]
pscprof <- pscprof[names(pscprof) %in% c("date", "val")]

# Save/Export Files for Product and Service Category Graph
write.csv(pscweapons, file = "JSONFiles\\WeeklyTotals-WeaponsandAmmunition.csv", row.names = FALSE)
write.csv(pscequip, file = "JSONFiles\\WeeklyTotals-FacilitiesEquipmentConstruction.csv", row.names = FALSE)
write.csv(pscprof, file = "JSONFiles\\WeeklyTotals-ProfessionalServices.csv", row.names = FALSE)

rm(psctable, pscweapons, pscequip, pscprof)