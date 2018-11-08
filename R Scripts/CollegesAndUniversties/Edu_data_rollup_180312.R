rm(list=ls())
options(scipen=9999, digits=6, stringsAsFactors = F)
library(dplyr)
library(stringr)
##############################################################

directory <- "/CollegesAndUniversties"
base_data <- "EDU_v1_base_data.csv"
cfda_list <- "CFDA_Program_List.csv"
contract_data <- "Education_Contracts_FY17_Raw.csv"
grant_data <- "Education_Grants_FY17_Raw.csv"
student_loan_data <- "Edu_Student_Assistance_TS.csv"
student_data <- "students.csv"
patent_data <- "Univ_Patent_Data.csv"
arxiv_data <- "arXiv_UNIV_USA_2.csv"
arxiv_topics <- "arxiv_topics.csv"
  
##############################################################
setwd(directory)
##############################################################

# Import known univesrity DUNS and cfda list
base<-read.csv(base_data,na.strings=c("NA",""," "))
base$duns_no<-as.character(base$duns_no)
base$duns_no<-str_pad(base$duns_no, 9, pad = "0")
duns<-as.character(base$duns_no)
duns<-str_pad(duns, 9, pad = "0")

cfda_data<-read.csv(cfda_list,na.strings=c("NA",""," "))
cfda<-as.character(cfda_data$cfda)

# Import FY17 contract and grant data
contracts<-read.csv(contract_data,na.strings=c("NA",""," "))
grants<-read.csv(grant_data,na.strings=c("NA",""," "))

##############################################################
# Clean & Cull
### GRANTS

# subset grants data
grants<-grants[names(grants) %in% c("recipient_name",
                                    "recipient_unique_id",
                                    "federal_action_obligation",
                                    "recipient_location_state_code",
                                    "cfda_number",
                                    "cfda_title",
                                    "cfda_popular_name",
                                    "business_categories",
                                    "funding_toptier_agency_name",
                                    "funding_subtier_agency_name",
                                    "awarding_toptier_agency_name",
                                    "awarding_subtier_agency_name")]

grants$funding_toptier_agency_name[is.na(grants$funding_toptier_agency_name)]<-grants$awarding_toptier_agency_name[is.na(grants$funding_toptier_agency_name)]
grants$funding_subtier_agency_name[is.na(grants$funding_subtier_agency_name)]<-grants$awarding_subtier_agency_name[is.na(grants$funding_subtier_agency_name)]

# get all grant $ per institution
grants$recipient_unique_id<-as.character(grants$recipient_unique_id)
grants$recipient_unique_id<-str_pad(grants$recipient_unique_id, 9, pad = "0")
grants_duns<-grants[grants$recipient_unique_id %in% duns,]
grants_duns<-grants_duns[!(grants_duns$cfda_number %in% cfda),]

# check for uncaptured duns
# grants_check<-grants[!(grants$recipient_unique_id %in% duns),]
# write.csv(grants_check,"GRANTS_check.csv",row.names = F)

# research $ per institution
grants_research<-grants[grants$recipient_unique_id %in% duns,]
grants_research<-grants_research[grants_research$cfda_number %in% cfda,]

### CONTRACTS
contracts$recipient_unique_id<-as.character(contracts$recipient_unique_id)
contracts$recipient_unique_id<-str_pad(contracts$recipient_unique_id, 9, pad = "0")
contracts_duns<-contracts[contracts$recipient_unique_id %in% duns,]

# check for uncaptured duns
# contracts_check<-contracts[!(contracts$recipient_unique_id %in% duns),]
# write.csv(contracts_check,"CONTRACTS_check.csv",row.names = F)


##############################################################
# Import student loan/grant data

student_loans<-read.csv(student_loan_data,na.strings=c("NA",""," "))
student_loans<-student_loans[,c(1,35:42)]

##############################################################
# Import College Scorecard data
students<-read.csv(student_data,na.strings=c("NA",""," ","Null"))

##############################################################
# Import College Patent data

patent<-read.csv(patent_data,na.strings=c("NA",""," "))

##############################################################
# Import Arxiv data 2007-2017

arxiv<-read.csv(,na.strings=c("NA",""," "))
arx_top<-read.csv(arxiv_topics,na.strings=c("NA",""," "))
arxiv<-left_join(arxiv,arx_top)

# count attributions by school,year,topic/title
arxiv_ct<-arxiv %>%
  group_by(recipient,year,topic,title) %>%
  summarise(n = n())
arxiv_ct %>% ungroup()
arxiv %>% ungroup()

# count attributions by school,year
arxiv_ct1<-arxiv %>%
  group_by(recipient,year) %>%
  summarise(n = n())
arxiv_ct1 %>% ungroup()
arxiv %>% ungroup()

