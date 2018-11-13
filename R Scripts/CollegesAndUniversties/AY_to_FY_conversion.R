rm(list=ls())
options(scipen=9999, digits=6, stringsAsFactors = F)
library(dplyr)
library(stringr)
library(gdata)
####################################################################################
directory <- "/CollegesAndUniversties"

####################################################################################
setwd(directory)
####################################################################################
# The purpose of this script is to transform annual data from academic year to
# fiscal year. The transformation follows this logic...
#
# FY 17 
# Q2 - 10/1 to 12/31 of 2016 ---> our FYq1 from AY16/17
# Q3 - 1/1 to 3/31 of 2017 ---> our FYq2 from AY16/17
# Q4 - 4/1 to 6/30 of 2017 ---> our FYq3 from AY16/17
# Q1 - 7/1 to 9/30 of 2017 ---> our FYq4 from AY17/18
#
# This process will be repated for FY16, FY15, FY14, and FY13
#
# Note: the final section (Perkins, etc.) can not be transformed from AY to FY.
# This is an accepted feature of the data, and will be dealt with in a comment on the 
# visualization in some way.
####################################################################################
# FY2017
q1<-read.xls(xls='AY_DirectLoans/DL_Dashboard_AY2016_2017_Q2.xls')
q2<-read.xls(xls='AY_DirectLoans/DL_Dashboard_AY2016_2017_Q3.xls')
q3<-read.xls(xls='AY_DirectLoans/DL_Dashboard_AY2016_2017_Q4.xls')
q4<-read.xls(xls='AY_DirectLoans/DL_Dashboard_AY2017_2018_Q1.xls')

q1<-q1[-c(1:5),]
q2<-q2[-c(1:5),]
q3<-q3[-c(1:5),]
q4<-q4[-c(1:5),]

colnames(q1)[1]<-"opeid"
colnames(q2)[1]<-"opeid"
colnames(q3)[1]<-"opeid"
colnames(q4)[1]<-"opeid"

names<-rbind(q1,q2,q3,q4)

names<-names[,c(1:3)]
names<-unique(names)

q1<-q1[,c(1:3,10,15,20,25,30)]
q2<-q2[,c(1:3,10,15,20,25,30)]
q3<-q3[,c(1:3,10,15,20,25,30)]
q4<-q4[,c(1:3,10,15,20,25,30)]

agg1<-left_join(names,q1[,c(1,4:8)],by='opeid')
agg2<-left_join(names,q2[,c(1,4:8)],by='opeid')
agg3<-left_join(names,q3[,c(1,4:8)],by='opeid')
agg4<-left_join(names,q4[,c(1,4:8)],by='opeid')

agg<-left_join(agg1,agg2[,c(1,4:8)],by='opeid')
agg<-left_join(agg,agg3[,c(1,4:8)],by='opeid')
agg<-left_join(agg,agg4[,c(1,4:8)],by='opeid')

cols.num <- names(agg)[4:23]
agg[cols.num] <- sapply(agg[cols.num],as.numeric)

agg$subsidized<-0
agg$unsubsidized<-0
agg$parent<-0
agg$grad_plus<-0

agg$subsidized<-rowSums(agg[,c(4,9,14,19)],na.rm=T)
agg$unsubsidized<-rowSums(agg[,c(5,6,10,11,15,16,20,21)],na.rm=T)
agg$parent<-rowSums(agg[,c(7,12,17,22)],na.rm=T)
agg$grad_plus<-rowSums(agg[,c(8,13,18,23)],na.rm=T)

agg<-agg[,c(1:2,24:27)]
colnames(agg)[2]<-"school"
fy17<-agg
fy17<-unique(fy17)
rm(names,q1,q2,q3,q4,agg,agg1,agg2,agg3,agg4,cols.num)

####################################################################################
# FY2016
q1<-read.xls(xls='AY_DirectLoans/DL_Dashboard_AY2015_2016_Q2.xls')
q2<-read.xls(xls='AY_DirectLoans/DL_Dashboard_AY2015_2016_Q3.xls')
q3<-read.xls(xls='AY_DirectLoans/DL_Dashboard_AY2015_2016_Q4.xls')
q4<-read.xls(xls='AY_DirectLoans/DL_Dashboard_AY2016_2017_Q1.xls')

q1<-q1[-c(1:5),]
q2<-q2[-c(1:5),]
q3<-q3[-c(1:5),]
q4<-q4[-c(1:5),]

