rm(list=ls())
options(stringsAsFactors = FALSE, scipen = 9999, digits=2)
library(jsonlite)
library(dplyr)
library(tidyr)
library(data.table)
library(curl)
##############################################################################
directory <- "/ContractExplorer"
burst_data <- "burst.csv"

##############################################################################
setwd(directory)
##############################################################################

dataset<-fread(burst_data)

sum(dataset$obligation,na.rm = T)
# $507,922,781,815

# Copy
contract_data<-dataset[dataset$obligation!=0,]

###############################################################################
# psc_by_Recip.csv start
groups <- group_by(contract_data,
                   agency,
                   subagency,
                   recipient,
                   psc)

dat<-summarise(groups,size=sum(obligation))
dat %>% ungroup()
dat<-as.data.frame(dat)
dat<-dat[with(dat,order(subagency,recipient,-size)),]
dat$parent<-substr(dat$psc,1,2)
dat<-dat[,c(1,2,3,6,5)]
sum(dat$size,na.rm=T)
# $507922781815

groups <- group_by(dat,
                   agency,
                   subagency,
                   recipient,
                   parent)

dat<-summarise(groups,size=sum(size))
dat %>% ungroup()
dat<-as.data.frame(dat)
dat<-dat[with(dat,order(subagency,recipient,-size)),]
sum(dat$size,na.rm=T)
# $507922781815

#############################
# combine psc descriptions and icons
parent<-read.csv("parent.csv")
colnames(parent)<-c("parent","parent_name")
# parent<-parent[,c(1,2)]

icons<-read.csv("psc_icons_v3.csv")
colnames(icons)[1]<-"parent_name"
icons<-unique(icons)

icons<-left_join(parent,icons)
#############################
# add psc data to fiscal data
dat<-left_join(dat,icons,by="parent")

dat<-dat[,c(2,3,6,5,7)]
colnames(dat)<-c("subagency","recipient","psc","obligation","icon")

dat<-dat[dat$obligation!=0,]
sum(dat$obligation,na.rm=T)
# $507922781815

write.csv(dat,"psc_by_Recip.csv",row.names=F)
# psc_by_Recip.csv end
###############################################################################
# awards_contracts.csv start
groups <- group_by(contract_data,
                   agency,
                   subagency,
                   recipient)

dat<-summarise(groups,size=sum(obligation))
dat %>% ungroup()
dat<-as.data.frame(dat)
dat<-dat[with(dat,order(-size)),]
colnames(dat)<-c("agency","subagency","recipient","obligation")

# Lose recipients with contracts under $1 million
dat$recipient[which(dat$obligation<1000000)]<-"Other"

groups<-group_by(dat,agency,subagency,recipient)
dat<-summarise(groups,obligation=sum(obligation))
dat %>% ungroup()
dat<-as.data.frame(dat)
dat<-dat[with(dat,order(-obligation)),]
colnames(dat)<-c("agency","subagency","recipient","obligation")
dat<-dat[dat$obligation!=0,]
sum(dat$obligation)
# $507922781815

write.csv(dat,"awards_contracts.csv",row.names = F)
# awards_contracts.csv end
###############################################################################
# Recip_Details.csv start
groups <- group_by(contract_data,
                   agency,
                   subagency,
                   recipient,
                   psc)

dat<-summarise(groups,size=sum(obligation))
dat %>% ungroup()
dat<-as.data.frame(dat)
dat<-dat[with(dat,order(-size)),]
dat<-dat[,c(1,2,3,5)]
# lose psc
groups <- group_by(dat,
                   agency,
                   subagency,
                   recipient)

dat<-summarise(groups,size=sum(size))
dat %>% ungroup()
dat<-as.data.frame(dat)
dat<-dat[with(dat,order(-size)),]
# lose agency
groups <- group_by(dat,
                   subagency,
                   recipient)

dat<-summarise(groups,size=sum(size))
dat %>% ungroup()
dat<-as.data.frame(dat)
dat<-dat[with(dat,order(-size)),]
# lose subagency
groups <- group_by(dat,
                   recipient)

dat<-summarise(groups,size=sum(size))
dat %>% ungroup()
dat<-as.data.frame(dat)
dat<-dat[with(dat,order(-size)),]
colnames(dat)<-c("name","size")
# data check
sum(dat$size)
# $507,922,781,815

# Get recipient location data
groups <- group_by(contract_data,
                   recipient,
                   state)
company<-summarise(groups,sum(obligation))
company %>% ungroup()
company<-as.data.frame(company)
colnames(company)<-c("name","state","size")
company<-company[with(company,order(-size)),]
company<-company[,c(-3)]
company<-unique(company)

# combine
dat<-left_join(dat,company,by="name")
d<-data.table(dat, key="name")
d<-d[, head(.SD, 1), by=name]
sum(d$size)
# $507922781815

write.csv(d,"Recip_Details.csv",row.names = F)
# Recip_Details.csv end
###############################################################################
# others.csv start
groups <- group_by(contract_data,
                   agency,
                   subagency,
                   recipient)

dat<-summarise(groups,size=sum(obligation))
dat %>% ungroup()
dat<-as.data.frame(dat)
dat<-dat[,c(2,3,4)]
colnames(dat)<-c("sub","name","size")

dat<-dat[dat$size<1000000,]
dat<-dat[with(dat,order(sub,-size)),]

d<-data.table(dat, key="sub")
d<-d[, head(.SD, 10), by=sub]
d<-d[d$size!=0,]

write.csv(d,"others.csv",row.names = F)
# others.csv end
###############################################################################
grants<-read.csv("grantBurst.csv",na.strings=c("NA",""," "),
                 colClasses = c("character","character","character","character",
                                "character","character","numeric","character",
                                "character","character","character"))
grants<-grants[!is.na(grants$recipient),]
grants<-grants[,c(1,5:11)]
grants$recipient_location_state_code[is.na(grants$recipient_location_state_code)]<-"international"

g <- grants %>%
  group_by(recipient,awarding_toptier_agency_name,awarding_subtier_agency_name,
           cfda_number,cfda_title) %>%
  summarise(federal_action_obligation=sum(federal_action_obligation))
g <- g[g$federal_action_obligation != 0,]

write.csv(g,"CFDA_by_Recip.csv",row.names = F)
