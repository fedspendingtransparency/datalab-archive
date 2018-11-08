rm(list=ls())
options(scipen=9999, digits=6, stringsAsFactors = F)
library(dplyr)
library(stringr)
##############################################################
directory <- "/CollegesAndUniversties"
base_data <- "EDU_v1_base_data.csv"
##############################################################

setwd(directory)
##############################################################

# Import known univesrity DUNS and cfda list
base<-read.csv(base_data,na.strings=c("NA",""," "))
base$duns_no<-as.character(base$duns_no)
base$duns_no<-str_pad(base$duns_no, 9, pad = "0")
duns<-as.character(base$duns_no)
duns<-str_pad(duns, 9, pad = "0")

# Import contract data
contracts16<-read.csv("FY16ContractsRaw.csv",na.strings=c("NA",""," "))
contracts16$recipient_unique_id<-as.character(contracts16$recipient_unique_id)
contracts16$recipient_unique_id<-str_pad(contracts16$recipient_unique_id, 9, pad = "0")
contracts16_duns<-contracts16[contracts16$recipient_unique_id %in% duns,]
# check for uncaptured duns
contracts16_check<-contracts16[!(contracts16$recipient_unique_id %in% duns),]
write.csv(contracts16_check,"CONTRACTS16_check.csv",row.names = F)

rollUp<-left_join(contracts16_duns,base,by=c('recipient_unique_id'='duns_no'))

agency_sub_psc<- rollUp %>%
  group_by(Recipient,agency,subagency,psc,psc_description)%>%
  summarise(obligation=sum(obligation))

rollUp %>% ungroup()

agency_sub_psc<-agency_sub_psc[agency_sub_psc$obligation>0,]

agency_sub<- agency_sub_psc %>%
  group_by(Recipient,agency,subagency)%>%
  summarise(obligation=sum(obligation))

agency_sub_psc %>% ungroup()

agency_sub<-agency_sub[agency_sub$obligation>0,]
write.csv(agency_sub_psc,"PSC_contracts16.csv",row.names = F)

final_contracts16<- agency_sub %>%
  group_by(Recipient)%>%
  summarise(obligation=sum(obligation))

agency_sub %>% ungroup()

write.csv(final_contracts16,"final_contracts16.csv",row.names = F)

##############################################################

contracts15<-read.csv("FY15ContractsRaw.csv",na.strings=c("NA",""," "))
contracts15$recipient_unique_id<-as.character(contracts15$recipient_unique_id)
contracts15$recipient_unique_id<-str_pad(contracts15$recipient_unique_id, 9, pad = "0")
contracts15_duns<-contracts15[contracts15$recipient_unique_id %in% duns,]
# check for uncaptured duns
contracts15_check<-contracts15[!(contracts15$recipient_unique_id %in% duns),]
write.csv(contracts15_check,"CONTRACTS15_check.csv",row.names = F)

rollUp<-left_join(contracts15_duns,base,by=c('recipient_unique_id'='duns_no'))

agency_sub_psc<- rollUp %>%
  group_by(Recipient,agency,subagency,psc,psc_description)%>%
  summarise(obligation=sum(obligation))

rollUp %>% ungroup()

agency_sub_psc<-agency_sub_psc[agency_sub_psc$obligation>0,]
write.csv(agency_sub_psc,"PSC_contracts15.csv",row.names = F)

agency_sub<- agency_sub_psc %>%
  group_by(Recipient,agency,subagency)%>%
  summarise(obligation=sum(obligation))

agency_sub_psc %>% ungroup()

agency_sub<-agency_sub[agency_sub$obligation>0,]

final_contracts15<- agency_sub %>%
  group_by(Recipient)%>%
  summarise(obligation=sum(obligation))

agency_sub %>% ungroup()

write.csv(final_contracts15,"final_contracts15.csv",row.names = F)


##############################################################

contracts14<-read.csv("FY14ContractsRaw.csv",na.strings=c("NA",""," "))
contracts14$recipient_unique_id<-as.character(contracts14$recipient_unique_id)
contracts14$recipient_unique_id<-str_pad(contracts14$recipient_unique_id, 9, pad = "0")
contracts14_duns<-contracts14[contracts14$recipient_unique_id %in% duns,]
# check for uncaptured duns
contracts14_check<-contracts14[!(contracts14$recipient_unique_id %in% duns),]
write.csv(contracts14_check,"CONTRACTS14_check.csv",row.names = F)

