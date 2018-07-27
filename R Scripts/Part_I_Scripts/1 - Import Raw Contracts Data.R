# Import raw contracts data by year and format for analysis

# Clear environment
# rm(list = ls())

# Load Libraries
library(dplyr)
library(lubridate)
library(Hmisc)
library(plyr)
library(quantmod)
library(stats)
library(xts)
library(tidyr)

# Datasets can be downloaded for each fiscal year here:
# https://www.usaspending.gov/#/download_center/award_data_archive

# Create Working Directory Short Cuts
local_dir <- "C:\\Users\\Desktop\\"
setwd(local_dir)

###########################################################################
# Import contract data, discard unneeded fields and save as rdata files
###########################################################################

# Import 2018 Data and remove columns
contracts18a <- read.csv("RawData\\FY2018\\contracts_prime_transactions_1.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts18b <- read.csv("RawData\\FY2018\\contracts_prime_transactions_2.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts18c <- read.csv("RawData\\FY2018\\contracts_prime_transactions_3.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts18 <- rbind(contracts18a, contracts18b, contracts18c)

contracts18 <- contracts18[, -(c(31:55, 75:76, 79:129, 159:215, 219:251))]
contracts18$fiscal_year <- 2018

# Pull in all 2018 data and reduce to only Q1 and Q2 ()
contracts18 <- contracts18[(contracts18$action_date <= "2018-03-31") ,]
saveRDS(contracts18, file = "RawData\\raw-contracts2018.RData")

rm(contracts18a, contracts18b, contracts18c)
# Import 2017 Data and remove columns
contracts17_1 <- read.csv("RawData\\FY2017\\contracts_prime_transactions_1.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts17_2 <- read.csv("RawData\\FY2017\\contracts_prime_transactions_2.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts17_3 <- read.csv("RawData\\FY2017\\contracts_prime_transactions_3.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts17_4 <- read.csv("RawData\\FY2017\\contracts_prime_transactions_4.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts17_5 <- read.csv("RawData\\FY2017\\contracts_prime_transactions_5.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)

contracts17 <- rbind(contracts17_1, contracts17_2, contracts17_3, contracts17_4, contracts17_5)
contracts17 <- contracts17[, -(c(31:55, 75:76, 79:129, 159:215, 219:251))]
contracts17$fiscal_year <- 2017
saveRDS(contracts17, file = "RawData\\raw-contracts2017.RData")

rm(contracts17_1, contracts17_2, contracts17_3, contracts17_4, contracts17_5)

rm(contracts17, contracts18)

# LOAD MAY 2018 USASPENDING FILES
setwd(local_dir)
contracts16a <- read.csv("RawData\\FY2016\\contracts_prime_transactions_1.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "))
contracts16b <- read.csv("RawData\\FY2016\\contracts_prime_transactions_2.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "))
contracts16c <- read.csv("RawData\\FY2016\\contracts_prime_transactions_3.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "))
contracts16d <- read.csv("RawData\\FY2016\\contracts_prime_transactions_4.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "))
contracts16e <- read.csv("RawData\\FY2016\\contracts_prime_transactions_5.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "))

contracts16 <- rbind(contracts16a, contracts16b, contracts16c, contracts16d, contracts16e)
contracts16 <- contracts16[, -(c(31:55, 75:76, 79:129, 159:215, 219:251))]
contracts16$fiscal_year <- 2016
saveRDS(contracts16, file = "RawData\\raw-contracts2016.RData")
rm(contracts16, contracts16a, contracts16b, contracts16c, contracts16c, contracts16d, contracts16e)

