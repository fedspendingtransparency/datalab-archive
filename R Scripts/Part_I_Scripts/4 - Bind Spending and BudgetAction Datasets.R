# Structure Bind Spending Data to Budget Action Datasets

# Clear environment
# rm(list = ls())

options(scipen = 20, digits = 8)

library(dplyr)
library(lubridate)
library(Hmisc)
library(plyr)
library(quantmod)
library(stats)
library(xts)
library(tidyr)
library(jsonlite)

# Create Working Directory
local_dir <- "C:\\Users\\Desktop\\"
setwd(local_dir)

# Load Script 3 Budget Action Dataset
dates <- readRDS(file = "Part_I_Data\\Script3-BudgetActionbyDate_raw.RData")

# Load in yearweek to week start date indexing datasets from script 3
datelist <- readRDS(file = "Part_I_Data\\Script3-DateIndexbyYearWeek.RData")

# Read in completed dataset from Script 2 - Total by Week
weektotals <- readRDS(file = "Part_I_Data\\Script2-WeeklyContractSpend_Raw.RData")
sum(weektotals$contractdollars)

# check that all data is retained
fytotals <- readRDS(file = "Part_I_Data\\Script2-FYContractTotals07-2018_raw.RData")
sum(fytotals$contractdollars)

########################################################################################
# Merge Date index with Contract Sending datasets for graphing
#########################################################################################
# Merge with datelist to add first date of year yr week to the dataset
weektotals_m <- join(weektotals, datelist, by = c("yrweek"), type = "left")

# Saved merged file
saveRDS(weektotals_m, file = "Part_I_Data\\Script4-WeeklyContractSpend_dates.RData")

# Reduce to only include variables needed for visualizations
weektotals_sl <- weektotals_m[names(weektotals_m) %in% c("date","contracttype", 
                                                         "contractdollars")]

# Save as json for d3 visualizations
saveRDS(weektotals_sl, file = "Part_I_Data\\Script4-WeeklyTotalsbyContractType.RData")

# Clear reduced json dataset from environment
rm(weektotals_sl)

###########################################################################
# CREATE THE WEEKLY TOTALS DATASET - ONE ENTRY PER WEEK/MONTH
##############################################################################
# Create total contracting by week dataset for line graph
weektotals_m <- separate(weektotals_m, yrweek, c("year", "week"), sep = 4, remove = FALSE)

weekdata <- weektotals_m %>% group_by(date) %>%
  dplyr::summarise(contractdollars = sum(contractdollars))

# Save merged datasets
saveRDS(weekdata, file = "Part_I_Data\\Script4-PrimaryWeekdataset_raw.RData")

##############################################################################
# Create Average contracting by week dataset
weektotals_m$week <- format(weektotals_m$date, "%U")
weekaverage <- weektotals_m %>% group_by(week) %>%
  dplyr::summarise(contractdollars = mean(contractdollars),
                   contractcount = mean(contractcount))
weekaverage <- ungroup(weekaverage)

# Save average weekly datasets
saveRDS(weekaverage, file = "Part_I_Data\\Script4-WeeklyAverageContractingData_raw.RData")

# Clear average dataset from environment
rm(weekaverage, fytotals, datelist, dates, weekdata, weektotals, weektotals_m)