rollUp<-left_join(contracts14_duns,base,by=c('recipient_unique_id'='duns_no'))

agency_sub_psc<- rollUp %>%
  group_by(Recipient,agency,subagency,psc,psc_description)%>%
  summarise(obligation=sum(obligation))

rollUp %>% ungroup()

agency_sub_psc<-agency_sub_psc[agency_sub_psc$obligation>0,]
write.csv(agency_sub_psc,"PSC_contracts14.csv",row.names = F)

agency_sub<- agency_sub_psc %>%
  group_by(Recipient,agency,subagency)%>%
  summarise(obligation=sum(obligation))

agency_sub_psc %>% ungroup()

agency_sub<-agency_sub[agency_sub$obligation>0,]

final_contracts14<- agency_sub %>%
  group_by(Recipient)%>%
  summarise(obligation=sum(obligation))

agency_sub %>% ungroup()

write.csv(final_contracts14,"final_contracts14.csv",row.names = F)

##############################################################

contracts13<-read.csv("FY13ContractsRaw.csv",na.strings=c("NA",""," "))
contracts13$recipient_unique_id<-as.character(contracts13$recipient_unique_id)
contracts13$recipient_unique_id<-str_pad(contracts13$recipient_unique_id, 9, pad = "0")
contracts13_duns<-contracts13[contracts13$recipient_unique_id %in% duns,]
# check for uncaptured duns
contracts13_check<-contracts13[!(contracts13$recipient_unique_id %in% duns),]
write.csv(contracts13_check,"CONTRACTS13_check.csv",row.names = F)

rollUp<-left_join(contracts13_duns,base,by=c('recipient_unique_id'='duns_no'))

agency_sub_psc<- rollUp %>%
  group_by(Recipient,agency,subagency,psc,psc_description)%>%
  summarise(obligation=sum(obligation))

rollUp %>% ungroup()

agency_sub_psc<-agency_sub_psc[agency_sub_psc$obligation>0,]
write.csv(agency_sub_psc,"PSC_contracts13.csv",row.names = F)

agency_sub<- agency_sub_psc %>%
  group_by(Recipient,agency,subagency)%>%
  summarise(obligation=sum(obligation))

agency_sub_psc %>% ungroup()

agency_sub<-agency_sub[agency_sub$obligation>0,]

final_contracts13<- agency_sub %>%
  group_by(Recipient)%>%
  summarise(obligation=sum(obligation))

agency_sub %>% ungroup()

write.csv(final_contracts13,"final_contracts13.csv",row.names = F)

##############################################################
##############################################################
###################### GRANTS ################################
##############################################################
##############################################################

grants16<-read.csv("FY16GrantsRaw.csv",na.strings=c("NA",""," "))
grants16$funding_toptier_agency_name[is.na(grants16$funding_toptier_agency_name)]<-grants16$awarding_toptier_agency_name[is.na(grants16$funding_toptier_agency_name)]
grants16$funding_subtier_agency_name[is.na(grants16$funding_subtier_agency_name)]<-grants16$awarding_subtier_agency_name[is.na(grants16$funding_subtier_agency_name)]
grants16$recipient_unique_id<-as.character(grants16$recipient_unique_id)
grants16$recipient_unique_id<-str_pad(grants16$recipient_unique_id, 9, pad = "0")
grants16_duns<-grants16[grants16$recipient_unique_id %in% duns,]
# check for uncaptured duns
grants16_check<-grants16[!(grants16$recipient_unique_id %in% duns),]
write.csv(grants16_check,"GRANTS16_check.csv",row.names = F)

rollUp<-left_join(grants16_duns,base,by=c('recipient_unique_id'='duns_no'))

agency_sub_cfda<- rollUp %>%
  group_by(Recipient,funding_toptier_agency_name,funding_subtier_agency_name,
           cfda_number,cfda_title)%>%
  summarise(federal_action_obligation=sum(federal_action_obligation))

rollUp %>% ungroup()

agency_sub_cfda<-agency_sub_cfda[agency_sub_cfda$federal_action_obligation>0,]
write.csv(agency_sub_psc,"CFDA_grants16.csv",row.names = F)