colnames(q1)[1]<-"opeid"
colnames(q2)[1]<-"opeid"
colnames(q3)[1]<-"opeid"
colnames(q4)[1]<-"opeid"

names<-rbind(q1,q2,q3,q4)

names<-names[,c(1:3)]
names<-unique(names)

q1<-q1[,c(1:3,10,15,20,25,30)]
q2<-q2[,c(1:3,10,15,20,25,30)]
q3<-q3[,c(1:3,10,15,20,25,30)]
q4<-q4[,c(1:3,10,15,20,25,30)]

agg1<-left_join(names,q1[,c(1,4:8)],by='opeid')
agg2<-left_join(names,q2[,c(1,4:8)],by='opeid')
agg3<-left_join(names,q3[,c(1,4:8)],by='opeid')
agg4<-left_join(names,q4[,c(1,4:8)],by='opeid')

agg<-left_join(agg1,agg2[,c(1,4:8)],by='opeid')
agg<-left_join(agg,agg3[,c(1,4:8)],by='opeid')
agg<-left_join(agg,agg4[,c(1,4:8)],by='opeid')

cols.num <- names(agg)[4:23]
agg[cols.num] <- sapply(agg[cols.num],as.numeric)

agg$subsidized<-0
agg$unsubsidized<-0
agg$parent<-0
agg$grad_plus<-0

agg$subsidized<-rowSums(agg[,c(4,9,14,19)],na.rm=T)
agg$unsubsidized<-rowSums(agg[,c(5,6,10,11,15,16,20,21)],na.rm=T)
agg$parent<-rowSums(agg[,c(7,12,17,22)],na.rm=T)
agg$grad_plus<-rowSums(agg[,c(8,13,18,23)],na.rm=T)

agg<-agg[,c(1:2,24:27)]
colnames(agg)[2]<-"school"
fy16<-agg
fy16<-unique(fy16)
rm(names,q1,q2,q3,q4,agg,agg1,agg2,agg3,agg4,cols.num)

####################################################################################
# FY2015
q1<-read.xls(xls='AY_DirectLoans/DL_Dashboard_AY2014_2015_Q2.xls')
q2<-read.xls(xls='AY_DirectLoans/DL_Dashboard_AY2014_2015_Q3.xls')
q3<-read.xls(xls='AY_DirectLoans/DL_Dashboard_AY2014_2015_Q4.xls')
q4<-read.xls(xls='AY_DirectLoans/DL_Dashboard_AY2015_2016_Q1.xls')

q1<-q1[-c(1:5),]
q2<-q2[-c(1:5),]
q3<-q3[-c(1:5),]
q4<-q4[-c(1:5),]

colnames(q1)[1]<-"opeid"
colnames(q2)[1]<-"opeid"
colnames(q3)[1]<-"opeid"
colnames(q4)[1]<-"opeid"

names<-rbind(q1,q2,q3,q4)

names<-names[,c(1:3)]
names<-unique(names)

q1<-q1[,c(1:3,10,15,20,25,30)]
q2<-q2[,c(1:3,10,15,20,25,30)]
q3<-q3[,c(1:3,10,15,20,25,30)]
q4<-q4[,c(1:3,10,15,20,25,30)]

agg1<-left_join(names,q1[,c(1,4:8)],by='opeid')
agg2<-left_join(names,q2[,c(1,4:8)],by='opeid')
agg3<-left_join(names,q3[,c(1,4:8)],by='opeid')
agg4<-left_join(names,q4[,c(1,4:8)],by='opeid')

agg<-left_join(agg1,agg2[,c(1,4:8)],by='opeid')
agg<-left_join(agg,agg3[,c(1,4:8)],by='opeid')
agg<-left_join(agg,agg4[,c(1,4:8)],by='opeid')

cols.num <- names(agg)[4:23]
agg[cols.num] <- sapply(agg[cols.num],as.numeric)

agg$subsidized<-0
agg$unsubsidized<-0
agg$parent<-0
agg$grad_plus<-0

agg$subsidized<-rowSums(agg[,c(4,9,14,19)],na.rm=T)
agg$unsubsidized<-rowSums(agg[,c(5,6,10,11,15,16,20,21)],na.rm=T)
agg$parent<-rowSums(agg[,c(7,12,17,22)],na.rm=T)
agg$grad_plus<-rowSums(agg[,c(8,13,18,23)],na.rm=T)

