# Structure Congressional Actions Dataset

# Clear environment
# rm(list = ls())

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

# Structure budget resolution dates as a data frame
dates <- read.csv(file = "RawData\\2018-05-03_Appropriations_dates_through_FY18.csv", header = TRUE, 
                  na.strings = c("Null", "null", "NA", "na", ""))
# Format the dataset
dates <- dates[, c(1:6)]
dates$start <- as.Date(dates$Date.start, "%m/%d/%Y")
dates$end <- as.Date(dates$Date.end, "%m/%d/%Y")
dates <- dates[(dates$start >= "2006-09-30"),]

dates$cr <- 0
dates$cr[which(dates$Type == "CR")] <- 1

dates$budget <- 0
dates$budget[which(dates$Type == "Budget")] <- 1

# Format the dates dataset to generate the date index
dates <- dates[complete.cases(dates$Date.start),]
dates <- dates[names(dates) %in% c("cr", "budget", "start", "end", "Fiscal.Year", "Type")]

###################################################################################
# Generate the date/budget action index 
d <- dates %>%
  rowwise() %>%
  do(data.frame(date = seq.Date(as.Date(.$start), as.Date(.$end), by = "day"),
                fiscalYear = rep(.$Fiscal.Year, .$end - .$start + 1)))
    d$yrweek <- format(d$date, "%Y%U")
    d <- d[!duplicated(d),]
    
# Create A Dataset with First Date Per Week to Join with Weekly Spending Totals    
  datelist <- d %>% group_by(yrweek) %>%
      dplyr::mutate(count = row_number())
    datelist <- datelist[(datelist$count == 1),]
    datelist <- datelist[,c(1:3)]
    saveRDS(datelist, file = "Part_I_Data\\Script3-DateIndexbyYearWeek.RData")

#########################################################################################
# Format the Budget Action Dataset for graphs
dates <- dates[!is.na(dates$Type), ]

# Save formatted dataset for budget action timeline visualization
saveRDS(dates, file = "Part_I_Data\\Script3-BudgetActionbyDate_raw.RData")