agency_sub<- agency_sub_cfda %>%
  group_by(Recipient,funding_toptier_agency_name,funding_subtier_agency_name)%>%
  summarise(federal_action_obligation=sum(federal_action_obligation))

agency_sub_cfda %>% ungroup()

agency_sub<-agency_sub[agency_sub$federal_action_obligation>0,]

final_grants16<- agency_sub %>%
  group_by(Recipient)%>%
  summarise(federal_action_obligation=sum(federal_action_obligation))

agency_sub %>% ungroup()

write.csv(final_grants16,"final_grants16.csv",row.names = F)

##############################################################

grants15<-read.csv("FY15GrantsRaw.csv",na.strings=c("NA",""," "))
grants15$funding_toptier_agency_name[is.na(grants15$funding_toptier_agency_name)]<-grants15$awarding_toptier_agency_name[is.na(grants15$funding_toptier_agency_name)]
grants15$funding_subtier_agency_name[is.na(grants15$funding_subtier_agency_name)]<-grants15$awarding_subtier_agency_name[is.na(grants15$funding_subtier_agency_name)]
grants15$recipient_unique_id<-as.character(grants15$recipient_unique_id)
grants15$recipient_unique_id<-str_pad(grants15$recipient_unique_id, 9, pad = "0")
grants15_duns<-grants15[grants15$recipient_unique_id %in% duns,]
# check for uncaptured duns
grants15_check<-grants15[!(grants15$recipient_unique_id %in% duns),]
write.csv(grants15_check,"GRANTS15_check.csv",row.names = F)

rollUp<-left_join(grants15_duns,base,by=c('recipient_unique_id'='duns_no'))

agency_sub_cfda<- rollUp %>%
  group_by(Recipient,funding_toptier_agency_name,funding_subtier_agency_name,
           cfda_number,cfda_title)%>%
  summarise(federal_action_obligation=sum(federal_action_obligation))

rollUp %>% ungroup()

agency_sub_cfda<-agency_sub_cfda[agency_sub_cfda$federal_action_obligation>0,]
write.csv(agency_sub_psc,"CFDA_grants15.csv",row.names = F)

agency_sub<- agency_sub_cfda %>%
  group_by(Recipient,funding_toptier_agency_name,funding_subtier_agency_name)%>%
  summarise(federal_action_obligation=sum(federal_action_obligation))

agency_sub_cfda %>% ungroup()

agency_sub<-agency_sub[agency_sub$federal_action_obligation>0,]

final_grants15<- agency_sub %>%
  group_by(Recipient)%>%
  summarise(federal_action_obligation=sum(federal_action_obligation))

agency_sub %>% ungroup()

write.csv(final_grants15,"final_grants15.csv",row.names = F)

##############################################################

grants14<-read.csv("FY14GrantsRaw.csv",na.strings=c("NA",""," "))
grants14$funding_toptier_agency_name[is.na(grants14$funding_toptier_agency_name)]<-grants14$awarding_toptier_agency_name[is.na(grants14$funding_toptier_agency_name)]
grants14$funding_subtier_agency_name[is.na(grants14$funding_subtier_agency_name)]<-grants14$awarding_subtier_agency_name[is.na(grants14$funding_subtier_agency_name)]
grants14$recipient_unique_id<-as.character(grants14$recipient_unique_id)
grants14$recipient_unique_id<-str_pad(grants14$recipient_unique_id, 9, pad = "0")
grants14_duns<-grants14[grants14$recipient_unique_id %in% duns,]
# check for uncaptured duns
grants14_check<-grants14[!(grants14$recipient_unique_id %in% duns),]
write.csv(grants14_check,"GRANTS14_check.csv",row.names = F)

rollUp<-left_join(grants14_duns,base,by=c('recipient_unique_id'='duns_no'))

agency_sub_cfda<- rollUp %>%
  group_by(Recipient,funding_toptier_agency_name,funding_subtier_agency_name,
           cfda_number,cfda_title)%>%
  summarise(federal_action_obligation=sum(federal_action_obligation))

rollUp %>% ungroup()

agency_sub_cfda<-agency_sub_cfda[agency_sub_cfda$federal_action_obligation>0,]
write.csv(agency_sub_psc,"CFDA_grants14.csv",row.names = F)