agg<-agg[,c(1:2,24:27)]
colnames(agg)[2]<-"school"
fy15<-agg
fy15<-unique(fy15)
rm(names,q1,q2,q3,q4,agg,agg1,agg2,agg3,agg4,cols.num)

####################################################################################
# FY2014
q1<-read.xls(xls='AY_DirectLoans/DL_Dashboard_AY2013_2014_Q2.xls')
q2<-read.xls(xls='AY_DirectLoans/DL_Dashboard_AY2013_2014_Q3.xls')
q3<-read.xls(xls='AY_DirectLoans/DL_Dashboard_AY2013_2014_Q4.xls')
q4<-read.xls(xls='AY_DirectLoans/DL_Dashboard_AY2014_2015_Q1.xls')

q1<-q1[-c(1:5),]
q2<-q2[-c(1:5),]
q3<-q3[-c(1:5),]
q4<-q4[-c(1:5),]

colnames(q1)[1]<-"opeid"
colnames(q2)[1]<-"opeid"
colnames(q3)[1]<-"opeid"
colnames(q4)[1]<-"opeid"

names<-rbind(q1,q2,q3,q4)

names<-names[,c(1:3)]
names<-unique(names)

q1<-q1[,c(1:3,10,15,20,25,30)]
q2<-q2[,c(1:3,10,15,20,25,30)]
q3<-q3[,c(1:3,10,15,20,25,30)]
q4<-q4[,c(1:3,10,15,20,25,30)]

agg1<-left_join(names,q1[,c(1,4:8)],by='opeid')
agg2<-left_join(names,q2[,c(1,4:8)],by='opeid')
agg3<-left_join(names,q3[,c(1,4:8)],by='opeid')
agg4<-left_join(names,q4[,c(1,4:8)],by='opeid')

agg<-left_join(agg1,agg2[,c(1,4:8)],by='opeid')
agg<-left_join(agg,agg3[,c(1,4:8)],by='opeid')
agg<-left_join(agg,agg4[,c(1,4:8)],by='opeid')

cols.num <- names(agg)[4:23]
agg[cols.num] <- sapply(agg[cols.num],as.numeric)

agg$subsidized<-0
agg$unsubsidized<-0
agg$parent<-0
agg$grad_plus<-0

agg$subsidized<-rowSums(agg[,c(4,9,14,19)],na.rm=T)
agg$unsubsidized<-rowSums(agg[,c(5,6,10,11,15,16,20,21)],na.rm=T)
agg$parent<-rowSums(agg[,c(7,12,17,22)],na.rm=T)
agg$grad_plus<-rowSums(agg[,c(8,13,18,23)],na.rm=T)

agg<-agg[,c(1:2,24:27)]
colnames(agg)[2]<-"school"
fy14<-agg
fy14<-unique(fy14)
rm(names,q1,q2,q3,q4,agg,agg1,agg2,agg3,agg4,cols.num)

####################################################################################
# FY2013
q1<-read.xls(xls='AY_DirectLoans/DL_Dashboard_AY2012_2013_Q2.xls')
q2<-read.xls(xls='AY_DirectLoans/DL_Dashboard_AY2012_2013_Q3.xls')
q3<-read.xls(xls='AY_DirectLoans/DL_Dashboard_AY2012_2013_Q4.xls')
q4<-read.xls(xls='AY_DirectLoans/DL_Dashboard_AY2013_2014_Q1.xls')

q1<-q1[-c(1:5),]
q2<-q2[-c(1:5),]
q3<-q3[-c(1:5),]
q4<-q4[-c(1:5),]
q4<-q4[,-31]

colnames(q1)[1]<-"opeid"
colnames(q2)[1]<-"opeid"
colnames(q3)[1]<-"opeid"
colnames(q4)[1]<-"opeid"

names<-rbind(q1,q2,q3,q4)

names<-names[,c(1:3)]
names<-unique(names)

q1<-q1[,c(1:3,10,15,20,25,30)]
q2<-q2[,c(1:3,10,15,20,25,30)]
q3<-q3[,c(1:3,10,15,20,25,30)]
q4<-q4[,c(1:3,10,15,20,25,30)]

agg1<-left_join(names,q1[,c(1,4:8)],by='opeid')
agg2<-left_join(names,q2[,c(1,4:8)],by='opeid')
agg3<-left_join(names,q3[,c(1,4:8)],by='opeid')
agg4<-left_join(names,q4[,c(1,4:8)],by='opeid')

