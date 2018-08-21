# Create the All Contracts Aggregated Datasets Using the Raw Contract Files

# Clear environment
# rm(list = ls())

library(dplyr)
library(Hmisc)
library(plyr)
library(tidyr)
library(stats)
library(timeDate)
library(timeSeries)

# Create Working Directory
local_dir <- "C:\\Users\\Desktop\\"
setwd(local_dir)

# Read in formatted raw contracts data 
contracts18 <- readRDS(file = "RawData\\raw-contracts2018.RData")
contracts17 <- readRDS(file = "RawData\\raw-contracts2017.RData")
contracts16 <- readRDS(file = "RawData\\raw-contracts2016.RData")
contracts15 <- readRDS(file = "RawData\\raw-contracts2015.RData")
contracts14 <- readRDS(file = "RawData\\raw-contracts2014.RData")
contracts13 <- readRDS(file = "RawData\\raw-contracts2013.RData")
contracts12 <- readRDS(file = "RawData\\raw-contracts2012.RData")
contracts11 <- readRDS(file = "RawData\\raw-contracts2011.RData")
contracts10 <- readRDS(file = "RawData\\raw-contracts2010.RData")
contracts09 <- readRDS(file = "RawData\\raw-contracts2009.RData")
contracts08 <- readRDS(file = "RawData\\raw-contracts2008.RData")
contracts07 <- readRDS(file = "RawData\\raw-contracts2007.RData")

memory.limit()
memory.limit(size = 56000)

############################################
# Treat 2008-2016 USA Spending Contracts Data
contractlist <- lapply(
  list(contracts18, contracts17, contracts16, contracts15, contracts14, contracts13, contracts12,
       contracts11, contracts10, contracts09, contracts08, contracts07), 
  function(df) {
    df$signeddate <- as.Date(df$action_date)
    df$dollarsobligated <- df$federal_action_obligation
    df$reasonformodification <- NA
      df$modification_number <- trimws(as.character(df$modification_number))
      df$reasonformodification[which(df$modification_number == "0" &
                                       is.na(df$action_type))] <- "New Contract"
      df$reasonformodification[which(df$modification_number != "0" & 
                                       !(is.na(df$action_type)))] <- "Contract Modification"
      df$reasonformodification[which(df$modification_number != "0")] <- "Contract Modification"
      df$reasonformodification[which(is.na(df$modification_number))] <- "Contract Modification"
      df$reasonformodification[which(df$modification_number == "0")] <- "New Contract"
    return(df)
  }
)
contracts18 <- unnest_(contractlist[[1]])
contracts17 <- unnest_(contractlist[[2]])
contracts16 <- unnest_(contractlist[[3]])
contracts15 <- unnest_(contractlist[[4]])
contracts14 <- unnest_(contractlist[[5]])
contracts13 <- unnest_(contractlist[[6]])
contracts12 <- unnest_(contractlist[[7]])
contracts11 <- unnest_(contractlist[[8]])
contracts10 <- unnest_(contractlist[[9]])
contracts09 <- unnest_(contractlist[[10]])
contracts08 <- unnest_(contractlist[[11]])
contracts07 <- unnest_(contractlist[[12]])
rm(contractlist)

#######################################################
# Loop through each dataset to format dates
# Treat 2017 and 2018 Data
contractlist <- lapply(
          list(contracts18, contracts17, contracts16, contracts15, contracts14, contracts13, contracts12,
               contracts11, contracts10, contracts09, contracts08, contracts07), 
                function(df) {
                  df$date <- as.Date.factor(df$signeddate)
                  df$yrweek <- format(df$date, "%Y%U")
                  df$year <- format(df$date, "%Y")
                  df$weeknum <- format(df$date, "%U")
                    return(df)
                }
)

contracts18 <- unnest_(contractlist[[1]])
contracts17 <- unnest_(contractlist[[2]])
contracts16 <- unnest_(contractlist[[3]])
contracts15 <- unnest_(contractlist[[4]])
contracts14 <- unnest_(contractlist[[5]])
contracts13 <- unnest_(contractlist[[6]])
contracts12 <- unnest_(contractlist[[7]])
contracts11 <- unnest_(contractlist[[8]])
contracts10 <- unnest_(contractlist[[9]])
contracts09 <- unnest_(contractlist[[10]])
contracts08 <- unnest_(contractlist[[11]])
contracts07 <- unnest_(contractlist[[12]])

rm(contractlist)