agency_sub<- agency_sub_cfda %>%
  group_by(Recipient,funding_toptier_agency_name,funding_subtier_agency_name)%>%
  summarise(federal_action_obligation=sum(federal_action_obligation))

agency_sub_cfda %>% ungroup()

agency_sub<-agency_sub[agency_sub$federal_action_obligation>0,]

final_grants14<- agency_sub %>%
  group_by(Recipient)%>%
  summarise(federal_action_obligation=sum(federal_action_obligation))

agency_sub %>% ungroup()

write.csv(final_grants14,"final_grants14.csv",row.names = F)

##############################################################

grants13<-read.csv("FY13GrantsRaw.csv",na.strings=c("NA",""," "))
grants13$funding_toptier_agency_name[is.na(grants13$funding_toptier_agency_name)]<-grants13$awarding_toptier_agency_name[is.na(grants13$funding_toptier_agency_name)]
grants13$funding_subtier_agency_name[is.na(grants13$funding_subtier_agency_name)]<-grants13$awarding_subtier_agency_name[is.na(grants13$funding_subtier_agency_name)]
grants13$recipient_unique_id<-as.character(grants13$recipient_unique_id)
grants13$recipient_unique_id<-str_pad(grants13$recipient_unique_id, 9, pad = "0")
grants13_duns<-grants13[grants13$recipient_unique_id %in% duns,]
# check for uncaptured duns
grants13_check<-grants13[!(grants13$recipient_unique_id %in% duns),]
write.csv(grants13_check,"GRANTS13_check.csv",row.names = F)

rollUp<-left_join(grants13_duns,base,by=c('recipient_unique_id'='duns_no'))

agency_sub_cfda<- rollUp %>%
  group_by(Recipient,funding_toptier_agency_name,funding_subtier_agency_name,
           cfda_number,cfda_title)%>%
  summarise(federal_action_obligation=sum(federal_action_obligation))

rollUp %>% ungroup()

agency_sub_cfda<-agency_sub_cfda[agency_sub_cfda$federal_action_obligation>0,]
write.csv(agency_sub_psc,"CFDA_grants13.csv",row.names = F)

agency_sub<- agency_sub_cfda %>%
  group_by(Recipient,funding_toptier_agency_name,funding_subtier_agency_name)%>%
  summarise(federal_action_obligation=sum(federal_action_obligation))

agency_sub_cfda %>% ungroup()

agency_sub<-agency_sub[agency_sub$federal_action_obligation>0,]

final_grants13<- agency_sub %>%
  group_by(Recipient)%>%
  summarise(federal_action_obligation=sum(federal_action_obligation))

agency_sub %>% ungroup()

write.csv(final_grants13,"final_grants13.csv",row.names = F)

##################################################################################
##################################################################################
##################################################################################

names<-rbind(final_contracts13[,1],final_contracts14[,1],final_contracts15[,1],
             final_contracts16[,1],final_grants13[,1],final_grants14[,1],
             final_grants15[,1],final_grants16[,1])
names<-unique(names)

agg1<-left_join(names,final_contracts13)
colnames(agg1)[2]<-'contracts13'
agg2<-left_join(agg1,final_grants13)
colnames(agg2)[3]<-'grants13'

agg3<-left_join(agg2,final_contracts14)
colnames(agg3)[4]<-'contracts14'
agg4<-left_join(agg3,final_grants14)
colnames(agg4)[5]<-'grants14'

agg5<-left_join(agg4,final_contracts15)
colnames(agg5)[6]<-'contracts15'
agg6<-left_join(agg5,final_grants15)
colnames(agg6)[7]<-'grants15'

agg7<-left_join(agg6,final_contracts16)
colnames(agg7)[8]<-'contracts16'
agg8<-left_join(agg7,final_grants16)
colnames(agg8)[9]<-'grants16'

rm(agg1,agg2,agg3,agg4,agg5,agg6,agg7)

write.csv(agg8,"Edu_Contracts_Grants_TS.csv",row.names = F)

c<-agg8[,c(1,2,4,6,8)]
g<-agg8[,c(1,2,3,5,7)]

write.csv(c,"Edu_Contracts_TS.csv",row.names = F)
write.csv(g,"Edu_Grants_TS.csv",row.names = F)