agg<-left_join(agg1,agg2[,c(1,4:8)],by='opeid')
agg<-left_join(agg,agg3[,c(1,4:8)],by='opeid')
agg<-left_join(agg,agg4[,c(1,4:8)],by='opeid')

cols.num <- names(agg)[4:23]
agg[cols.num] <- sapply(agg[cols.num],as.numeric)

agg$subsidized<-0
agg$unsubsidized<-0
agg$parent<-0
agg$grad_plus<-0

agg$subsidized<-rowSums(agg[,c(4,9,14,19)],na.rm=T)
agg$unsubsidized<-rowSums(agg[,c(5,6,10,11,15,16,20,21)],na.rm=T)
agg$parent<-rowSums(agg[,c(7,12,17,22)],na.rm=T)
agg$grad_plus<-rowSums(agg[,c(8,13,18,23)],na.rm=T)

agg<-agg[,c(1:2,24:27)]
colnames(agg)[2]<-"school"
fy13<-agg
fy13<-unique(fy13)
rm(names,q1,q2,q3,q4,agg,agg1,agg2,agg3,agg4,cols.num)

####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################

# FY2017
q1<-read.csv('AY_Grants/Q21617AY.csv',na.strings=c("NA",""," "))
q2<-read.csv('AY_Grants/Q31617AY.csv',na.strings=c("NA",""," "))
q3<-read.csv('AY_Grants/Q41617AY.csv',na.strings=c("NA",""," "))
q4<-read.csv('AY_Grants/Q11718AY.csv',na.strings=c("NA",""," "))

colnames(q1)[1]<-"opeid"
colnames(q2)[1]<-"opeid"
colnames(q3)[1]<-"opeid"
colnames(q4)[1]<-"opeid"

names<-rbind(q1,q2,q3,q4)
names<-names[,c(1:3)]
names<-unique(names)

agg1<-left_join(names,q1[,c(1,7,9,11)],by='opeid')
agg2<-left_join(names,q2[,c(1,7,9,11)],by='opeid')
agg3<-left_join(names,q3[,c(1,7,9,11)],by='opeid')
agg4<-left_join(names,q4[,c(1,7,9,11)],by='opeid')

agg<-left_join(agg1,agg2[,c(1,4:6)],by='opeid')
agg<-left_join(agg,agg3[,c(1,4:6)],by='opeid')
agg<-left_join(agg,agg4[,c(1,4:6)],by='opeid')

agg[,c(4)] <- as.numeric(gsub('[$,-]', '',agg[,c(4)]))
agg[,c(5)] <- as.numeric(gsub('[$,-]', '',agg[,c(5)]))
agg[,c(6)] <- as.numeric(gsub('[$,-]', '',agg[,c(6)]))
agg[,c(7)] <- as.numeric(gsub('[$,-]', '',agg[,c(7)]))
agg[,c(8)] <- as.numeric(gsub('[$,-]', '',agg[,c(8)]))
agg[,c(9)] <- as.numeric(gsub('[$,-]', '',agg[,c(9)]))
agg[,c(10)] <- as.numeric(gsub('[$,-]', '',agg[,c(10)]))
agg[,c(11)] <- as.numeric(gsub('[$,-]', '',agg[,c(11)]))
agg[,c(12)] <- as.numeric(gsub('[$,-]', '',agg[,c(12)]))
agg[,c(13)] <- as.numeric(gsub('[$,-]', '',agg[,c(13)]))
agg[,c(14)] <- as.numeric(gsub('[$,-]', '',agg[,c(14)]))
agg[,c(15)] <- as.numeric(gsub('[$,-]', '',agg[,c(15)]))

agg$grants<-0
agg$grants<-rowSums(agg[,c(4:15)],na.rm=T)

fy17grants<-agg[,c(1,2,16)]
colnames(fy17grants)[2]<-'school'
fy17grants<-unique(fy17grants)
rm(names,q1,q2,q3,q4,agg,agg1,agg2,agg3,agg4)

####################################################################################

# FY2016
q1<-read.csv('AY_Grants/Q21516AY.csv',na.strings=c("NA",""," "))
q2<-read.csv('AY_Grants/Q31516AY.csv',na.strings=c("NA",""," "))
q3<-read.csv('AY_Grants/Q41516AY.csv',na.strings=c("NA",""," "))
q4<-read.csv('AY_Grants/Q11617AY.csv',na.strings=c("NA",""," "))