# count attributions by school,title

arxiv_ct1a<-arxiv %>%
  group_by(recipient,title) %>%
  summarise(n = n())
arxiv_ct1a %>% ungroup()
arxiv %>% ungroup()

# count attributions by school
arxiv_ct2<-arxiv %>%
  group_by(recipient) %>%
  summarise(n = n())
arxiv_ct2 %>% ungroup()
arxiv %>% ungroup()

##############################################################
##############################################################
##############################################################
# Add spending data to base


x.grants<-grants_duns[,c(1,7)]
colnames(x.grants)<-c("grants_received","duns_no")
x.grants<- x.grants %>%
  group_by(duns_no) %>%
  summarise(grants_received=sum(grants_received,na.rm=T))
x.grants %>% ungroup()
base<-left_join(base,x.grants,by="duns_no")

x.research<-grants_research[,c(1,7)]
colnames(x.research)<-c("research_grants_received","duns_no")
x.research<- x.research %>%
  group_by(duns_no) %>%
  summarise(research_grants_received=sum(research_grants_received,na.rm=T))
x.research %>% ungroup()
base<-left_join(base,x.research,by="duns_no")

x.contracts<-contracts_duns[,c(3,8)]
colnames(x.contracts)<-c("contracts_received","duns_no")
x.contracts<- x.contracts %>%
  group_by(duns_no) %>%
  summarise(contracts_received=sum(contracts_received,na.rm=T))
x.contracts %>% ungroup()
base<-left_join(base,x.contracts,by="duns_no")
rm(x.contracts,x.grants,x.research)

sum_dat<-base %>%
  group_by(Recipient,State,UNITID,EIN,OPEID,IPED_ID,OPEID6,INST_TYPE,
           LONGITUDE,LATITUDE,COUNTY,Football,Basketball,INSTURL) %>%
  summarise(grants_received=sum(grants_received,na.rm=T))
base %>% ungroup()
sum_dat %>% ungroup()

sum_dat1<-base %>%
  group_by(Recipient,State,UNITID,EIN,OPEID,IPED_ID,OPEID6,INST_TYPE,
           LONGITUDE,LATITUDE,COUNTY,Football,Basketball,INSTURL) %>%
  summarise(research_grants_received=sum(research_grants_received,na.rm=T))
base %>% ungroup()
sum_dat1 %>% ungroup()

sum_dat2<-base %>%
  group_by(Recipient,State,UNITID,EIN,OPEID,IPED_ID,OPEID6,INST_TYPE,
           LONGITUDE,LATITUDE,COUNTY,Football,Basketball,INSTURL) %>%
  summarise(contracts_received=sum(contracts_received,na.rm=T))
base %>% ungroup()
sum_dat2 %>% ungroup()

base_v2<-left_join(sum_dat,sum_dat1)
base_v2<-left_join(base_v2,sum_dat2)
rm(sum_dat,sum_dat1,sum_dat2)

st.loan<-student_loans
colnames(st.loan)[1]<-"OPEID"
base_v2<-left_join(base_v2,st.loan,by="OPEID")
rm(st.loan)

# st.grant<-student_grants[,c(1,12)]
# base_v2<-left_join(base_v2,st.grant,by="OPEID")
# rm(st.grant,st.loan)
# 
# perkins<-other_loans[,c(1,7)]
# base_v2<-left_join(base_v2,perkins,by="OPEID")
# rm(perkins)
# 
# fws<-other_loans[,c(1,13)]
# base_v2<-left_join(base_v2,fws,by="OPEID")
# rm(fws)
# 
# fseog<-other_loans[,c(1,10)]
# base_v2<-left_join(base_v2,fseog,by="OPEID")
# rm(fseog)

x.stu<-students[,-1]
base_v2<-left_join(base_v2,x.stu,by="OPEID")
rm(x.stu)

base_v2$Total_Federal_Investment<-NA
base_v2$Total_Federal_Investment<-apply(base_v2,1,function(x){
                                          sum(as.numeric(x[c(15:25)]),na.rm=T)
                                          })

base_v2$Total_Federal_Investment_Per_Student<-0
base_v2$Total_Federal_Investment_Per_Student<-apply(base_v2,1,function(x){
  z<-as.numeric(x[29])/as.numeric(x[28])
  return(z)
})

base_v2<-base_v2[base_v2$Total_Federal_Investment!=0,]

write.csv(base_v2,"EDU_v2_base_data.csv",row.names = F)
##############################################################
base_v2<-read.csv("EDU_v2_base_data.csv",na.strings=c("NA",""," ","NULL"))
##############################################################
# Break down contracts by institution & psc
names<-base[,c(1,2,6)]
colnames(names)<-c("recipient_unique_id","recipient_name","OPEID")
names$recipient_name<-as.character(names$recipient_name)