# FY 2015
contracts15a <- read.csv(file = "RawData\\FY2015\\contracts_prime_transactions_1.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts15b <- read.csv(file = "RawData\\FY2015\\contracts_prime_transactions_2.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts15c <- read.csv(file = "RawData\\FY2015\\contracts_prime_transactions_3.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts15d <- read.csv(file = "RawData\\FY2015\\contracts_prime_transactions_4.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts15e <- read.csv(file = "RawData\\FY2015\\contracts_prime_transactions_5.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)

contracts15 <- rbind(contracts15a, contracts15b, contracts15c, contracts15d, contracts15e)
contracts15 <- contracts15[, -(c(31:55, 75:76, 79:129, 159:215, 219:251))]
contracts15$fiscal_year <- 2015
saveRDS(contracts15, file = "RawData\\raw-contracts2015.RData")

rm(contracts15, contracts15a, contracts15b, contracts15c, contracts15d, contracts15e)

# FY 2014
contracts14a <- read.csv(file = "RawData\\FY2014\\contracts_prime_transactions_1.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts14b <- read.csv(file = "RawData\\FY2014\\contracts_prime_transactions_2.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts14c <- read.csv(file = "RawData\\FY2014\\contracts_prime_transactions_3.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)

contracts14 <- rbind(contracts14a, contracts14b, contracts14c)
contracts14 <- contracts14[, -(c(31:55, 75:76, 79:129, 159:215, 219:251))]
contracts14$fiscal_year <- 2014
saveRDS(contracts14, file = "RawData\\raw-contracts2014.RData")

# FY 2013
contracts13a <- read.csv(file = "RawData\\FY2013\\contracts_prime_transactions_1.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts13b <- read.csv(file = "RawData\\FY2013\\contracts_prime_transactions_2.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts13c <- read.csv(file = "RawData\\FY2013\\contracts_prime_transactions_3.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)

contracts13 <- rbind(contracts13a, contracts13b, contracts13c)
contracts13 <- contracts13[, -(c(31:55, 75:76, 79:129, 159:215, 219:251))]
contracts13$fiscal_year <- 2013
saveRDS(contracts13, file = "RawData\\raw-contracts2013.RData")

# FY 2012
contracts12a <- read.csv(file = "RawData\\FY2012\\contracts_prime_transactions_1.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts12b <- read.csv(file = "RawData\\FY2012\\contracts_prime_transactions_2.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts12c <- read.csv(file = "RawData\\FY2012\\contracts_prime_transactions_3.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts12d <- read.csv(file = "RawData\\FY2012\\contracts_prime_transactions_4.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)

contracts12 <- rbind(contracts12a, contracts12b, contracts12c, contracts12d)
contracts12 <- contracts12[, -(c(31:55, 75:76, 79:129, 159:215, 219:251))]
contracts12$fiscal_year <- 2012
saveRDS(contracts12, file = "RawData\\raw-contracts2012.RData")

rm(contracts14a, contracts14b, contracts14c, contracts13a, contracts13b, 
   contracts13c, contracts12a, contracts12b, contracts12c, contracts12d)
rm(contracts12, contracts13, contracts14)

# FY 2011
contracts11a <- read.csv(file = "RawData\\FY2011\\contracts_prime_transactions_1.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts11b <- read.csv(file = "RawData\\FY2011\\contracts_prime_transactions_2.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts11c <- read.csv(file = "RawData\\FY2011\\contracts_prime_transactions_3.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts11d <- read.csv(file = "RawData\\FY2011\\contracts_prime_transactions_4.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)

contracts11 <- rbind(contracts11a, contracts11b, contracts11c, contracts11d)
contracts11 <- contracts11[, -(c(31:55, 75:76, 79:129, 159:215, 219:251))]
contracts11$fiscal_year <- 2011
saveRDS(contracts11, file = "RawData\\raw-contracts2011.RData")

rm(contracts11a, contracts11b, contracts11c, contracts11d)

# FY2010
contracts10a <- read.csv(file = "RawData\\FY2010\\contracts_prime_transactions_1.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts10b <- read.csv(file = "RawData\\FY2010\\contracts_prime_transactions_2.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts10c <- read.csv(file = "RawData\\FY2010\\contracts_prime_transactions_3.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts10d <- read.csv(file = "RawData\\FY2010\\contracts_prime_transactions_4.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)

contracts10 <- rbind(contracts10a, contracts10b, contracts10c, contracts10d)
contracts10 <- contracts10[, -(c(31:55, 75:76, 79:129, 159:215, 219:251))]
contracts10$fiscal_year <- 2010
saveRDS(contracts10, file = "RawData\\raw-contracts2010.RData")

rm(contracts10a, contracts10b, contracts10c, contracts10d)

# FY 2009
contracts09a <- read.csv(file = "RawData\\FY2009\\contracts_prime_transactions_1.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts09b <- read.csv(file = "RawData\\FY2009\\contracts_prime_transactions_2.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts09c <- read.csv(file = "RawData\\FY2009\\contracts_prime_transactions_3.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts09d <- read.csv(file = "RawData\\FY2009\\contracts_prime_transactions_4.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)

contracts09 <- rbind(contracts09a, contracts09b, contracts09c, contracts09d)
contracts09 <- contracts09[, -(c(31:55, 75:76, 79:129, 159:215, 219:251))]
contracts09$fiscal_year <- 2009
saveRDS(contracts09, file = "RawData\\raw-contracts2009.RData")

rm(contracts09a, contracts09b, contracts09c, contracts09d)

# FY 2008
contracts08a <- read.csv(file = "RawData\\FY2008\\contracts_prime_transactions_1.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts08b <- read.csv(file = "RawData\\FY2008\\contracts_prime_transactions_2.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts08c <- read.csv(file = "RawData\\FY2008\\contracts_prime_transactions_3.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts08d <- read.csv(file = "RawData\\FY2008\\contracts_prime_transactions_4.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts08e <- read.csv(file = "RawData\\FY2008\\contracts_prime_transactions_5.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)

contracts08 <- rbind(contracts08a, contracts08b, contracts08c, contracts08d, contracts08e)
contracts08 <- contracts08[, -(c(31:55, 75:76, 79:129, 159:215, 219:251))]
contracts08$fiscal_year <- 2008
saveRDS(contracts08, file = "RawData\\raw-contracts2008.RData")

rm(contracts08a, contracts08b, contracts08c, contracts08d, contracts08e)

# FY 2007 
contracts07a <- read.csv(file = "RawData\\FY2007\\contracts_prime_transactions_1.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts07b <- read.csv(file = "RawData\\FY2007\\contracts_prime_transactions_2.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts07c <- read.csv(file = "RawData\\FY2007\\contracts_prime_transactions_3.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts07d <- read.csv(file = "RawData\\FY2007\\contracts_prime_transactions_4.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)
contracts07e <- read.csv(file = "RawData\\FY2007\\contracts_prime_transactions_5.csv", header = TRUE, na.strings = c("NA", "Null", "NULL", "", " "), stringsAsFactors = FALSE)

contracts07 <- rbind(contracts07a, contracts07b, contracts07c, contracts07d, contracts07e)
contracts07 <- contracts07[, -(c(31:55, 75:76, 79:129, 159:215, 219:251))]
contracts07$fiscal_year <- 2007
saveRDS(contracts07, file = "RawData\\raw-contracts2007.RData")

rm(contracts07a, contracts07b, contracts07c, contracts07d, contracts07e)
