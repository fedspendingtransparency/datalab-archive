rm(list = ls())
options(stringsAsFactors = FALSE, scipen = 9999, digits = 2)
library(dplyr)
library(stringr)
library(tidyr)
# Global variables
path <- '/TheWhatAndTheWhySankey'
data_file <- 'SankeyDB_FY18.csv'
panel_file <- 'sankey_panel_v4_FY18.csv'
viz_file <- 'sankey_v18_FY18.csv'
titles <- 'sankey_titles_v4_FY18.csv'

##############################################################################
# SELECT SUM(FAPAOC.obligations_incurred_by_program_object_class_cpe) AS obligations_incurred_by_program_object_class_cpe,
# FAPAOC.reporting_period_start,
# TAA.budget_function_code,
# TAA.budget_function_title,
# TAA.budget_subfunction_code,
# TAA.budget_subfunction_title,
# OC.major_object_class,
# OC.major_object_class_name,
# OC.object_class,
# OC.object_class_name
# FROM financial_accounts_by_program_activity_object_class AS FAPAOC
# INNER JOIN
# submission_attributes AS T3 ON FAPAOC.submission_id = T3.submission_id AND FAPAOC.reporting_period_start = T3.reporting_period_start
# INNER JOIN
# treasury_appropriation_account AS TAA ON TAA.treasury_account_identifier = FAPAOC.treasury_account_id
# LEFT OUTER JOIN
# object_class AS OC ON OC.id = FAPAOC.object_class_id
# WHERE T3.reporting_fiscal_quarter = '3' AND T3.reporting_fiscal_year = '2018' AND NOT FAPAOC.obligations_incurred_by_program_object_class_cpe IS NULL 
# GROUP BY FAPAOC.reporting_period_start,
# TAA.budget_function_code,
# TAA.budget_function_title,
# TAA.budget_subfunction_code,
# TAA.budget_subfunction_title,
# OC.major_object_class,
# OC.major_object_class_name,
# OC.object_class,
# OC.object_class_name;
##############################################################################

setwd(path)
d <- read.csv(data_file,na.strings = c("NA",""," "))
##############################################################################
SentCase <- function(InputString){
  InputString <-
    paste(toupper(substring(InputString,1,1)),tolower(substring(InputString,2)),
          sep="")
}
ProperCase <- function(InputString){
  sapply(lapply(strsplit(InputString," "), SentCase), paste, collapse=" ")
}
##############################################################################
x <- d %>%
  group_by(major_object_class_name,
           object_class_name,
           budget_function_title, 
           budget_subfunction_title,) %>%
  summarise(obligation = sum(obligations_incurred_by_program_object_class_cpe,na.rm = T))
d %>% ungroup()

x <- x[x$obligation !=0,]

# "major_object_class_name"                         
# "object_class_name"                               
# "budget_function_title"                           
# "budget_subfunction_title"                        
# "obligations_incurred_by_program_object_class_cpe"
colnames(x)<-c("maj_obj","obj","fun","subfun","value")

x$maj_obj[which(x$maj_obj=="Unknown")]<-"Other"



# group and aggregate on all fields 
groups<-group_by(x,maj_obj,obj,fun,subfun)
dat<-summarise(groups,value=sum(value)) 
dat_x<-dat[dat$value!=0,]

y<-dat[dat$fun=="Social Security",]
sum(y$value,na.rm = T)
# $777,548,858,688


### continue process as normal


################ Budget ---> Maj Obj ##############################

tas<-dat_x[,c(3,1,5)]
colnames(tas)<-c("Budget","Obj","Obligation")

groups <- group_by(tas,
                   Budget,Obj)

dat<-summarise(groups,sum(Obligation))

colnames(dat)<-c("source","target","value")

# To remove Grant & Fixed Charges
dat<-dat[!(dat$target=="Grants and fixed charges"),]

# dat<-dat[order(-dat$value),]