psc<-contracts_duns %>%
     group_by(recipient_name,recipient_unique_id,
              agency,subagency,
              product_or_service_code,product_or_service_description) %>%
     summarise(obligation=sum(obligation))
psc %>% ungroup()
contracts %>% ungroup()
psc<-psc[psc$obligation!=0,]
psc<-psc[,-1]
psc_base<-left_join(psc,names)
psc_base<-psc_base[,c(7,1:6,8)]
rm(psc)

##############################################################
# Break down grants by institution & cfda

cfda<-grants_duns %>%
      group_by(recipient_name,recipient_unique_id,
               funding_toptier_agency_name,funding_subtier_agency_name,
               cfda_number,cfda_title,cfda_popular_name)%>%
      summarise(federal_action_obligation=sum(federal_action_obligation))
cfda %>% ungroup()
grants_duns %>% ungroup()
cfda<-cfda[cfda$federal_action_obligation!=0,]
cfda<-cfda[,-1]
cfda_base<-left_join(cfda,names)
cfda_base<-cfda_base[,c(8,1:7,9)]
rm(cfda)


##############################################################
# Break down research grants by institution & cfda

cfda_re<-grants_research %>%
  group_by(recipient_name,recipient_unique_id,
           funding_toptier_agency_name,funding_subtier_agency_name,
           cfda_number,cfda_title,cfda_popular_name)%>%
  summarise(federal_action_obligation=sum(federal_action_obligation))
cfda_re %>% ungroup()
grants_research %>% ungroup()
cfda_re<-cfda_re[cfda_re$federal_action_obligation!=0,]
cfda_re<-cfda_re[,-1]
cfda_re_base<-left_join(cfda_re,names)
cfda_re_base<-cfda_re_base[,c(8,1:7,9)]
rm(cfda_re)

##############################################################

length(unique(psc_base$agency)) # 49
length(unique(psc_base$subagency)) # 150

length(unique(cfda_base$funding_toptier_agency_name)) # 31
length(unique(cfda_base$funding_subtier_agency_name)) # 98

length(unique(cfda_re_base$funding_toptier_agency_name)) # 20
length(unique(cfda_re_base$funding_subtier_agency_name)) # 43

cfo<-c("Department of Agriculture","Department of Commerce",
      "Department of Defense","Department of Education",
      "Department of Energy","Department of Health and Human Services",
      "Department of Homeland Security","Department of Housing and Urban Development",
      "Department of the Interior","Department of Justice",
      "Department of Labor","Department of State",
      "Department of Transportation","Department of the Treasury",
      "Department of Veterans Affairs","Environmental Protection Agency",
      "National Aeronautics and Space Administration","Agency for International Development",
      "General Services Administration","National Science Foundation",
      "Nuclear Regulatory Commission","Office of Personnel Management",
      "Small Business Administration","Social Security Administration")

a<-psc_base[psc_base$agency %in% cfo,]
length(unique(a$agency)) #24

b<-cfda_base[cfda_base$funding_toptier_agency_name %in% cfo,]
length(unique(b$funding_toptier_agency_name)) #22

c<-cfda_re_base[cfda_re_base$funding_toptier_agency_name %in% cfo,]
length(unique(c$funding_toptier_agency_name)) #17

sum(psc_base$obligation,na.rm = T)
sum(cfda_base$federal_action_obligation,na.rm = T)
sum(cfda_re_base$federal_action_obligation,na.rm = T)

length(unique(psc_base$product_or_service_code))
length(unique(cfda_base$cfda_number))
length(unique(cfda_re_base$cfda_number))
##############################################################
# roll up contracts [School >> Agency >> Subagency >> PSC]

rollUp<-left_join(contracts_duns,base,by=c('recipient_unique_id'='duns_no'))

agency_sub_psc<- rollUp %>%
  group_by(Recipient,agency,subagency,product_or_service_code,product_or_service_description)%>%
  summarise(obligation=sum(obligation))

rollUp %>% ungroup()

agency_sub_psc<-agency_sub_psc[agency_sub_psc$obligation>0,]

unique(agency_sub_psc$product_or_service_description[agrep("R&D-",agency_sub_psc$product_or_service_description,ignore.case=T)])
sum(agency_sub_psc$obligation[agrep("R&D-",agency_sub_psc$product_or_service_description,ignore.case=T)])
# 136 R&D PSCs
# 374 other PSCs

# agency_sub_psc$parent<-substr(agency_sub_psc$product_or_service_code,1,2)
# parent<-read.csv("parent.csv")
# colnames(parent)<-c("parent","parent_name")

