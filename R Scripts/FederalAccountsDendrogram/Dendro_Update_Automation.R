rm(list = ls())
options(stringsAsFactors = FALSE, scipen = 9999, digits = 2)
library(dplyr)
library(stringr)
library(tidyr)
# Global variables
path <- '/FederalAccountsDendrogram'
link_file <- 'federal_accounts_link.csv'
data_file <- 'TasBal180914.csv'
break_point <- '2018-09-30' #latest quarter without data

##############################################################################

setwd(path)

##############################################################################

# Import TAS link file
# contains: accountID, federal_account_code, treasury_account_identifier,
#           tas_redering_label, Agency, Subagency, Title

link <- read.csv(link_file,na.strings = c("NA",""," "))

##############################################################################

# Import Tas Balances data
# SQL query:
#   SELECT treasury_account_identifier, 
#          reporting_period_end, 
#          SUM(obligations_incurred_total_by_tas_cpe) AS obligations_incurred_total_by_tas_cpe, 
#          SUM(unobligated_balance_cpe) AS unobligated_balance_cpe, 
#          SUM(total_budgetary_resources_amount_cpe) AS total_budgetary_resources_amount_cpe
#   FROM appropriation_account_balances
#          GROUP BY treasury_account_identifier, reporting_period_end
#          ORDER BY treasury_account_identifier, reporting_period_end;
#

d <- read.csv(data_file,na.strings = c("NA",""," "))
##############################################################################

# combine tas_bal data and link file on treasury_account_identifier 
d <- left_join(d,link,by = 'treasury_account_identifier')

# remove records where Agency, Subagency, Account Title, Tas redering label, are NA
# there's no way to meaningfully represent these records in our visualization
d <- d[!is.na(d$Agency),]

# Update column names
d$Obligation <- d$obligations_incurred_total_by_tas_cpe
d$Unobligated <- d$unobligated_balance_cpe

d <- d[names(d) %in% c("federal_account_code","Agency","Subagency",
                       "Title","Obligation","Unobligated","reporting_period_end")]

d <- d %>%
  group_by(Agency,Subagency,Title,reporting_period_end,federal_account_code) %>%
  summarise(Obligation = sum(Obligation),
            Unobligated = sum(Unobligated))
d %>% ungroup()

d$quarter <- NA
d$year <- NA
d$q <- NA
d$fy <- NA

# break up Year and Quarter from reporting_period_end
d$quarter <- substr(d$reporting_period_end,6,10)
d$year <- substr(d$reporting_period_end,1,4)

# set to FY scheme
d$fy <- ifelse(d$quarter == '12-31', d$fy <- as.character((as.numeric(d$year) + 1)),d$year)
d$q <- ifelse(d$quarter == '12-31',yes = '1', 
              no = ifelse(d$quarter == '03-31', yes = '2',
              no = ifelse(d$quarter == '06-30', yes = '3', no = '4')))
##############################################################################

# Within a specific FY, carry through spending when obligations didn't occur in the quarter

# create base set of all unique Agency > subagency > account > federal_account_code combinations
base <- unique(d[names(d) %in% c("Agency","Subagency","Title","federal_account_code")])

# add columns for q, fy, and reporting_period_end
base <- base[rep(seq_len(nrow(base)), each = 4),]
base$q <- NA
base$q <- as.character(rep(1:4))
base$fy <- NA
base <- base[rep(seq_len(nrow(base)), each = length(unique(d$fy))),]
base$fy <- as.character(rep(unique(d$fy)))
base$reporting_period_end <- NA
base$reporting_period_end <- ifelse(base$q == '1',
       yes = paste0(as.character((as.numeric(base$fy) - 1)),"-12-31"),
       no = ifelse(base$q == '2',yes = paste0(base$fy,"-03-31"),
       no = ifelse(base$q == '3',yes = paste0(base$fy,"-06-30"), no = paste0(base$fy,"-09-30"))))

# add rows for records that don't exist
# e.g. acct 1234 has spending in Q2 and Q4, a record for Q3 doesn't exist.
# This piece of code adds a row for Q3 by joining the data onto the base set generated above.
# This new data set has NA values for: Obligation, Unobligated
# Drop the year and quarter columns (redundant)
# Remove FY17 Q1 rows (data doesn't exist)
# Order the data for review purposes
d <- left_join(base,d)
d <- d[order(d$fy,d$Agency,d$Subagency,d$Title,d$q),]
d <- d[d$reporting_period_end != '2016-12-31',]
d <- d[!(names(d) %in% c('year','quarter'))]

# remove rows at break point and beyond, break point is the quarter after the
# last quarter when data is available.
d <- d[as.Date(d$reporting_period_end) < break_point,]

##############################################################################
# fill NAs

for (i in 1:nrow(d)) {
  if (is.na(d[i,8]) & 
      substr(d[i,6],1,4) == substr(d[(i - 1),6],1,4) & 
      substr(d[i,5],1,1) > substr(d[(i - 1),5],1,1) &
      substr(d[i,4],1,4) == substr(d[(i - 1),4],1,4)) {
    d[i,8] <- d[(i - 1),8] # fill 1 quarter back
    d[i,9] <- d[(i - 1),9] # 2<-1, 3<-2, 4<-3
  }else if (is.na(d[i,8]) & 
            substr(d[i,6],1,4) == substr(d[(i - 2),6],1,4) &
            !is.na(d[(i + 1),8]) &
            substr(d[i,4],1,4) == substr(d[(i - 2),4],1,4)) {
    d[i,8] <- d[(i - 2),8] # fill 2 quarters back
    d[i,9] <- d[(i - 2),9] #3<-1, 4<-2
  }else if (is.na(d[i,8]) & 
            substr(d[i,6],1,4) == substr(d[(i - 3),6],1,4) &
            !is.na(d[(i + 1),8]) &
            substr(d[i,4],1,4) == substr(d[(i - 3),4],1,4)) {
    d[i,8] <- d[(i - 3),8] # fill 3 quarters back
    d[i,9] <- d[(i - 3),9] #4<-1
  }else if (is.na(d[i,8]) & 
            substr(d[i,6],1,4) == substr(d[(i + 1),6],1,4) &
            !is.na(d[(i + 1),8]) &
            substr(d[i,4],1,4) == substr(d[(i + 1),4],1,4)) {
    d[i,8] <- 0 # obligated = 0
    d[i,9] <- d[(i + 1),8] + d[(i + 1),9] # fill 1 quarter ahead:1<-2, 2<-3, 3<-4
  }else if (is.na(d[i,8]) & 
            substr(d[i,6],1,4) == substr(d[(i + 2),6],1,4) &
            !is.na(d[(i + 2),8]) &
            substr(d[i,4],1,4) == substr(d[(i + 2),4],1,4)) {
    d[i,8] <- 0 # obligated = 0
    d[i,9] <- d[(i + 2),8] + d[(i + 2),9] # fill 2 quarters ahead:1<-3, 2<-4
  }else if (is.na(d[i,8]) & 
            substr(d[i,6],1,4) == substr(d[(i + 3),6],1,4) &
            !is.na(d[(i + 3),8]) &
            substr(d[i,4],1,4) == substr(d[(i + 3),4],1,4)) {
    d[i,8] <- 0 # obligated = 0
    d[i,9] <- d[(i + 3),8] + d[(i + 3),9] # fill 3 quarters ahead:1<-4
  }
}

d <- d[order(d$reporting_period_end,d$Agency,d$Subagency,d$Title),]

# Write csv file
write.csv(d,'accounts_obligations_link_update_v4.csv',row.names = F)