#############################################
# Calculate Raw Dataset Totals By Fiscal Year
#############################################
contracttotal <- lapply(
  list(contracts18, contracts17, contracts16, contracts15, contracts14, contracts13,
       contracts12, contracts11, contracts10, contracts09, contracts08, contracts07), 
  function(df) {
     df2 <-   df %>% group_by(fiscal_year) %>%
          dplyr::summarise(contractcount = n(),
                           contractdollars = sum(dollarsobligated))
    return(df2)
  }
)
 c18t <- unnest_(contracttotal[[1]])
 c17t <- unnest_(contracttotal[[2]])
 c16t <- unnest_(contracttotal[[3]])
 c15t <- unnest_(contracttotal[[4]])
 c14t <- unnest_(contracttotal[[5]])
 c13t <- unnest_(contracttotal[[6]])
 c12t <- unnest_(contracttotal[[7]])
 c11t <- unnest_(contracttotal[[8]])
 c10t <- unnest_(contracttotal[[9]])
 c09t <- unnest_(contracttotal[[10]])
 c08t <- unnest_(contracttotal[[11]])
 c07t <- unnest_(contracttotal[[12]])

# Bind the yearly total figures into one dataset
fytotals <- rbind(c18t, c17t, c16t, c15t, c10t, c11t, c12t, c13t, c14t, 
                    c08t, c09t, c07t)
saveRDS(fytotals, file = "Part_I_Data\\Script2-FYContractTotals07-2018_raw.RData")
rm(c18t, c17t, c16t, c15t, c10t, c11t, c12t, c13t, c14t, 
      c08t, c09t, c07t, contracttotal)

ave(fytotals$contractdollars)

###############################################################################################
# QC reload contracts files
# Compare fy totals to the aggregated yearly values to ensure no data is lost

#weektotals <- readRDS(file = "Part_I_Data\\Script2-WeeklyContractSpend_Raw.RData")
fytotals <- readRDS(file = "Part_I_Data\\Script2-FYContractTotals07-2018_raw.RData")

contracts18 <- readRDS(file = "Part_I_Data\\Script2-formattedcontracts2018.RData")
contracts17 <- readRDS(file = "Part_I_Data\\Script2-formattedcontracts2017.RData")
contracts16 <- readRDS(file = "Part_I_Data\\Script2-formattedcontracts2016.RData")
contracts15 <- readRDS(file = "Part_I_Data\\Script2-formattedcontracts2015.RData")
contracts14 <- readRDS(file = "Part_I_Data\\Script2-formattedcontracts2014.RData")
contracts13 <- readRDS(file = "Part_I_Data\\Script2-formattedcontracts2013.RData")
contracts12 <- readRDS(file = "Part_I_Data\\Script2-formattedcontracts2012.RData")
contracts11 <- readRDS(file = "Part_I_Data\\Script2-formattedcontracts2011.RData")
contracts10 <- readRDS(file = "Part_I_Data\\Script2-formattedcontracts2010.RData")
contracts09 <- readRDS(file = "Part_I_Data\\Script2-formattedcontracts2009.RData")
contracts08 <- readRDS(file = "Part_I_Data\\Script2-formattedcontracts2008.RData")
contracts07 <- readRDS(file = "Part_I_Data\\Script2-formattedcontracts2007.RData")


###############################################################################################
# Aggregate all Datasets by Week - Calculate Contract Count and Contract Dollar Totals
###############################################################################################
weekly <- lapply(
  list(contracts18, contracts17, contracts16, contracts15, contracts14, contracts13,
       contracts12, contracts11, contracts10, contracts09, contracts08, contracts07), 
  function(df) {
    # Create the contract type classification using the "reasonformodification" column
    df$contracttype <- gsub("^:", "New Contract", df$reasonformodification)
    df$contracttype[(df$contracttype != "New Contract")] <- "Contract Modification"
    #Aggregate total weekly count and spend by contract type
    df2 <-  df %>% group_by(yrweek, contracttype) %>%
      dplyr::summarise(contractcount = n(),
                       contractdollars = sum(federal_action_obligation, na.rm = TRUE)) 
    return(df2)
  }
)
contracts18_w <- unnest_(weekly[[1]])
contracts17_w <- unnest_(weekly[[2]])
contracts16_w <- unnest_(weekly[[3]])
contracts15_w <- unnest_(weekly[[4]])
contracts14_w <- unnest_(weekly[[5]])
contracts13_w <- unnest_(weekly[[6]])
contracts12_w <- unnest_(weekly[[7]])
contracts11_w <- unnest_(weekly[[8]])
contracts10_w <- unnest_(weekly[[9]])
contracts09_w <- unnest_(weekly[[10]])
contracts08_w <- unnest_(weekly[[11]])
contracts07_w <- unnest_(weekly[[12]])