colnames(q1)[1]<-"opeid"
colnames(q2)[1]<-"opeid"
colnames(q3)[1]<-"opeid"
colnames(q4)[1]<-"opeid"

names<-rbind(q1,q2,q3,q4)
names<-names[,c(1:3)]
names<-unique(names)

agg1<-left_join(names,q1[,c(1,7,9,11)],by='opeid')
agg2<-left_join(names,q2[,c(1,7,9,11)],by='opeid')
agg3<-left_join(names,q3[,c(1,7,9,11)],by='opeid')
agg4<-left_join(names,q4[,c(1,7,9,11)],by='opeid')

agg<-left_join(agg1,agg2[,c(1,4:6)],by='opeid')
agg<-left_join(agg,agg3[,c(1,4:6)],by='opeid')
agg<-left_join(agg,agg4[,c(1,4:6)],by='opeid')

agg[,c(4)] <- as.numeric(gsub('[$,-]', '',agg[,c(4)]))
agg[,c(5)] <- as.numeric(gsub('[$,-]', '',agg[,c(5)]))
agg[,c(6)] <- as.numeric(gsub('[$,-]', '',agg[,c(6)]))
agg[,c(7)] <- as.numeric(gsub('[$,-]', '',agg[,c(7)]))
agg[,c(8)] <- as.numeric(gsub('[$,-]', '',agg[,c(8)]))
agg[,c(9)] <- as.numeric(gsub('[$,-]', '',agg[,c(9)]))
agg[,c(10)] <- as.numeric(gsub('[$,-]', '',agg[,c(10)]))
agg[,c(11)] <- as.numeric(gsub('[$,-]', '',agg[,c(11)]))
agg[,c(12)] <- as.numeric(gsub('[$,-]', '',agg[,c(12)]))
agg[,c(13)] <- as.numeric(gsub('[$,-]', '',agg[,c(13)]))
agg[,c(14)] <- as.numeric(gsub('[$,-]', '',agg[,c(14)]))
agg[,c(15)] <- as.numeric(gsub('[$,-]', '',agg[,c(15)]))

agg$grants<-0
agg$grants<-rowSums(agg[,c(4:15)],na.rm=T)

fy16grants<-agg[,c(1,2,16)]
colnames(fy16grants)[2]<-'school'
fy16grants<-unique(fy16grants)
rm(names,q1,q2,q3,q4,agg,agg1,agg2,agg3,agg4)

####################################################################################

# FY2015
q1<-read.csv('AY_Grants/Q21415AY.csv',na.strings=c("NA",""," "))
q2<-read.csv('AY_Grants/Q31415AY.csv',na.strings=c("NA",""," "))
q3<-read.csv('AY_Grants/Q41415AY.csv',na.strings=c("NA",""," "))
q4<-read.csv('AY_Grants/Q11516AY.csv',na.strings=c("NA",""," "))

q1<-q1[,-12]
q2<-q2[,-12]
q3<-q3[,-12]

colnames(q1)[1]<-"opeid"
colnames(q2)[1]<-"opeid"
colnames(q3)[1]<-"opeid"
colnames(q4)[1]<-"opeid"

names<-rbind(q1,q2,q3,q4)
names<-names[,c(1:3)]
names<-unique(names)

agg1<-left_join(names,q1[,c(1,7,9,11)],by='opeid')
agg2<-left_join(names,q2[,c(1,7,9,11)],by='opeid')
agg3<-left_join(names,q3[,c(1,7,9,11)],by='opeid')
agg4<-left_join(names,q4[,c(1,7,9,11)],by='opeid')

agg<-left_join(agg1,agg2[,c(1,4:6)],by='opeid')
agg<-left_join(agg,agg3[,c(1,4:6)],by='opeid')
agg<-left_join(agg,agg4[,c(1,4:6)],by='opeid')

agg[,c(4)] <- as.numeric(gsub('[$,-]', '',agg[,c(4)]))
agg[,c(5)] <- as.numeric(gsub('[$,-]', '',agg[,c(5)]))
agg[,c(6)] <- as.numeric(gsub('[$,-]', '',agg[,c(6)]))
agg[,c(7)] <- as.numeric(gsub('[$,-]', '',agg[,c(7)]))
agg[,c(8)] <- as.numeric(gsub('[$,-]', '',agg[,c(8)]))
agg[,c(9)] <- as.numeric(gsub('[$,-]', '',agg[,c(9)]))
agg[,c(10)] <- as.numeric(gsub('[$,-]', '',agg[,c(10)]))
agg[,c(11)] <- as.numeric(gsub('[$,-]', '',agg[,c(11)]))
agg[,c(12)] <- as.numeric(gsub('[$,-]', '',agg[,c(12)]))
agg[,c(13)] <- as.numeric(gsub('[$,-]', '',agg[,c(13)]))
agg[,c(14)] <- as.numeric(gsub('[$,-]', '',agg[,c(14)]))
agg[,c(15)] <- as.numeric(gsub('[$,-]', '',agg[,c(15)]))