# agency_sub_psc<-left_join(agency_sub_psc,parent)
# 
# psc_count<- agency_sub_psc %>%
#   group_by(parent_name) %>%
#   summarise(count = n())
# agency_sub_psc %>% ungroup()
# 
# psc_amount<- agency_sub_psc %>%
#   group_by(parent_name) %>%
#   summarise(obligation=sum(obligation))
# agency_sub_psc %>% ungroup()
# 
# psc_table<-left_join(psc_count,psc_amount)
# write.csv(psc_table,"psc_table.csv",row.names = F)

##############################################################
# roll up contracts [Agency >> Subagency >> School >> PSC]

rollUp<-left_join(contracts_duns,base,by=c('recipient_unique_id'='duns_no'))

school_psc<- rollUp %>%
  group_by(agency,subagency,Recipient,product_or_service_code,product_or_service_description)%>%
  summarise(obligation=sum(obligation))

rollUp %>% ungroup()

school_psc<-school_psc[school_psc$obligation>0,]

##############################################################
# roll up grants [School >> Agency >> Subagency >> CFDA]

g<-rbind(grants_duns,grants_research)
  
rollUp<-left_join(g,base,by=c('recipient_unique_id'='duns_no'))

agency_sub_cfda<- rollUp %>%
  group_by(Recipient,funding_toptier_agency_name,funding_subtier_agency_name,
           cfda_number,cfda_title)%>%
  summarise(federal_action_obligation=sum(federal_action_obligation))

rollUp %>% ungroup()

agency_sub_cfda<-agency_sub_cfda[agency_sub_cfda$federal_action_obligation>0,]

##############################################################
# roll up grants [Agency >> Subagency >> School >> CFDA]

g<-rbind(grants_duns,grants_research)

rollUp<-left_join(g,base,by=c('recipient_unique_id'='duns_no'))

school_cfda<- rollUp %>%
  group_by(funding_toptier_agency_name,funding_subtier_agency_name,Recipient,
           cfda_number,cfda_title)%>%
  summarise(federal_action_obligation=sum(federal_action_obligation))

rollUp %>% ungroup()

school_cfda<-school_cfda[school_cfda$federal_action_obligation>0,]

##############################################################
a<-contracts_duns[,c(3,11,12)]
cols <- c('agency','subagency')
a$id <- apply( a[ , cols ] , 1 , paste , collapse = "." )
a<-a[,c(1,4)]
colnames(a)[1]<-'value'

b<-grants_duns[,c(1,10,12)]
cols <- c('funding_toptier_agency_name','funding_subtier_agency_name')
b$id <- apply( b[ , cols ] , 1 , paste , collapse = "." )
b<-b[,c(1,4)]
colnames(b)[1]<-'value'

# d<-grants_duns[,c(1,10,12)]
# cols <- c('funding_toptier_agency_name','funding_subtier_agency_name')
# d$id <- apply( d[ , cols ] , 1 , paste , collapse = "." )
# d<-d[,c(1,4)]
# colnames(d)[1]<-'value'

a<-contracts_duns[,c(3,11)]
colnames(a)<-c('value','id')

b<-grants_duns[,c(1,10)]
colnames(b)<-c('value','id')

d<-grants_duns[,c(1,10)]
colnames(d)<-c('value','id')

fin<-rbind(a,b,d)

fin<- fin %>%
  group_by(id) %>%
  summarise(value=sum(value))
fin%>%ungroup()

fin<-fin[fin$value>0,]
write.csv(fin,'flare.csv',row.names = F)
####################################################################################################
#For agency list

d <- read.csv("Edu_PSC.csv",na.strings=c("NA",""," "))

t <- d %>%
  group_by(agency,subagency) %>%
  summarise( obligation = sum(obligation),
             award_count = n())
d %>% ungroup()

t$pct_total <- NA
t$pct_total <- t$obligation/sum(t$obligation) * 100

t <- t[,c(1,2,5,4,3)]
t <- t[order(-t$obligation),]

write.csv(t,"agency_table.csv")
####################################################################################################

d <- read.csv("EDU_v2_base_data.csv",na.strings=c("NA",""," "))
sum(d$Total_Federal_Investment)
# $154,683,574,187

x<-colSums(d[,18:25], na.rm = T)
sum(x)
sum(x)/sum(d$Total_Federal_Investment)*100
# $102,656,220,983 Aid
# 66.3653% Aid

sum(d$contracts_received)
sum(d$contracts_received)/sum(d$Total_Federal_Investment)*100
# $9,944,600,786 Contracts
# 6.429% Contracts

x<-colSums(d[,15:16], na.rm = T)
sum(x)
sum(x)/sum(d$Total_Federal_Investment)*100
# 42,082,752,418 Grants
# 27.2057% Grants



d <- read.csv("Edu_PSC.csv",na.strings=c("NA",""," "))