#Bind the weekly totals by year into one dataset
weektotals <- rbind(contracts18_w, contracts17_w, contracts16_w, contracts15_w, 
                    contracts10_w, contracts11_w, contracts12_w, contracts13_w, contracts14_w, 
                    contracts08_w, contracts09_w, contracts07_w)

# aggregate again to group weeks that spanned the fiscal year end/start
weektotals <- weektotals %>% group_by(yrweek, contracttype) %>%
  dplyr::summarise(contractcount = sum(contractcount),
                   contractdollars = sum(contractdollars, na.rm = TRUE))
sum(weektotals$contractdollars)
sum(fytotals$contractdollars)

rm(contracts18_w, contracts17_w, contracts16_w, contracts15_w, 
   contracts10_w, contracts11_w, contracts12_w, contracts13_w, contracts14_w, 
   contracts08_w, contracts09_w, contracts07_w, weekly)

###############################################################
# Create a Index of Dates/Weeks (yrweek) and Fiscal Year
################################################################
# values have to be aggregated by week then added to the fiscal year index due to weeks that 
# spanning the same week across fiscal year and therefore are duplicated in the bound data for all ten years
index <- lapply(
  list(contracts18, contracts17, contracts16, contracts15, contracts14, contracts13,
       contracts12, contracts11, contracts10, contracts09, contracts08, contracts07), 
  function(df) {
    df2 <- df[names(df) %in% c("yrweek", "fiscal_year")] 
    df2 <- df2[!duplicated(df2),]
    return(df2)
  }
)

c18in <- unnest_(index[[1]])
c17in <- unnest_(index[[2]])
c16in <- unnest_(index[[3]])
c15in <- unnest_(index[[4]])
c14in <- unnest_(index[[5]])
c13in <- unnest_(index[[6]])
c12in <- unnest_(index[[7]])
c11in <- unnest_(index[[8]])
c10in <- unnest_(index[[9]])
c09in <- unnest_(index[[10]])
c08in <- unnest_(index[[11]])
c07in <- unnest_(index[[12]])

timeindex <- rbind(c18in, c17in, c16in, c15in, c14in, c13in, c12in, c11in, c10in, c09in, c08in, c07in)
timeindex <- timeindex[order(timeindex$fiscal_year, timeindex$yrweek),]
timeindex <- timeindex %>% group_by(yrweek) %>%
                dplyr::mutate(count = row_number())
timeindex <- timeindex[(timeindex$count == 1),]
timeindex <- timeindex[, -3]

saveRDS(timeindex, file = "Part_I_Data\\Script2-DateIndexforAggregation.RData")
    rm(c18in, c17in, c16in, c15in, c14in, c13in, c12in, c11in, c10in, c09in, c08in, c07in, index)

##############################################################
# Merge Weekly Totals dataset with the fiscal year index
##############################################################    
weektotals <- merge(weektotals, timeindex, by = "yrweek")
weektotals <- weektotals[order(weektotals$yrweek, weektotals$fiscal_year),]

saveRDS(weektotals, file = "Part_I_Data\\Script2-WeeklyContractSpend_Raw.RData")

# Plot the weekly totals dataset using the raw weekly totals
ggplot(weektotals, aes(y = contractdollars, x = yrweek, group = 1 )) +
  geom_line() + scale_y_continuous(labels = scales::comma) +
  xlab("Fiscal Year") + ylab("Total Contract Dollars Awarded") + ggtitle("Total Contracts Awarded By Fiscal Year 2007 to 2017")

##############################################################    
# save the formatted not cleaned datasets for each year
saveRDS(contracts18, file = "Part_I_Data\\Script2-formattedcontracts2018.RData")
saveRDS(contracts17, file = "Part_I_Data\\Script2-formattedcontracts2017.RData")
saveRDS(contracts16, file = "Part_I_Data\\Script2-formattedcontracts2016.RData")
saveRDS(contracts15, file = "Part_I_Data\\Script2-formattedcontracts2015.RData")
saveRDS(contracts14, file = "Part_I_Data\\Script2-formattedcontracts2014.RData")
saveRDS(contracts13, file = "Part_I_Data\\Script2-formattedcontracts2013.RData")
saveRDS(contracts12, file = "Part_I_Data\\Script2-formattedcontracts2012.RData")
saveRDS(contracts11, file = "Part_I_Data\\Script2-formattedcontracts2011.RData")
saveRDS(contracts10, file = "Part_I_Data\\Script2-formattedcontracts2010.RData")
saveRDS(contracts09, file = "Part_I_Data\\Script2-formattedcontracts2009.RData")
saveRDS(contracts08, file = "Part_I_Data\\Script2-formattedcontracts2008.RData")
saveRDS(contracts07, file = "Part_I_Data\\Script2-formattedcontracts2007.RData")