agg$grants<-0
agg$grants<-rowSums(agg[,c(4:15)],na.rm=T)

fy15grants<-agg[,c(1,2,16)]
colnames(fy15grants)[2]<-'school'
fy15grants<-unique(fy15grants)
rm(names,q1,q2,q3,q4,agg,agg1,agg2,agg3,agg4)

####################################################################################

# FY2014
q1<-read.csv('AY_Grants/Q21314AY.csv',na.strings=c("NA",""," "))
q2<-read.csv('AY_Grants/Q31314AY.csv',na.strings=c("NA",""," "))
q3<-read.csv('AY_Grants/Q41314AY.csv',na.strings=c("NA",""," "))
q4<-read.csv('AY_Grants/Q11415AY.csv',na.strings=c("NA",""," "))

q1<-q1[,-12]
q2<-q2[,-12]
q3<-q3[,-12]
q4<-q4[,-12]

colnames(q1)[1]<-"opeid"
colnames(q2)[1]<-"opeid"
colnames(q3)[1]<-"opeid"
colnames(q4)[1]<-"opeid"

names<-rbind(q1,q2,q3,q4)
names<-names[,c(1:3)]
names<-unique(names)

agg1<-left_join(names,q1[,c(1,7,9,11)],by='opeid')
agg2<-left_join(names,q2[,c(1,7,9,11)],by='opeid')
agg3<-left_join(names,q3[,c(1,7,9,11)],by='opeid')
agg4<-left_join(names,q4[,c(1,7,9,11)],by='opeid')

agg<-left_join(agg1,agg2[,c(1,4:6)],by='opeid')
agg<-left_join(agg,agg3[,c(1,4:6)],by='opeid')
agg<-left_join(agg,agg4[,c(1,4:6)],by='opeid')

agg[,c(4)] <- as.numeric(gsub('[$,-]', '',agg[,c(4)]))
agg[,c(5)] <- as.numeric(gsub('[$,-]', '',agg[,c(5)]))
agg[,c(6)] <- as.numeric(gsub('[$,-]', '',agg[,c(6)]))
agg[,c(7)] <- as.numeric(gsub('[$,-]', '',agg[,c(7)]))
agg[,c(8)] <- as.numeric(gsub('[$,-]', '',agg[,c(8)]))
agg[,c(9)] <- as.numeric(gsub('[$,-]', '',agg[,c(9)]))
agg[,c(10)] <- as.numeric(gsub('[$,-]', '',agg[,c(10)]))
agg[,c(11)] <- as.numeric(gsub('[$,-]', '',agg[,c(11)]))
agg[,c(12)] <- as.numeric(gsub('[$,-]', '',agg[,c(12)]))
agg[,c(13)] <- as.numeric(gsub('[$,-]', '',agg[,c(13)]))
agg[,c(14)] <- as.numeric(gsub('[$,-]', '',agg[,c(14)]))
agg[,c(15)] <- as.numeric(gsub('[$,-]', '',agg[,c(15)]))

agg$grants<-0
agg$grants<-rowSums(agg[,c(4:15)],na.rm=T)

fy14grants<-agg[,c(1,2,16)]
colnames(fy14grants)[2]<-'school'
fy14grants<-unique(fy14grants)
rm(names,q1,q2,q3,q4,agg,agg1,agg2,agg3,agg4)

####################################################################################

# FY2013
q1<-read.csv('AY_Grants/Q21213AY.csv',na.strings=c("NA",""," "))
q2<-read.csv('AY_Grants/Q31213AY.csv',na.strings=c("NA",""," "))
q3<-read.csv('AY_Grants/Q41213AY.csv',na.strings=c("NA",""," "))
q4<-read.csv('AY_Grants/Q11314AY.csv',na.strings=c("NA",""," "))

q4<-q4[,-12]

colnames(q1)[1]<-"opeid"
colnames(q2)[1]<-"opeid"
colnames(q3)[1]<-"opeid"
colnames(q4)[1]<-"opeid"