################ Maj Obj ---> Obj ##############################
tas2<-dat_x[,c(1,2,5)]
colnames(tas2)<-c("Maj_Obj","Obj","Obligation")

groups <- group_by(tas2,
                   Maj_Obj,Obj)

dat2<-summarise(groups,sum(Obligation))

colnames(dat2)<-c("source","target","value")
# dat2<-dat2[complete.cases(dat2),]


dat3<-bind_rows(dat,dat2)

# write.csv(dat3,"sankey_v9.csv",row.names = F)

################ Budget ---> Maj Obj ---> Obj ##############################
### Replace Grants & Fixed Charges with the sub obj class

tas3<-dat_x[,c(3,1,2,5)]
colnames(tas3)<-c("Budget","Maj_Obj","Obj","Obligation")

groups <- group_by(tas3,
                   Budget,Maj_Obj,Obj)

dat4<-summarise(groups,sum(Obligation))

dat4<-dat4[dat4$Maj_Obj=="Grants and fixed charges",]
dat4<-dat4[,c(1,3,4)]

colnames(dat4)<-c("source","target","value")
# dat4<-dat4[dat4$value>0,]

dat5<-rbind(dat,dat4)

# write.csv(dat5,"sankey_v10.csv",row.names = F)

################ Budget ---> Maj Obj ---> Obj ##############################
### Replace Contracts with new groups

groups <- group_by(tas3,
                   Budget,Maj_Obj,Obj)

datx<-summarise(groups,Obligation=sum(Obligation))
# dat<-dat[complete.cases(dat),]
g<-read.csv("contracts_obj.csv")

dat7<-left_join(datx,g,by="Obj")
dat7<-dat7[dat7$Maj_Obj=="Contractual services and supplies",]

groups <- group_by(dat7,
                   Budget,Group)
dat8<-summarise(groups,Obligation=sum(Obligation))
colnames(dat8)<-c("source","target","value")

dat9<-dat5[!(dat5$target=="Contractual services and supplies"),]

dat8<-as.data.frame(dat8)
dat9<-as.data.frame(dat9)
dat10<-rbind(dat9,dat8)


dat10$target<-ProperCase(dat10$target)
dat10$source<-ProperCase(dat10$source)

dat10<-dat10[order(dat10$source,dat10$value),]

################ Budget ---> Maj Obj ---> Obj ##############################
### Lose Gov't Receipts, roll up others

dat11<-dat10[!(dat10$source=="Governmental Receipts"),]

dat11$source[dat11$source=="Commerce And Housing Credit"]<-"Regional Development, Commerce, And Housing"
dat11$source[dat11$source=="Community And Regional Development"]<-"Regional Development, Commerce, And Housing"

dat11$source[dat11$source=="General Science, Space, And Technology"]<-"Energy, Science, Space, And Technology"
dat11$source[dat11$source=="Energy"]<-"Energy, Science, Space, And Technology"

dat11$target[dat11$target=="Service And R&d Contracts"]<-"Service And R&D Contracts"
dat11$target[dat11$target=="Advisory, R&d, Medical, And Other Contracts"]<-"Advisory, R&D, Medical, And Other Contracts"


dat11<- dat11 %>%
  group_by(source,target) %>%
  summarise(value=sum(value))

dat11<-dat11[order(-dat11$value),]
dat11$value<-as.double(dat11$value)
options(stringsAsFactors = FALSE, scipen = 9999, digits=22)

dat11Viz <- dat11[dat11$value > 0,]
write.csv(dat11Viz,viz_file,row.names = F)

write.csv(dat11,panel_file,row.names = F)

x<-dat11[dat11$source=="Social Security",]
sum(x$value)
sum(dat11$value)

groups <- group_by(dat11,source)
datx<-summarise(groups,sum(value))
colnames(datx)<-c("name","value")

groups <- group_by(dat11,target)
daty<-summarise(groups,sum(value))
colnames(daty)<-c("name","value")

datz<-rbind(datx,daty)
write.csv(datz,titles,row.names = F)