names<-rbind(q1,q2,q3,q4)
names<-names[,c(1:3)]
names$School<-trimws(names$School,"right")
names<-unique(names)

agg1<-left_join(names,q1[,c(1,7,9,11)],by='opeid')
agg2<-left_join(names,q2[,c(1,7,9,11)],by='opeid')
agg3<-left_join(names,q3[,c(1,7,9,11)],by='opeid')
agg4<-left_join(names,q4[,c(1,7,9,11)],by='opeid')

agg<-left_join(agg1,agg2[,c(1,4:6)],by='opeid')
agg<-left_join(agg,agg3[,c(1,4:6)],by='opeid')
agg<-left_join(agg,agg4[,c(1,4:6)],by='opeid')
agg<-unique(agg)

agg[,c(4)] <- as.numeric(gsub('[$,-]', '',agg[,c(4)]))
agg[,c(5)] <- as.numeric(gsub('[$,-]', '',agg[,c(5)]))
agg[,c(6)] <- as.numeric(gsub('[$,-]', '',agg[,c(6)]))
agg[,c(7)] <- as.numeric(gsub('[$,-]', '',agg[,c(7)]))
agg[,c(8)] <- as.numeric(gsub('[$,-]', '',agg[,c(8)]))
agg[,c(9)] <- as.numeric(gsub('[$,-]', '',agg[,c(9)]))
agg[,c(10)] <- as.numeric(gsub('[$,-]', '',agg[,c(10)]))
agg[,c(11)] <- as.numeric(gsub('[$,-]', '',agg[,c(11)]))
agg[,c(12)] <- as.numeric(gsub('[$,-]', '',agg[,c(12)]))
agg[,c(13)] <- as.numeric(gsub('[$,-]', '',agg[,c(13)]))
agg[,c(14)] <- as.numeric(gsub('[$,-]', '',agg[,c(14)]))
agg[,c(15)] <- as.numeric(gsub('[$,-]', '',agg[,c(15)]))

agg$grants<-0
agg$grants<-rowSums(agg[,c(4:15)],na.rm=T)

fy13grants<-agg[,c(1,2,16)]
colnames(fy13grants)[2]<-'school'
fy13grants<-unique(fy13grants)
rm(names,q1,q2,q3,q4,agg,agg1,agg2,agg3,agg4)
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################

# FY2017
q1<-read.csv('AY_Perkins/2016-17CampusBased.csv')
q2<-read.csv('AY_Perkins/2015-16CampusBased.csv')
q3<-read.csv('AY_Perkins/2014-15CampusBased.csv')
q4<-read.csv('AY_Perkins/2013-14CampusBased.csv')
q5<-read.csv('AY_Perkins/2012-13CampusBased.csv')

q1<-q1[-c(1:2),c(1,7,10,13)]
q2<-q2[-c(1:2),c(1,8,11,14)]
q3<-q3[-c(1:2),c(1,8,11,14)]
q4<-q4[-c(1:2),c(1,8,11,14)]
q5<-q5[-c(1:2),c(1,8,11,14)]

colnames(q1)<-c("opeid","perkins","FSEOG","FWS")
colnames(q2)<-c("opeid","perkins","FSEOG","FWS")
colnames(q3)<-c("opeid","perkins","FSEOG","FWS")
colnames(q4)<-c("opeid","perkins","FSEOG","FWS")
colnames(q5)<-c("opeid","perkins","FSEOG","FWS")

q1[,2] <- as.numeric(gsub('[$,-]', '',q1[,2]))
q1[,3] <- as.numeric(gsub('[$,-]', '',q1[,3]))
q1[,4] <- as.numeric(gsub('[$,-]', '',q1[,4]))
q2[,2] <- as.numeric(gsub('[$,-]', '',q2[,2]))
q2[,3] <- as.numeric(gsub('[$,-]', '',q2[,3]))
q2[,4] <- as.numeric(gsub('[$,-]', '',q2[,4]))
q3[,2] <- as.numeric(gsub('[$,-]', '',q3[,2]))
q3[,3] <- as.numeric(gsub('[$,-]', '',q3[,3]))
q3[,4] <- as.numeric(gsub('[$,-]', '',q3[,4]))
q4[,2] <- as.numeric(gsub('[$,-]', '',q4[,2]))
q4[,3] <- as.numeric(gsub('[$,-]', '',q4[,3]))
q4[,4] <- as.numeric(gsub('[$,-]', '',q4[,4]))
q5[,2] <- as.numeric(gsub('[$,-]', '',q5[,2]))
q5[,3] <- as.numeric(gsub('[$,-]', '',q5[,3]))
q5[,4] <- as.numeric(gsub('[$,-]', '',q5[,4]))

ay17perkins<-q1
ay16perkins<-q2
ay15perkins<-q3
ay14perkins<-q4
ay13perkins<-q5

rm(q1,q2,q3,q4,q5)
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
fy13grants$opeid<-as.character(fy13grants$opeid)
fy13grants$opeid<-str_pad(fy13grants$opeid, 8, pad = "0")
ay13perkins$opeid<-as.character(ay13perkins$opeid)
ay13perkins$opeid<-str_pad(ay13perkins$opeid, 8, pad = "0")

fy14grants$opeid<-as.character(fy14grants$opeid)
fy14grants$opeid<-str_pad(fy14grants$opeid, 8, pad = "0")
ay14perkins$opeid<-as.character(ay14perkins$opeid)
ay14perkins$opeid<-str_pad(ay14perkins$opeid, 8, pad = "0")

fy15grants$opeid<-as.character(fy15grants$opeid)
fy15grants$opeid<-str_pad(fy15grants$opeid, 8, pad = "0")
ay15perkins$opeid<-as.character(ay15perkins$opeid)
ay15perkins$opeid<-str_pad(ay15perkins$opeid, 8, pad = "0")

fy16grants$opeid<-as.character(fy16grants$opeid)
fy16grants$opeid<-str_pad(fy16grants$opeid, 8, pad = "0")
ay16perkins$opeid<-as.character(ay16perkins$opeid)
ay16perkins$opeid<-str_pad(ay16perkins$opeid, 8, pad = "0")

fy17grants$opeid<-as.character(fy17grants$opeid)
fy17grants$opeid<-str_pad(fy17grants$opeid, 8, pad = "0")
ay17perkins$opeid<-as.character(ay17perkins$opeid)
ay17perkins$opeid<-str_pad(ay17perkins$opeid, 8, pad = "0")

names<-rbind(fy13[,c(1,2)],fy13grants[,c(1,2)],
             fy14[,c(1,2)],fy14grants[,c(1,2)],
             fy15[,c(1,2)],fy15grants[,c(1,2)],
             fy16[,c(1,2)],fy16grants[,c(1,2)],
             fy17[,c(1,2)],fy17grants[,c(1,2)])
names$school<-trimws(names$school,"right")
names<-unique(names)

d1<-left_join(names,fy13,by = c("opeid","school"))
d2<-left_join(d1,fy13grants,by = c("opeid","school"))
d3<-left_join(d2,ay13perkins,by = c("opeid"))
d4<-left_join(d3,fy14,by = c("opeid","school"))
d5<-left_join(d4,fy14grants,by = c("opeid","school"))
d6<-left_join(d5,ay14perkins,by = c("opeid"))
d7<-left_join(d6,fy15,by = c("opeid","school"))
d8<-left_join(d7,fy15grants,by = c("opeid","school"))
d9<-left_join(d8,ay15perkins,by = c("opeid"))
d10<-left_join(d9,fy16,by = c("opeid","school"))
d11<-left_join(d10,fy16grants,by = c("opeid","school"))
d12<-left_join(d11,ay16perkins,by = c("opeid"))
d13<-left_join(d12,fy17,by = c("opeid","school"))
d14<-left_join(d13,fy17grants,by = c("opeid","school"))
d15<-left_join(d14,ay17perkins,by = c("opeid"))

colnames(d15)<-c("opeid","school",
                 "subsidized13","unsubsidized13","parent13","grad_plus13","grants13","perkins13","FSEOG13","FWS13",
                 "subsidized14","unsubsidized14","parent14","grad_plus14","grants14","perkins14","FSEOG14","FWS14",
                 "subsidized15","unsubsidized15","parent15","grad_plus15","grants15","perkins15","FSEOG15","FWS15",
                 "subsidized16","unsubsidized16","parent16","grad_plus16","grants16","perkins16","FSEOG16","FWS16",
                 "subsidized17","unsubsidized17","parent17","grad_plus17","grants17","perkins17","FSEOG17","FWS17")

rm(d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,names)

write.csv(d15,"Edu_Student_Assistance_TS.csv",row.names = F)

