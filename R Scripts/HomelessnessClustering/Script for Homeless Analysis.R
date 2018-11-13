#install.packages("plyr")
#install.packages("dplyr")
install.packages("tidyr")
#install.packages("stats")
#install.packages("stringr")
#install.packages("reshape2")
library(plyr)
library(dplyr)
library(magrittr)
library(tidyr)
library(stats)
library(stringr)
library(reshape2)
library(rbind)
library(tm)
library(CRPClustering)
library(rnoaa)
library(e1071)

directory <- "/HomelessnessClustering"

setwd(directory)
#Sabrina has QCed this section!
            #Create Zip to CoC file
            # import zip to county to state data
            zipdata<-read.csv("Zip_State_County.csv", header=TRUE, stringsAsFactors = FALSE)
            zipdata$state_county<-paste(zipdata$State, zipdata$County, sep="_")
            zipdata$state_city<-paste(zipdata$State, zipdata$City, sep="_")
            
            #import CoC to county to state data
            #These tables were created using the maps included in 2016 CoC Dashboard reports for each CoC
            cocdata<-read.csv("State_County_COC.csv", header=TRUE, stringsAsFactors = FALSE)
            coc_city<-read.csv("coc_city.csv", header=TRUE, stringsAsFactors=FALSE)
            cocdata$state_county<-paste(cocdata$State, cocdata$County, sep="_")
            cocdata$state_city<-paste(cocdata$State, cocdata$City, sep="_")
            coc_city$state_county<-paste(coc_city$State, coc_city$County, sep="_")
            coc_city$state_city<-paste(coc_city$State, coc_city$City, sep="_")
            
            cities<-c("GA_Atlanta", "ME_Portland", "MI_Detroit", "NE_Lincoln", "NM_Albuquerque", "MA_Boston", "MA_Lynn", "MA_New Bedford", "MA_Lowell", "MA_Lowell", "MA_Cambridge", "MA_Fall River", "MA_Lawrence", "MA_Framingham", "MA_Medford", "MA_Malden", "MA_Revere", "MA_Somerville", "MA_Arlington", "MA_Waltham", "MA_Newton", "MA_Newton", "MA_Brookline", "CA_Long Beach", "CA_Glendale", "IL_Chicago", "IA_Des Moines", "IA_West Des Moines", "NH_Manchester", "MA_Quincy", "MA_Weymouth", "CA_Pasadena")
            
            zipdata1<-subset(zipdata, zipdata$state_city %in% cities)
            zipdata2<-subset(zipdata, !(zipdata$state_city %in% cities))
            zipcoc1 <- join(zipdata1, coc_city, by="state_city", type="left", match="all")
            col<-c("State", "City", "Zip","County", "coc_number", "coc_name")
            zip1coc<-zipcoc1[,c(col)]
            zipcoc2 <- join(zipdata2, cocdata, by="state_county", type="left", match="all")
            zip2coc<-zipcoc2[,c(col)]
            CoC<-rbind(zip1coc, zip2coc)
            
            #Download grants for CFDAs related to homelessness from beta.usaspending.gov for FY2017 from https://cfda.gov/
            #clean place_of_performance_zip_plus_four field in excel so that you have a field with just the 5 digit zip codes (and find zipcodes for awards that have cities and counties but not zip codes in the file)
            
            #import awards file
            award<-read.csv("2017HomelessAssistance.csv", header=TRUE, stringsAsFactors = FALSE)
            
            #import CoC data
            #CoC<-read.csv("zip-coc.csv", header = TRUE, stringsAsFactors = FALSE)
            CoC$primary_place_of_performance_zip<-CoC$Zip
            
            #import CFDA data
            CFDA<-read.csv("CFDA-description.csv", header = TRUE, stringsAsFactors = FALSE)
            
            #join CFDA with awards data
            grantswithCFDA <-join(award, CFDA, by="cfda_number", type="left", match="all")
            
            
            #subset grants to CFDAs rated 1-3
            grantsrelevant<-subset(grantswithCFDA, grantswithCFDA$level_of_focus_on_homelessness %in% c(1:3))
            
            #seperate data to awarded locally vs to the state
            GrantsState<- subset(grantsrelevant, grantsrelevant$level_of_detail %in% c("State", "States"))
            GrantsCoC <- subset(grantsrelevant, grantsrelevant$level_of_detail=="CoC")
            
            #join CoC data to grants awarded locally
            GrantswithCoC<-join(GrantsCoC, CoC, by="primary_place_of_performance_zip", type="left", match="all")
            
            #subset awards that cannot be linked to a CoC
            GrantsnoCoC<-subset(GrantswithCoC, is.na(GrantswithCoC$coc_number))
            GrantsHasCoC<-subset(GrantswithCoC, !is.na(GrantswithCoC$coc_number))
            
            #merge NAs to state Data
            StateGrants<-GrantsnoCoC[,c(1:80)]
            GrantsState2<-rbind(GrantsState, StateGrants)
            
            #summarize state awards to state level
            require(plyr)
            statefunding<-ddply(GrantsState2,.(State_code), summarize, fed_funding=sum(federal_action_obligation))
            
            write.csv(statefunding, file="2017statefunding.csv")
            
            #summarize state awards to state level by CFDA
            statecfdafunding<-ddply(GrantsState,.(State_code, cfda_number, program_title, types_of_assistance, objectives, beneficiary_eligability, level_of_detail, level_of_focus_on_homelessness, category, program_website, CFDA_website), summarize, fed_funding=sum(federal_action_obligation))
            
            write.csv(statecfdafunding, file="2017statecfdafunding.csv")
            
            #summarize awards to CoC level
            CoCZero<-read.csv("CoCnoFunding.csv")
            CoCwithZeros<-rbind(GrantswithCoC, CoCZero)
            CoCfunding<-ddply(CoCwithZeros,.(coc_number,coc_name), summarize, fed_funding=sum(federal_action_obligation))
            
            write.csv(CoCfunding, file="2017CoCfunding.csv")
            
            #summarize awards to CoC level by CFDA
            CoCcfdafunding<-ddply(CoCwithZeros,.(coc_number, coc_name, cfda_number, program_title, types_of_assistance, objectives, beneficiary_eligability, level_of_detail, level_of_focus_on_homelessness, category, program_website, CFDA_website ), summarize, fed_funding=sum(federal_action_obligation))
            
            write.csv(CoCcfdafunding, file="2017CoCCFDAfunding.csv")
            
            #Join award and PIT count information
            #import PIT count data
            pop <- read.csv("2017_PIT_Count.csv", header=TRUE, stringsAsFactors=FALSE)
            Columns<-c("coc_number", "coc_name", "total_homeless", "sheltered_homeless", "unsheltered_homeless", "homeless_individuals", "homeless_people_in_families", "chronically_homeless", "homeless_veterans", "sheltered_homeless_unacompanied_youth")
            popsm<-pop[,c(Columns)]
            AwardPop <- join(CoCfunding, popsm, by="coc_number", type="left", match="all")
            
            write.csv(popsm, file="coc-pop-type.csv")
            write.csv(AwardPop, file="award-pop.csv")
            
            pit<-read.csv("2017_PIT_Count.csv", header=TRUE, stringsAsFactors = FALSE)
            coc_pop_funding<-join (CoCfunding, pit, by="coc_number")
            #write.csv(coc_pop_funding, file="jointest.csv")
            
            coc_pop_funding2<-coc_pop_funding[,c("coc_number", "coc_name", "total_homeless", "sheltered_homeless", "unsheltered_homeless", "homeless_individuals", "homeless_people_in_families", "chronically_homeless", "homeless_veterans", "homeless_unacompanied_youth", "fed_funding")]
            colnames(coc_pop_funding2)<-c("coc_number", "coc_name", "total_homeless", "sheltered_homeless", "unsheltered_homeless", "homeless_individuals", "homeless_people_in_families", "chronically_homeless", "homeless_veterans", "homeless_unacompanied_youth", "amount")
            write.csv(coc_pop_funding2, file="coc_pop_value.csv")
            
            #Clear environment
            rm(list=ls())


#Everything past this point hasn't been QCed!

#first round of data cleaning
      #Population by County
      pop<-read.csv("2016_estimated_population_by_county.csv", header = TRUE, stringsAsFactors = FALSE)
      states<-read.csv("State_crosswalk.csv", header = TRUE, stringsAsFactors = FALSE)
      #remove weird rows
      pop2<-subset(pop, !(pop$GEO.id %in% c("Id", "0100000US")))
      
      #get rid of unwanted columns
      popsm<-pop2[,c("GEO.display.label", "ESTIMATE.HD01_VDIM.VD01")]
      
      #Seperate Geo.display.label into two columns
      locsep<-cbind(popsm,colsplit(pop2$GEO.display.label, ", ", c("County", "State")))
      
      #remove words County, Parish, Census Area
      extrawords<-c(" County", " Parish", " Borough", " Census Area", " Municipality", " City and Burough")
      locsep$County2<-gsub(" County", "",locsep$County)
      locsep$County2<-gsub(" Parish", "",locsep$County2)
      locsep$County2<-gsub(" Borough", "",locsep$County2)
      locsep$County2<-gsub(" Census Area", "",locsep$County2)
      locsep$County2<-gsub(" Municipality", "",locsep$County2)
      locsep$County2<-gsub(" City and Bourough", "",locsep$County2)
      
      #Add state abreviations
      pop3<-join(locsep, states, by="State", type="left", match="all")
      #just keep the columns we want
      pop_county<-pop3[,c("County2", "Abbrv", "ESTIMATE.HD01_VDIM.VD01")]
      #rename columns
      colnames(pop_county)<-c("county", "state", "population")
      #make csv
      write.csv(pop_county, file="pop_county.csv")
      
      
      
      #Income by County
      income <- read.csv("2016_income_estimates_by_quintile.csv", header=TRUE, stringsAsFactors = FALSE)
      
      #remove weird rows
      income2 <- subset(income, !(income$GEO.id %in% c("Id", "0100000US")))
      
      #get rid of unwanted columns
      income3<-income2[,c("GEO.display.label", "ESTIMATE.HD01_VDIM.VD02", "ESTIMATE.HD01_VDIM.VD03", "ESTIMATE.HD01_VDIM.VD04","ESTIMATE.HD01_VDIM.VD05","ESTIMATE.HD01_VDIM.VD06","ESTIMATE.HD01_VDIM.VD07")]
      
      #Seperate Geo.display.label into two columns
      income4<-cbind(income3,colsplit(income3$GEO.display.label, ", ", c("County", "State")))
      
      #remove words County, Parish, Census Area
      income4$County2<-gsub(" County", "", income4$County)
      income4$County2<-gsub(" Parish", "", income4$County2)
      income4$County2<-gsub(" Borough", "", income4$County2)
      income4$County2<-gsub(" Census Area", "", income4$County2)
      income4$County2<-gsub(" Municipality", "", income4$County2)
      income4$County2<-gsub(" City and Bourough", "", income4$County2)
      
      #Add state abreviations
      income5<-join(income4, states, by="State", type="left", match="all")
      
      income_county <- income5[,c("County2", "Abbrv", "ESTIMATE.HD01_VDIM.VD02", "ESTIMATE.HD01_VDIM.VD03", "ESTIMATE.HD01_VDIM.VD04","ESTIMATE.HD01_VDIM.VD05","ESTIMATE.HD01_VDIM.VD06","ESTIMATE.HD01_VDIM.VD07")]
      colnames(income_county)<-c("county", "state", "estimate_income_lowest_quintile", "estimate_income_second_quintile", "estimate_income_third_quintile", "estimate_income_fourth_quintile", "estimate_income_highest_quintile", "estimate_income_top_5_percent")
      
      #create csv
      write.csv(income_county, file="income_county.csv")
      
      #Rental Costs - Census Median Rent
      medrent <- read.csv("Census_Median_Rent_Estimated_2016.csv", header=TRUE, stringsAsFactors = FALSE)
      
      #remove weird rows
      medrent2 <- subset(medrent, !(medrent$GEO.id %in% c("Id", "0100000US")))
      
      #get rid of unwanted columns
      medrent3<-medrent2[,c("GEO.display.label", "ESTIMATE.HD01_VDIM.VD01")]
      
      #Seperate Geo.display.label into two columns
      medrent4<-cbind(medrent3,colsplit(medrent3$GEO.display.label, ", ", c("County", "State")))
      
      #remove words County, Parish, Census Area
      medrent4$County2<-gsub(" County", "", medrent4$County)
      medrent4$County2<-gsub(" Parish", "", medrent4$County2)
      medrent4$County2<-gsub(" Borough", "", medrent4$County2)
      medrent4$County2<-gsub(" Census Area", "", medrent4$County2)
      medrent4$County2<-gsub(" Municipality", "", medrent4$County2)
      medrent4$County2<-gsub(" City and Bourough", "", medrent4$County2)
      
      #Add state abreviations
      medrent5<-join(medrent4, states, by="State", type="left", match="all")
      
      medrent_county <- medrent5[,c("County2", "Abbrv", "ESTIMATE.HD01_VDIM.VD01")]
      colnames(medrent_county)<-c("county", "state", "estimate_median_gross_rent")
      
      #create csv
      write.csv(medrent_county, file="census_median_gross_rent_by_county.csv")
      
      #Rental Costs HUD 50th percentile Rents
      renthud <- read.csv("HUD_50th_Percentile_Rents_2017.csv", header=TRUE, stringsAsFactors = FALSE)
      
      #remove words County, Parish, Census Area
      renthud$County<-gsub(" County", "", renthud$countyname)
      renthud$County<-gsub(" Parish", "", renthud$County)
      renthud$County<-gsub(" Borough", "", renthud$County)
      renthud$County<-gsub(" Census Area", "", renthud$County)
      renthud$County<-gsub(" Municipality", "", renthud$County)
      renthud$County<-gsub(" City and Bourough", "", renthud$County)
      
      #remove extra columns
      renthud2<-renthud[,c("county_town_name", "County", "state_alpha", "Rent50_2", "Rent50_1", "Rent50_0" )]
      colnames(renthud2)<-c("town", "county", "state", "rent_2br", "rent_1br", "rent_studio")
      
      #make csv
      write.csv(renthud2, file="2017_HUD_Rent50.csv")
      
      #HUD FY2018 FMR
      FMR <- read.csv("FY18_HUD_FMRs.csv", header=TRUE, stringsAsFactors = FALSE)
      
      #remove words County, Parish, Census Area
      FMR$County<-gsub(" County", "", FMR$countyname)
      FMR$County<-gsub(" Parish", "", FMR$County)
      FMR$County<-gsub(" Borough", "", FMR$County)
      FMR$County<-gsub(" Census Area", "", FMR$County)
      FMR$County<-gsub(" Municipality", "", FMR$County)
      FMR$County<-gsub(" City and Bourough", "", FMRd$County)
      
      #remove extra columns
      FMR2<-FMR[,c("county_town_name", "areaname", "County", "state_alpha", "fmr_2", "fmr_1", "fmr_0", "fmr_pct_chg")]
      colnames(FMR2)<-c("town", "FMR_area", "county", "state", "FMR_2br", "FMR_1br", "FMR_studio", "FMR_percent_change")
      
      #make csv
      write.csv(FMR2, file="FY2018_HUD_FMR.csv")
      
      #Area by County
      area <- read.csv("DEC_10_SF1_GCTPH1.US05PR_with_ann.csv", header=TRUE, stringsAsFactors=FALSE)
      
      #remove extra columns
      area2 <- area[,c("GCT_STUB.display.label", "GCT_STUB.display.label.1", "SUBHD0301", "SUBHD0302", "SUBHD0303")]
      
      #Break GCT_STUB.display.label into 3 columns: country, state, county
      area3<-cbind(area2,colsplit(area2$GCT_STUB.display.label, " - ", c("country", "State", "county")))
      
      #remove words County, Parish, Census Area
      area3$county2<-gsub(" County", "", area3$county)
      area3$county2<-gsub(" Parish", "", area3$county2)
      area3$county2<-gsub(" Borough", "", area3$county2)
      area3$county2<-gsub(" Census Area", "", area3$county2)
      area3$county2<-gsub(" Municipality", "", area3$county2)
      area3$county2<-gsub(" City and", "", area3$County2)
      
      #remove USA data
      area4<-subset(area3, !(area3$GCT_STUB.display.label %in% c("United States", "Geographic area")))
      
      #seperate data from states and counties
      areastates <- subset(area4, area4$county == "")
      areastates2<- subset(areastates, areastates$country != "Puerto Rico")
      areacounty <- subset(area4, area4$county !="")
      
      #remove columns from State data, rename columns, make csv
      areastates3 <- areastates2[,c("State", "SUBHD0301", "SUBHD0302", "SUBHD0303")]
      colnames(areastates3)<-c("state", "total_area", "water_area", "land_area")
      write.csv(areastates3, file="state_area_square_miles.csv")
      
      #add in state abreviations to county data
      areacounty2<-join(areacounty, states, by="State", type="left", match="all")
      
      #remove columns from county data, rename columns, make csv
      areacounty3 <- areacounty2[,c("Abbrv", "county2", "SUBHD0301", "SUBHD0302", "SUBHD0303")]
      colnames(areacounty3)<-c("state", "county", "total_area", "water_area", "land_area")
      write.csv(areacounty3, file="county_area_square_miles.csv")
      
      #Population by City
      citypop<-read.csv("PEP_2016_PEPANNRSIP.US12A_with_ann.csv", header=TRUE, stringsAsFactors = FALSE)
      
      #Remove extra heading row
      citypop2<-subset(citypop, citypop$GEO.id != "Id")
      
      #Seperate City and State
      citypop3<-cbind(citypop2,colsplit(citypop2$GC_RANK.display.label.1, ", ", c("City", "State")))
      
      
      #remove city town from city name
      citypop3$City2<-gsub(" city", "", citypop3$City)
      citypop3$City2<-gsub(" town", "", citypop3$City2)
      citypop3$City2<-gsub(" village", "", citypop3$City2)
      
      #add in state abreviations
      citypop4<-join(citypop3, states, by="State", type="left", match="all")
      
      #only keep needed columns and rename
      citypop5<-citypop4[,c("City2", "Abbrv", "respop72016")]
      colnames(citypop5)<-c("city", "state", "estimated_pop_2016")
      
      write.csv(citypop5, file="estimated_2016_city_population.csv")
      
      #area by city
      cityarea<-read.csv("city_area_raw_2010.csv", header=TRUE, stringsAsFactors=FALSE)
      
      #Remove extra heading row
      cityarea2<-subset(cityarea, cityarea$GEO.id != "Id")
      
      #Seperate state from city
      cityarea3<-cbind(cityarea2,colsplit(cityarea2$GCT_STUB.display.label, " - ", c("State", "extra", "Place")))
      cityarea4<-cbind(cityarea3,colsplit(cityarea3$Place, ", ", c("City", "County")))
      
      #Remove county from county
      cityarea4$County<-gsub(" County", "", cityarea4$County)
      
      #Remove CDP, City, Town, Village from City
      cityarea4$City<-gsub(" city", "", cityarea4$City)
      cityarea4$City<-gsub(" town", "", cityarea4$City)
      cityarea4$City<-gsub(" village", "", cityarea4$City)
      cityarea4$City<-gsub(" CDP", "", cityarea4$City)
      
      #add in state abreviations
      cityarea5<-join(cityarea4, states, by="State", type="left", match="all")
      
      #remove unwanted columns, rename columns
      cityarea6<-cityarea5[,c("Abbrv", "County", "City", "SUBHD0301", "SUBHD0302", "SUBHD0303")]
      colnames(cityarea6)<- c("state", "county", "city", "total_area", "water_area", "land_area")
      
      write.csv(cityarea6, file="city_area.csv")
      


#Clear environement
      rm(list=ls())
###CoCs are generally defined by county but some are either only one city or are a county plus all of a city that might also exist in surrounding counties, for population and area cities in the list coc_city were subtracted from their surrounding county and then the data was linked to coc and summarized.
##Join Area with CoC and Summarize
      #Read in csvs
      city_area <- read.csv("city_area.csv", header=TRUE, stringsAsFactors = FALSE)
      county_area <- read.csv("county_area_square_miles.csv", header=TRUE, stringsAsFactors = FALSE)
      coc_city <- read.csv("coc_city.csv", header = TRUE, stringsAsFactors = FALSE)
      coc_county <- read.csv("State_County_COC.csv", header=TRUE, stringsAsFactors = FALSE)
      
      #create a csv with the same headers as city_area for weymouth, ma using data from https://www.census.gov/quickfacts/fact/table/weymouthtowncitymassachusetts/PST045217
      weymouth <- read.csv("weymouth.csv", header=TRUE, stringsAsFactors = FALSE)
      #append weymouth to city area
      city_area_a <- rbind(city_area, weymouth)
      
      #seperate cities that are in one county and cities in two counties
      city_area_split <- subset(city_area_a, city_area_a$county == "")
      city_area_2 <- subset(city_area_a, city_area_a$county != "")
      
      #remove state areas
      city_area_split2<- subset(city_area_split, city_area_split$city !="")
      
      
      #seperate city from county
      city_area_split3<-cbind(city_area_split2,colsplit(city_area_split2$city, " - ", c("city2", "county2")))
      #remove the total city area
      city_area_split4<-subset(city_area_split3, city_area_split3$county2 != "")
      
      #get rid of county (part)  
      city_area_split5 <- cbind(city_area_split4, colsplit(city_area_split4$county2, " County ", c("county3", "extra")))
      
      #remove extra columns and rename remaining
      city_area_split6<-city_area_split5[,c("X", "state", "county3", "city2", "total_area", "water_area", "land_area")]
      colnames(city_area_split6)<-c("X", "state", "county", "city", "total_area", "water_area", "land_area")
      
      #append split cities to cities in one county
      city_area_3 <- rbind(city_area_2, city_area_split6)
      
      #creat fields city_state and state_county, make them upper case in city_area_3 and Coc_city
      city_area_3$city_state <- paste(city_area_3$city, city_area_3$state, sep="_")
      city_area_3$city_state <- toupper(city_area_3$city_state)
      city_area_3$state_county <- paste(city_area_3$state, city_area_3$county, sep="_")
      city_area_3$state_county <- toupper(city_area_3$state_county)
      
      coc_city$city_state <- paste(coc_city$City, coc_city$State, sep="_")
      coc_city$city_state <- toupper(coc_city$city_state)
      
      #clean county names so that they match in the two files
      coc_county$County <- gsub("-", " ", coc_county$County)
      coc_county$County <- gsub("Kalawoa", "Kalawao", coc_county$County)
      coc_county$County <- gsub("De Kalb", "DeKalb", coc_county$County)
      coc_county$County <- gsub("St. ", "Saint ", coc_county$County)
      coc_county$County <- gsub("St J", "Saint J", coc_county$County)
      coc_county$County<- gsub("De Soto", "Desoto", coc_county$County)
      coc_county$County <- gsub("Canavanas", "Canovanas", coc_county$County)
      coc_county$state_county <- paste(coc_county$State, coc_county$County, sep="_")
      coc_county$state_county <- toupper(coc_county$state_county)
      
      #create a vector of the cities in coc_city
      cities<-as.vector(coc_city$city_state)
      
      #subset city areas so that only the ones that correspond to those in coc_city are included
      city_area_4<-subset(city_area_3, city_area_3$city_state %in% c(cities))
      
      #subset counties to get counties that relevant cities are located in
      counties<-as.vector(city_area_4$state_county)
      counties2<-unique(counties)
      
      county_area$state_county<-paste(county_area$state, county_area$county, sep="_")
      county_area$state_county<-toupper(county_area$state_county)
      
      county_area2 <- subset(county_area, county_area$state_county %in% counties2)
      county_area2 <- county_area2[,c("state", "county", "total_area", "water_area", "land_area", "state_county")]
      county_area3 <- subset(county_area, !(county_area$state_county %in% counties2))
      county_area3 <-county_area3[,c("state", "county", "total_area", "water_area", "land_area", "state_county")]
      
      #calculate the total area in each county taken up by cities in coc_city
      require(plyr)
      city_area_5 <- ddply(city_area_4,.(state_county, state, county), summarize, total_area=sum(total_area), water_area=sum(water_area), land_area=sum(land_area))
      
      #get rid of extra columns
      city_area_6 <-city_area_5[,c("state", "county", "total_area", "water_area", "land_area", "state_county")]
      
      #append city area to county subset
      county_area4<-rbind(city_area_6, county_area2)
      
      #subtract area in cities in coc_cities from the surrounding county
      county_area5<-ddply(county_area4,.(state_county, state, county), summarize, total_area=(max(total_area)-min(total_area)), water_area=(max(water_area)-min(water_area)), land_area=(max(land_area)-min(land_area)))
      
      #join coc data with city area data
      city_area_7<-join(city_area_4, coc_city, by="city_state")
      
      #remove extra columns
      city_area_8<-city_area_7[,c("coc_number", "coc_name", "total_area", "water_area", "land_area")]
      
      #combine county areas that city area was removed from with the remaining counties
      county_area5<-rbind(county_area5, county_area3)
      
      #clean up county names so those in the area and coc files match
      county_area5$county <- gsub("St. ", "Saint ", county_area5$county)
      #county_area5$county <- gsub("Hoonah-Angoon", "Skagway Hoonah Angoon", county_area5$county)
      county_area5$county <- gsub("Juneau City and", "Juneau", county_area5$county)
      county_area5$county <- gsub("-", " ", county_area5$county)
      county_area5$county <- gsub(" City and", "", county_area5$county)
      county_area5$county <- gsub("District of Columbia", "Washington", county_area5$county)
      county_area5$county <- gsub("De Witt", "Dewitt", county_area5$county)
      county_area5$county <- gsub("LaSalle", "La Salle", county_area5$county)
      county_area5$county <- gsub("LaPorte", "La Porte", county_area5$county)
      county_area5$county <- gsub("'", "", county_area5$county)
      county_area5$county <- gsub("Ste. ", "Sainte ", county_area5$county)
      #county_area5$county <- gsub("Do\?a Ana", "Dona Ana", county_area5$county)
      county_area5$county <- gsub(" Municipio", "", county_area5$county)
      county_area5$county <- gsub("Alexandria city", "City of Alexandria", county_area5$county)
      county_area5$county <- gsub("Baltimore city", "City of Baltimore", county_area5$county)
      county_area5$county <- gsub("Bristol city", "City of Bristol", county_area5$county)
      county_area5$county <- gsub("Buena Vista city", "City of Buena Vista", county_area5$county)
      county_area5$county <- gsub("Charlottesville city", "City of Charlottesville", county_area5$county)
      county_area5$county <- gsub("Chesapeake city", "City of Chesapeake", county_area5$county)
      county_area5$county <- gsub("Colonial Heights city", "City of Colonial Heights", county_area5$county)
      county_area5$county <- gsub("Covington city", "City of Covington", county_area5$county)
      county_area5$county <- gsub("Danville city", "City of Danville", county_area5$county)
      county_area5$county <- gsub("Emporia city", "City of Emporia", county_area5$county)
      county_area5$county <- gsub("Fairfax city", "City of Fairfax", county_area5$county)
      county_area5$county <- gsub("Falls Church city", "City of Falls Church", county_area5$county)
      county_area5$county <- gsub("Franklin city", "City of Franklin", county_area5$county)
      county_area5$county <- gsub("Fredericksburg city", "City of Fredericksburg", county_area5$county)
      county_area5$county <- gsub("Galax city", "City of Galax", county_area5$county)
      county_area5$county <- gsub("Hampton city", "City of Hampton", county_area5$county)
      county_area5$county <- gsub("Harrisonburg city", "City of Harrisonburg", county_area5$county)
      county_area5$county <- gsub("Hopewell city", "City of Hopewell", county_area5$county)
      county_area5$county <- gsub("Lexington city", "City of Lexington", county_area5$county)
      county_area5$county <- gsub("Lynchburg city", "City of Lynchburg", county_area5$county)
      county_area5$county <- gsub("Manassas city", "City of Manassas", county_area5$county)
      county_area5$county <- gsub("Manassas Park city", "City of Manassas Park", county_area5$county)
      county_area5$county <- gsub("Martinsville city", "City of Martinsville", county_area5$county)
      county_area5$county <- gsub("Newport News city", "City of Newport News", county_area5$county)
      county_area5$county <- gsub("Norfolk city", "City of Norfolk", county_area5$county)
      county_area5$county <- gsub("Norton city", "City of Norton", county_area5$county)
      county_area5$county <- gsub("Petersburg city", "City of Petersburg", county_area5$county)
      county_area5$county <- gsub("Poquoson city", "City of Poquoson", county_area5$county)
      county_area5$county <- gsub("Portsmouth city", "City of Portsmouth", county_area5$county)
      county_area5$county <- gsub("Radford city", "City of Radford", county_area5$county)
      county_area5$county <- gsub("Richmond city", "City of Richmond", county_area5$county)
      county_area5$county <- gsub("Roanoke city", "City of Roanoke", county_area5$county)
      county_area5$county <- gsub("Salem city", "City of Salem", county_area5$county)
      county_area5$county <- gsub("Staunton city", "City of Staunton", county_area5$county)
      county_area5$county <- gsub("Saint Louis city", "City of Saint Louis", county_area5$county)
      county_area5$county <- gsub("Suffolk city", "City of Suffolk", county_area5$county)
      county_area5$county <- gsub("Virginia Beach city", "City of Virginia Beach", county_area5$county)
      county_area5$county <- gsub("Waynesboro city", "City of Waynesboro", county_area5$county)
      county_area5$county <- gsub("Williamsburg city", "City of Williamsburg", county_area5$county)
      county_area5$county <- gsub("Winchester city", "City of Winchester", county_area5$county)
      county_area5$county <- gsub("Santa Isabel", "San Isabel", county_area5$county)
      county_area5$county <- gsub("?", "n", county_area5$county)
      county_area5$county<- gsub("De Soto", "Desoto", county_area5$county)
      county_area5$county<-gsub("Wade Hampton", "Kusilvak", county_area5$county)
      county_area5$county[which(county_area5$state_county=="SD_SHANNON")]<-"Oglala Lakota"
      
      
      
      #add column state_county, make upper case
      county_area5$state_county<-paste(county_area5$state, county_area5$county, sep="_")
      county_area5$state_county<-toupper(county_area5$state_county)
      
      #join coc to county area
      county_area6<-join(county_area5, coc_county, by="state_county")
      #write.csv(county_area6, file="testcounty.csv")
      
      #remove extra columns
      county_area7<-county_area6[,c("coc_number", "coc_name", "total_area", "water_area", "land_area")]
      
      #append city to county data
      city_county_area<-rbind(county_area7, city_area_8)
      
      #add together all the area in each coc
      coc_area<-ddply(city_county_area, .(coc_number, coc_name), summarize, total_area=sum(total_area), water_area=sum(water_area), land_area=sum(land_area))
      
      write.csv(coc_area, file="coc_area_sq_miles.csv")
      

##Clear environment
rm(list=ls())

##Join CoC with Population dataset
#the file pop_coc_ns is used to create weighted averages for other variables
#open pop_county.csv in excel and replace the ?s in "A?asco Municipio", "Do?a Ana", "Cata?o Municipio", and "Pe?uelas Municipio" with n

      #join county pop with coc data
      pop_county<-read.csv("pop_county.csv", header=TRUE, stringsAsFactors = FALSE)
      CoCCounty<-read.csv("State_County_COC.csv", header=TRUE, stringsAsFactors = FALSE)
      
      #Clean up county names so that those in pop_county and CoCCounty match
      pop_county$county <- gsub("St. ", "Saint ", pop_county$county)
      #pop_county$county <- gsub("Hoonah-Angoon", "Skagway Hoonah Angoon", pop_county$county)
      pop_county$county <- gsub("Juneau City and", "Juneau", pop_county$county)
      pop_county$county <- gsub("-", " ", pop_county$county)
      pop_county$county <- gsub(" City and", "", pop_county$county)
      pop_county$county <- gsub("District of Columbia", "Washington", pop_county$county)
      pop_county$county <- gsub("De Witt", "Dewitt", pop_county$county)
      pop_county$county <- gsub("LaSalle", "La Salle", pop_county$county)
      pop_county$county <- gsub("LaPorte", "La Porte", pop_county$county)
      pop_county$county <- gsub("'", "", pop_county$county)
      pop_county$county <- gsub("Ste. ", "Sainte ", pop_county$county)
      #pop_county$county <- gsub("Do\?a Ana", "Dona Ana", pop_county$county)
      pop_county$county <- gsub(" Municipio", "", pop_county$county)
      pop_county$county <- gsub("Alexandria city", "City of Alexandria", pop_county$county)
      pop_county$county <- gsub("Baltimore city", "City of Baltimore", pop_county$county)
      pop_county$county <- gsub("Bristol city", "City of Bristol", pop_county$county)
      pop_county$county <- gsub("Buena Vista city", "City of Buena Vista", pop_county$county)
      pop_county$county <- gsub("Charlottesville city", "City of Charlottesville", pop_county$county)
      pop_county$county <- gsub("Chesapeake city", "City of Chesapeake", pop_county$county)
      pop_county$county <- gsub("Colonial Heights city", "City of Colonial Heights", pop_county$county)
      pop_county$county <- gsub("Covington city", "City of Covington", pop_county$county)
      pop_county$county <- gsub("Danville city", "City of Danville", pop_county$county)
      pop_county$county <- gsub("Emporia city", "City of Emporia", pop_county$county)
      pop_county$county <- gsub("Fairfax city", "City of Fairfax", pop_county$county)
      pop_county$county <- gsub("Falls Church city", "City of Falls Church", pop_county$county)
      pop_county$county <- gsub("Franklin city", "City of Franklin", pop_county$county)
      pop_county$county <- gsub("Fredericksburg city", "City of Fredericksburg", pop_county$county)
      pop_county$county <- gsub("Galax city", "City of Galax", pop_county$county)
      pop_county$county <- gsub("Hampton city", "City of Hampton", pop_county$county)
      pop_county$county <- gsub("Harrisonburg city", "City of Harrisonburg", pop_county$county)
      pop_county$county <- gsub("Hopewell city", "City of Hopewell", pop_county$county)
      pop_county$county <- gsub("Lexington city", "City of Lexington", pop_county$county)
      pop_county$county <- gsub("Lynchburg city", "City of Lynchburg", pop_county$county)
      pop_county$county <- gsub("Manassas city", "City of Manassas", pop_county$county)
      pop_county$county <- gsub("Manassas Park city", "City of Manassas Park", pop_county$county)
      pop_county$county <- gsub("Martinsville city", "City of Martinsville", pop_county$county)
      pop_county$county <- gsub("Newport News city", "City of Newport News", pop_county$county)
      pop_county$county <- gsub("Norfolk city", "City of Norfolk", pop_county$county)
      pop_county$county <- gsub("Norton city", "City of Norton", pop_county$county)
      pop_county$county <- gsub("Petersburg city", "City of Petersburg", pop_county$county)
      pop_county$county <- gsub("Poquoson city", "City of Poquoson", pop_county$county)
      pop_county$county <- gsub("Portsmouth city", "City of Portsmouth", pop_county$county)
      pop_county$county <- gsub("Radford city", "City of Radford", pop_county$county)
      pop_county$county <- gsub("Richmond city", "City of Richmond", pop_county$county)
      pop_county$county <- gsub("Roanoke city", "City of Roanoke", pop_county$county)
      pop_county$county <- gsub("Salem city", "City of Salem", pop_county$county)
      pop_county$county <- gsub("Staunton city", "City of Staunton", pop_county$county)
      pop_county$county <- gsub("Saint Louis city", "City of Saint Louis", pop_county$county)
      pop_county$county <- gsub("Suffolk city", "City of Suffolk", pop_county$county)
      pop_county$county <- gsub("Virginia Beach city", "City of Virginia Beach", pop_county$county)
      pop_county$county <- gsub("Waynesboro city", "City of Waynesboro", pop_county$county)
      pop_county$county <- gsub("Williamsburg city", "City of Williamsburg", pop_county$county)
      pop_county$county <- gsub("Winchester city", "City of Winchester", pop_county$county)
      pop_county$county <- gsub("Santa Isabel", "San Isabel", pop_county$county)
      #pop_county$county <- gsub("/?", "n", pop_county$county)
      pop_county$county<- gsub("De Soto", "Desoto", pop_county$county)
      pop_county$state_county<-paste(pop_county$state, pop_county$county, sep="_")
      pop_county$state_county<-toupper(pop_county$state_county)
      
      CoCCounty$County <- gsub("-", " ", CoCCounty$County)
      CoCCounty$County <- gsub("Kalawoa", "Kalawao", CoCCounty$County)
      CoCCounty$County <- gsub("De Kalb", "DeKalb", CoCCounty$County)
      CoCCounty$County <- gsub("St. ", "Saint ", CoCCounty$County)
      CoCCounty$County <- gsub("St J", "Saint J", CoCCounty$County)
      CoCCounty$County<- gsub("De Soto", "Desoto", CoCCounty$County)
      CoCCounty$County <- gsub("Canavanas", "Canovanas", CoCCounty$County)
      #CoCCounty$County<-gsub("De Kalb", "Dekalb", CoCCounty$county)
      CoCCounty$state_county<-paste(CoCCounty$State, CoCCounty$County, sep="_")
      CoCCounty$state_county<-toupper(CoCCounty$state_county)
      
      #connect county population data with its coc_number/name
      pop_county2<-join(pop_county, CoCCounty, by="state_county")
      pop_county3<-pop_county2[,c("county", "state", "coc_number", "coc_name", "population", "state_county")]
      write.csv(pop_county3, file="pop_county_coc.csv")
      
      #join city pop with coc data
      pop_city <- read.csv("estimated_2016_city_population.csv", header=TRUE, stringsAsFactors = FALSE)
      pop_citya <- pop_city[,c("city", "state", "estimated_pop_2016")]
      pop_city2 <- read.csv("city_state_pop2.csv", header=TRUE, stringsAsFactors = FALSE)
      pop_city3 <- pop_city2[,c("city", "state", "estimated_pop_2016")]
      coc_city <- read.csv("coc_city.csv", header = TRUE, stringsAsFactors = FALSE)
      pop_city4 <- rbind(pop_citya, pop_city3)
      
      pop_city4$city_state <- paste(pop_city4$city, pop_city4$state, sep="_")
      pop_city4$city_state <- toupper(pop_city4$city_state)
      coc_city$city_state <- paste(coc_city$City, coc_city$State, sep="_")
      coc_city$city_state <- toupper(coc_city$city_state)
      pop_city_coc <- join(coc_city, pop_city4, by="city_state", type="left", match="all")
      write.csv(pop_city_coc, file="pop_city_coc.csv")
      
      #do math
      #create state_county column
      pop_city_coc$state_county <- paste(pop_city_coc$State, pop_city_coc$County, sep="_")
      
      #capitalize
      pop_city_coc$state_county <- toupper(pop_city_coc$state_county)
      #pop_city_coc$estimated_pop_2016 <- gsub(",","",pop_city_coc$estimated_pop_2016)
      #pop_city_coc$estimated_pop_2016_2 <- as.numeric(as.character(pop_county_coc$estimated_pop_2016))
      
      #create a list of unique counties that the cities are located in
      counties<-as.vector(pop_city_coc$state_county)
      counties2<-unique(counties)
      
      #seperate population of counties in cities file from other files
      pop_county4<-subset(pop_county3, pop_county3$state_county %in% c(counties2))
      pop_county5<-subset(pop_county3, !(pop_county3$state_county %in% c(counties2)))
      
      #add the populations of cities in the same county together
      require(plyr)
      pop_city_summed <- ddply(pop_city_coc, .(state_county, County, State), summarize, estimated_pop_2016=sum(estimated_pop_2016))
      
      #add missing columns
      pop_city_summed$coc_number<-"NA"
      pop_city_summed$coc_name<-"NA"
      
      #subset/rename columns so they match pop_county4
      pop_city_summed2<-pop_city_summed[,c("County", "State", "coc_number", "coc_name", "estimated_pop_2016", "state_county")]
      colnames(pop_city_summed2)<-c("county", "state", "coc_number", "coc_name", "population", "state_county")
      
      #combine city population and county population files
      pop_county6<-rbind(pop_county4, pop_city_summed2)
      
      #subtract population of cities in seperate coc's from that of the rest of the county
      pop_county7<-ddply(pop_county6,.(state_county, county, state), summarize, estimated_pop_2016=(max(population)-min(population)))
      
      #add coc back into file
      pop_county8<-join(pop_county7, CoCCounty, by="state_county", type="left", match="all")
      
      #subset columns
      pop_county9<-pop_county8[,c("coc_number", "coc_name", "estimated_pop_2016", "county", "state")]
      pop_county10<-pop_county5[,c("coc_number", "coc_name", "population", "county", "state")]
      colnames(pop_county10)<- c("coc_number", "coc_name", "estimated_pop_2016", "county", "state")
      pop_city_coc2<-pop_city_coc[,c("coc_number", "coc_name", "estimated_pop_2016","County", "state")]
      colnames(pop_city_coc2)<- c("coc_number", "coc_name", "estimated_pop_2016", "county", "state")
      
      #join files and sum total population in each coc
      pop_coc_ns<-rbind(pop_county9, pop_county10, pop_city_coc2)
      write.csv(pop_coc_ns, file="pop_coc_ns.csv")
      pop_coc <- ddply(pop_coc_ns,.(coc_number, coc_name), summarize, estimated_pop_2016=sum(estimated_pop_2016))
      
      write.csv(pop_coc, file="coc_estimated_2016_population.csv")

##Clear environment
rm(list=ls())

##Create a weighted income for each CoC based upon income and population of each county within it
#open income_county.csv in excel and replace the ?s in "A?asco Municipio", "Do?a Ana", "Cata?o Municipio", and "Pe?uelas Municipio" with n
#Data is missing in income for Kalawao County, HI; Border County, TX; Kenedy County, TX; King COunty, TX; La Salle County, TX; Loving County, TX; Dagget County, UT
    
    income<-read.csv("income_county.csv")
    pop<-read.csv("pop_coc_ns.csv")
    
    #Clean names in income file
    
    income$county <- gsub("St. ", "Saint ", income$county)
    #income$county <- gsub("Hoonah-Angoon", "Skagway Hoonah Angoon", income$county)
    income$county <- gsub("Juneau City and", "Juneau", income$county)
    income$county <- gsub("-", " ", income$county)
    income$county <- gsub(" City and", "", income$county)
    income$county <- gsub("District of Columbia", "Washington", income$county)
    income$county <- gsub("De Witt", "Dewitt", income$county)
    income$county <- gsub("LaSalle", "La Salle", income$county)
    income$county <- gsub("LaPorte", "La Porte", income$county)
    income$county <- gsub("'", "", income$county)
    income$county <- gsub("Ste. ", "Sainte ", income$county)
    #income$county <- gsub("Do\?a Ana", "Dona Ana", income$county)
    income$county <- gsub(" Municipio", "", income$county)
    income$county <- gsub("Alexandria city", "City of Alexandria", income$county)
    income$county <- gsub("Baltimore city", "City of Baltimore", income$county)
    income$county <- gsub("Bristol city", "City of Bristol", income$county)
    income$county <- gsub("Buena Vista city", "City of Buena Vista", income$county)
    income$county <- gsub("Charlottesville city", "City of Charlottesville", income$county)
    income$county <- gsub("Chesapeake city", "City of Chesapeake", income$county)
    income$county <- gsub("Colonial Heights city", "City of Colonial Heights", income$county)
    income$county <- gsub("Covington city", "City of Covington", income$county)
    income$county <- gsub("Danville city", "City of Danville", income$county)
    income$county <- gsub("Emporia city", "City of Emporia", income$county)
    income$county <- gsub("Fairfax city", "City of Fairfax", income$county)
    income$county <- gsub("Falls Church city", "City of Falls Church", income$county)
    income$county <- gsub("Franklin city", "City of Franklin", income$county)
    income$county <- gsub("Fredericksburg city", "City of Fredericksburg", income$county)
    income$county <- gsub("Galax city", "City of Galax", income$county)
    income$county <- gsub("Hampton city", "City of Hampton", income$county)
    income$county <- gsub("Harrisonburg city", "City of Harrisonburg", income$county)
    income$county <- gsub("Hopewell city", "City of Hopewell", income$county)
    income$county <- gsub("Lexington city", "City of Lexington", income$county)
    income$county <- gsub("Lynchburg city", "City of Lynchburg", income$county)
    income$county <- gsub("Manassas city", "City of Manassas", income$county)
    income$county <- gsub("Manassas Park city", "City of Manassas Park", income$county)
    income$county <- gsub("Martinsville city", "City of Martinsville", income$county)
    income$county <- gsub("Newport News city", "City of Newport News", income$county)
    income$county <- gsub("Norfolk city", "City of Norfolk", income$county)
    income$county <- gsub("Norton city", "City of Norton", income$county)
    income$county <- gsub("Petersburg city", "City of Petersburg", income$county)
    income$county <- gsub("Poquoson city", "City of Poquoson", income$county)
    income$county <- gsub("Portsmouth city", "City of Portsmouth", income$county)
    income$county <- gsub("Radford city", "City of Radford", income$county)
    income$county <- gsub("Richmond city", "City of Richmond", income$county)
    income$county <- gsub("Roanoke city", "City of Roanoke", income$county)
    income$county <- gsub("Salem city", "City of Salem", income$county)
    income$county <- gsub("Staunton city", "City of Staunton", income$county)
    income$county <- gsub("Suffolk city", "City of Suffolk", income$county)
    income$county <- gsub("Saint Louis city", "City of Saint Louis", income$county)
    income$county <- gsub("Virginia Beach city", "City of Virginia Beach", income$county)
    income$county <- gsub("Waynesboro city", "City of Waynesboro", income$county)
    income$county <- gsub("Williamsburg city", "City of Williamsburg", income$county)
    income$county <- gsub("Winchester city", "City of Winchester", income$county)
    income$county <- gsub("Santa Isabel", "San Isabel", income$county)
    income$county<- gsub("De Soto", "Desoto", income$county)
    income$state_county<-paste(income$state, income$county, sep="_")
    income$state_county<-toupper(income$state_county)
    
    #connect income and pop information
    income_pop <- join(pop, income, by=c("state", "county"), type="left", match="all")
    #write.csv(income_pop, file="income_pop.csv")
    
    #Remove NA's from income data
    income_pop2 <- subset(income_pop, income_pop$estimate_income_lowest_quintile != "NA")
    
    #write.csv(income_pop2, file="income_pop2.csv")
    coc_income<-income_pop2 %>% group_by(coc_number, coc_name) %>% summarize(weighted_income = weighted.mean(estimate_income_lowest_quintile, estimated_pop_2016))
    
    write.csv(coc_income, file="coc_mean_income_lowest_quintile.csv")


###Clear environment
rm(list=ls())

###Create a weighted rent for each CoC

    #open Census_Median_Rent.csv in excel and replace the ?s in "A?asco Municipio", "Do?a Ana", "Cata?o Municipio", and "Pe?uelas Municipio" with n
    #data is missing rent for Cottle County, TX
    
    rent <- read.csv("census_median_gross_rent_by_county.csv", header=TRUE, stringsAsFactors = FALSE)
    pop <- read.csv("pop_coc_ns.csv", header=TRUE, stringsAsFactors = FALSE)
    
    #Clean county names
    rent$county <- gsub("St. ", "Saint ", rent$county)
    rent$county <- gsub("Juneau City and", "Juneau", rent$county)
    rent$county <- gsub("-", " ", rent$county)
    rent$county <- gsub(" City and", "", rent$county)
    rent$county <- gsub("District of Columbia", "Washington", rent$county)
    rent$county <- gsub("De Witt", "Dewitt", rent$county)
    rent$county <- gsub("LaSalle", "La Salle", rent$county)
    rent$county <- gsub("LaPorte", "La Porte", rent$county)
    rent$county <- gsub("'", "", rent$county)
    rent$county <- gsub("Ste. ", "Sainte ", rent$county)
    rent$county <- gsub(" Municipio", "", rent$county)
    rent$county <- gsub("Alexandria city", "City of Alexandria", rent$county)
    rent$county <- gsub("Baltimore city", "City of Baltimore", rent$county)
    rent$county <- gsub("Bristol city", "City of Bristol", rent$county)
    rent$county <- gsub("Buena Vista city", "City of Buena Vista", rent$county)
    rent$county <- gsub("Charlottesville city", "City of Charlottesville", rent$county)
    rent$county <- gsub("Chesapeake city", "City of Chesapeake", rent$county)
    rent$county <- gsub("Colonial Heights city", "City of Colonial Heights", rent$county)
    rent$county <- gsub("Covington city", "City of Covington", rent$county)
    rent$county <- gsub("Danville city", "City of Danville", rent$county)
    rent$county <- gsub("Emporia city", "City of Emporia", rent$county)
    rent$county <- gsub("Fairfax city", "City of Fairfax", rent$county)
    rent$county <- gsub("Falls Church city", "City of Falls Church", rent$county)
    rent$county <- gsub("Franklin city", "City of Franklin", rent$county)
    rent$county <- gsub("Fredericksburg city", "City of Fredericksburg", rent$county)
    rent$county <- gsub("Galax city", "City of Galax", rent$county)
    rent$county <- gsub("Hampton city", "City of Hampton", rent$county)
    rent$county <- gsub("Harrisonburg city", "City of Harrisonburg", rent$county)
    rent$county <- gsub("Hopewell city", "City of Hopewell", rent$county)
    rent$county <- gsub("Lexington city", "City of Lexington", rent$county)
    rent$county <- gsub("Lynchburg city", "City of Lynchburg", rent$county)
    rent$county <- gsub("Manassas city", "City of Manassas", rent$county)
    rent$county <- gsub("Manassas Park city", "City of Manassas Park", rent$county)
    rent$county <- gsub("Martinsville city", "City of Martinsville", rent$county)
    rent$county <- gsub("Newport News city", "City of Newport News", rent$county)
    rent$county <- gsub("Norfolk city", "City of Norfolk", rent$county)
    rent$county <- gsub("Norton city", "City of Norton", rent$county)
    rent$county <- gsub("Petersburg city", "City of Petersburg", rent$county)
    rent$county <- gsub("Poquoson city", "City of Poquoson", rent$county)
    rent$county <- gsub("Portsmouth city", "City of Portsmouth", rent$county)
    rent$county <- gsub("Radford city", "City of Radford", rent$county)
    rent$county <- gsub("Richmond city", "City of Richmond", rent$county)
    rent$county <- gsub("Roanoke city", "City of Roanoke", rent$county)
    rent$county <- gsub("Salem city", "City of Salem", rent$county)
    rent$county <- gsub("Staunton city", "City of Staunton", rent$county)
    rent$county <- gsub("Suffolk city", "City of Suffolk", rent$county)
    rent$county <- gsub("Saint Louis city", "City of Saint Louis", rent$county)
    rent$county <- gsub("Virginia Beach city", "City of Virginia Beach", rent$county)
    rent$county <- gsub("Waynesboro city", "City of Waynesboro", rent$county)
    rent$county <- gsub("Williamsburg city", "City of Williamsburg", rent$county)
    rent$county <- gsub("Winchester city", "City of Winchester", rent$county)
    rent$county <- gsub("Santa Isabel", "San Isabel", rent$county)
    rent$county<- gsub("De Soto", "Desoto", rent$county)
    
    #create field state_county
    rent$state_county<-paste(rent$state, rent$county, sep="_")
    rent$state_county<-toupper(rent$state_county)
    
    rent_pop <- join(pop, rent, by=c("state", "county"), type="left", match="all")
    rent_pop$estimate_median_gross_rent<-as.numeric(rent_pop$estimate_median_gross_rent)
    #write.csv(rent_pop, file="rent_pop.csv")
    rent_pop2 <- subset(rent_pop, rent_pop$estimate_median_gross_rent != "NA")
    rent_pop3 <- rent_pop2[,c("coc_number", "coc_name", "estimated_pop_2016", "county", "state", "estimate_median_gross_rent")]
    
    coc_rent<-rent_pop3 %>% group_by(coc_number, coc_name) %>% summarize(weighted_estimate_median_gross_rent = weighted.mean(estimate_median_gross_rent, estimated_pop_2016))
    
    write.csv(coc_rent, file="weighted_mean_census_median_gross_rent_by_coc.csv")


###Clear Environment
rm(list=ls())

###Create a weighted average percent of drug use, alcohol dependence, and serious mental health using population, all three files were from the same study, so the process was the same for each
    #read csvs
    county <- read.csv("NSDUH_CoC.csv", header=TRUE, stringsAsFactors = FALSE)
    #city <- read.csv("city_nsduh_coc.csv", header=TRUE, stringsAsFactors = FALSE)
    drugs <- read.csv("NSDUHsubstateExcelTab01-2014.csv", header=TRUE, stringsAsFactors = FALSE, skip=7)
    alcohol <- read.csv("NSDUHsubstateExcelTab17-2014.csv", header=TRUE, stringsAsFactors = FALSE, skip=7)
    mental <- read.csv("NSDUHsubstateExcelTab24-2014.csv", header=TRUE, stringsAsFactors = FALSE, skip=7)
    pop <- read.csv("pop_coc_ns.csv", header=TRUE, stringsAsFactors = FALSE)
    state <- read.csv("State_crosswalk.csv", header=TRUE, stringsAsFactors = FALSE)
    
    #join and combine drug use data
    
    #create field state_substate
    county$state_substate <- paste(county$State, county$NSDUH.Substate.Region, sep = "_")
    county$state_substate <- toupper (county$state_substate)
    
    #city$state_substate <- paste(city$State, city$NSDUH.Substate.Region, sep = "_")
    #city$state_substate <- toupper (city$state_substate)
    
    
    #add in astae abreviation
    drugs2 <- join (drugs, state, by="State")
    #create field state_substate, make uppdercase
    drugs2$state_substate <- paste(drugs2$Abbrv, drugs2$Substate.Region, sep="_")
    drugs2$state_substate <- toupper(drugs2$state_substate)
    
    #join drug information to county by substate
    dcounty <- join(county, drugs2, by="state_substate")
    #dcity <- join(city, drugs2, by="state_substate")
    #write.csv(dcounty, file="testdrugs2.csv")
    
    #create field state_county, make uppercase
    dcounty$state_county <- paste(dcounty$State, dcounty$County, sep="_")
    dcounty$state_county <-toupper(dcounty$state_county)
    
    #get rid of extra columns
    dcounty2<-dcounty[,c("State", "County", "Small.Area.Estimate", "state_county")]
    
    #cleanup county names
    dcounty2$state_county <- gsub("DE KALB", "DEKALB", dcounty2$state_county)
    dcounty2$state_county <- gsub("DE SOTO", "DESOTO", dcounty2$state_county)
    dcounty2$state_county <- gsub("KALAWOA", "KALAWAO", dcounty2$state_county)
    dcounty2$state_county <- gsub("MIAMI-DADE", "MIAMI DADE", dcounty2$state_county)
    dcounty2$state_county <- gsub("ST JOSEPH", "SAINT JOSEPH", dcounty2$state_county)
    dcounty2$state_county <- gsub("ST JOHN THE BAPTIST", "SAINT JOHN THE BAPTIST", dcounty2$state_county)
    dcounty2$state_county <- gsub("CITY OF ST. LOUIS", "CITY OF SAINT LOUIS", dcounty2$state_county)
    
    #create state_county in pop
    pop$state_county <-paste(pop$state, pop$county, sep="_")
    pop$state_county <- toupper(pop$state_county)
    
    #join drug use to population  
    dcountypop <- join(pop, dcounty2, by="state_county")
    #write.csv(dcountypop, file="drugstest.csv")
    
    #remove counties with no data
    dcountypop2 <- subset(dcountypop, dcountypop$Small.Area.Estimate != "NA")
    #remove percentage sign
    dcountypop2$Small.Area.Estimate <- gsub("%", "", dcountypop2$Small.Area.Estimate)
    #make small.area.estimate numeric
    dcountypop2$Small.Area.Estimate <- as.numeric(dcountypop2$Small.Area.Estimate )
    #calculate a weighted average by coc
    coc_drug_use <- dcountypop2 %>% group_by(coc_number, coc_name) %>% summarize (weighted_drug_use=weighted.mean(Small.Area.Estimate, estimated_pop_2016))
    
    write.csv(coc_drug_use, file="illicit_drug_use_by_coc.csv")
    
    #Repeat for alcohol and mental health
    alcohol2 <- join (alcohol, state, by="State")
    alcohol2$state_substate <- paste(alcohol2$Abbrv, alcohol2$Substate.Region, sep="_")
    alcohol2$state_substate <- toupper(alcohol2$state_substate)
    
    acounty <- join(county, alcohol2, by="state_substate")
    #dcity <- join(city, alcohol2, by="state_substate")
    #write.csv(acounty, file="testalcohol2.csv")
    
    acounty$state_county <- paste(acounty$State, acounty$County, sep="_")
    acounty$state_county <-toupper(acounty$state_county)
    
    acounty2<-acounty[,c("State", "County", "Small.Area.Estimate", "state_county")]
    
    acounty2$state_county <- gsub("DE KALB", "DEKALB", acounty2$state_county)
    acounty2$state_county <- gsub("DE SOTO", "DESOTO", acounty2$state_county)
    acounty2$state_county <- gsub("KALAWOA", "KALAWAO", acounty2$state_county)
    acounty2$state_county <- gsub("MIAMI-DADE", "MIAMI DADE", acounty2$state_county)
    acounty2$state_county <- gsub("ST JOSEPH", "SAINT JOSEPH", acounty2$state_county)
    acounty2$state_county <- gsub("ST JOHN THE BAPTIST", "SAINT JOHN THE BAPTIST", acounty2$state_county)
    acounty2$state_county <- gsub("CITY OF ST. LOUIS", "CITY OF SAINT LOUIS", acounty2$state_county)
    
    acountypop <- join(pop, acounty2, by="state_county")
    write.csv(acountypop, file="alcoholtest.csv")
    
    acountypop2 <- subset(acountypop, acountypop$Small.Area.Estimate != "NA")
    acountypop2$Small.Area.Estimate <- gsub("%", "", acountypop2$Small.Area.Estimate)
    acountypop2$Small.Area.Estimate <- as.numeric(acountypop2$Small.Area.Estimate )
    coc_alcohol_use <- acountypop2 %>% group_by(coc_number, coc_name) %>% summarize (weighted_alcohol_dependence_or_abuse=weighted.mean(Small.Area.Estimate, estimated_pop_2016))
    
    write.csv(coc_alcohol_use, file="alcohol_dependence_or_abuse_by_coc.csv")
    
    
    #join mental health data with coc and summarize
    mental2 <- join (mental, state, by="State")
    mental2$state_substate <- paste(mental2$Abbrv, mental2$Substate.Region, sep="_")
    mental2$state_substate <- toupper(mental2$state_substate)
    
    mhcounty <- join(county, mental2, by="state_substate")
    #dcity <- join(city, mental2, by="state_substate")
    #write.csv(mhcounty, file="testmental2.csv")
    
    mhcounty$state_county <- paste(mhcounty$State, mhcounty$County, sep="_")
    mhcounty$state_county <-toupper(mhcounty$state_county)
    
    mhcounty2<-mhcounty[,c("State", "County", "Small.Area.Estimate", "state_county")]
    
    mhcounty2$state_county <- gsub("DE KALB", "DEKALB", mhcounty2$state_county)
    mhcounty2$state_county <- gsub("DE SOTO", "DESOTO", mhcounty2$state_county)
    mhcounty2$state_county <- gsub("KALAWOA", "KALAWAO", mhcounty2$state_county)
    mhcounty2$state_county <- gsub("MIAMI-DADE", "MIAMI DADE", mhcounty2$state_county)
    mhcounty2$state_county <- gsub("ST JOSEPH", "SAINT JOSEPH", mhcounty2$state_county)
    mhcounty2$state_county <- gsub("ST JOHN THE BAPTIST", "SAINT JOHN THE BAPTIST", mhcounty2$state_county)
    mhcounty2$state_county <- gsub("CITY OF ST. LOUIS", "CITY OF SAINT LOUIS", mhcounty2$state_county)
    
    mhcountypop <- join(pop, mhcounty2, by="state_county")
    write.csv(mhcountypop, file="mentaltest.csv")
    
    mhcountypop2 <- subset(mhcountypop, mhcountypop$Small.Area.Estimate != "NA")
    mhcountypop2$Small.Area.Estimate <- gsub("%", "", mhcountypop2$Small.Area.Estimate)
    mhcountypop2$Small.Area.Estimate <- as.numeric(mhcountypop2$Small.Area.Estimate )
    coc_mental_health <- mhcountypop2 %>% group_by(coc_number, coc_name) %>% summarize (weighted_mental_illness=weighted.mean(Small.Area.Estimate, estimated_pop_2016))
    
    write.csv(coc_mental_health, file="serious_mental_illness_by_coc.csv")    

###Clear environment
rm(list=ls())

###Create a property crime rate for each coc (it was in the agency data more frequently than the violent crime rate). Since there was no county-wide data (only state and "agency", which was usually a city police force) in situations where the CoC was a city we used the city rate, where the CoC was only one county, we used the rate of the county's largest city. In all other cases we used the state rate.

    #read in csvs
    zipdata<-read.csv("Zip_State_County.csv", header=TRUE, stringsAsFactors = FALSE)
    cocdata<-read.csv("State_County_COC.csv", header=TRUE, stringsAsFactors = FALSE)
    local<-read.csv("UCR by Agency 2014.csv", header=TRUE, stringsAsFactors = FALSE, skip=8)
    cities<-read.csv("coc_city.csv", header=TRUE, stringsAsFactors = FALSE)
    topcities<-read.csv("estimated_2016_city_population.csv", header = TRUE, stringsAsFactors = FALSE)
    cocone<-read.csv("COC_one_county.csv", header=TRUE, stringsAsFactors = FALSE)
    staterate<-read.csv("UCR by State 2014.csv", header=TRUE, stringsAsFactors = FALSE, skip=9)
    cocs<-read.csv("coc-state.csv", header=TRUE, stringsAsFactors = FALSE)
    ma<-read.csv("coc-ma-missing.csv", header=TRUE, stringsAsFactors = FALSE)
    state <- read.csv("State_crosswalk.csv", header=TRUE, stringsAsFactors = FALSE)
    
    #add column state_countyto coc and zip data
    zipdata$state_county<-paste(zipdata$State, zipdata$County, sep="_")
    zipdata$state_county<-toupper(zipdata$state_county)
    
    cocdata$state_county<-paste(cocdata$State, cocdata$County, sep="_")
    cocdata$state_county<-toupper(cocdata$state_county)
    #join zip and coc data, remove extra columns
    zipcoc<-join(zipdata, cocdata, by="state_county", type="left", match="all")
    zipcoc<-zipcoc[,c("State", "City", "coc_number", "coc_name")]
    #write.csv(zipcoc, file="coc_cities2.csv")
    
    #create field city_state
    cities$city_state<-paste(cities$City, cities$State, sep="_")
    cities$city_state <- toupper(cities$city_state)
    
    #remove cities with no data for property crime rate
    localp2<-subset(local, local$Property.crime.rate!="NA")
    #get city name from agency
    localp2$location<-gsub("Police Department", "", localp2$Agency)
    localp2$location<-gsub("Police Dept", "", localp2$location)
    
    #create field city_state
    localp2$city_state <- paste(localp2$location, localp2$State, sep="_")
    localp2$city_state <-toupper(localp2$city_state)
    
    #further clean city_state
    localp2$city_state <-gsub(" _", "_", localp2$city_state)
    localp2$city_state <-gsub(" _", "_", localp2$city_state)
    
    #connect local data to coc_city
    coc_citiesp<- join(localp2, cities, by="city_state")
    #subset cities that have cocs
    coc_citiesp2<-subset(coc_citiesp, coc_citiesp$coc_number !="NA")
    
    #subset cities that don't have cocs
    localp3<-coc_citiesp[is.na(coc_citiesp$coc_number),]
    
    #create field city_state in topcities
    topcities$city_state <- paste(topcities$city, topcities$state, sep="_")
    topcities$city_state <-toupper(topcities$city_state)
    
    #cleanup city names
    topcities$city_state <-gsub("ST. ", "SAINT ", topcities$city_state)
    topcities$city_state[which(topcities$city_state=="INDIANAPOLIS (BALANCE)_IN")] <-"INDIANAPOLIS_IN"
    topcities$city_state[which(topcities$city_state=="ANCHORAGE MUNICIPALITY_AK")] <-"ANCHORAGE_AK"
    topcities$city_state[which(topcities$city_state=="LEXINGTON-FAYETTE URBAN COUNTY_KY")] <-"LEXINGTON_KY"
    topcities$city_state[which(topcities$city_state=="URBAN HONOLULU CDP_HI")] <-"HONOLULU_HI"
    topcities$city_state[which(topcities$city_state=="LOUISVILLE/JEFFERSON COUNTY METRO GOVERNMENT (BALANCE)_KY")] <-"LOUISVILLE_KY"
    topcities$city_state[which(topcities$city_state=="NASHVILLE-DAVIDSON METROPOLITAN GOVERNMENT (BALANCE)_TN")] <-"NASHVILLE_TN"
    
    
    cc<-read.csv("coc_cities2.csv", header=TRUE, stringsAsFactors = FALSE)
    
    #create column city_state
    cc$city_state<-paste(cc$City, cc$State, sep="_")
    cc$city_state<-toupper(cc$city_state)
    
    #join top city population info with coc data
    topc_coc<-join(topcities, cc, by="city_state")
    topc_coc2<-subset(topc_coc, topc_coc$estimated_pop_2016 > 250000)
    
    #create vector of cocs with one county
    coc<-as.vector(cocone$coc_number)
    
    #subset city populations by those in cocs with only one county
    topc_coc3<-subset(topc_coc2, topc_coc2$coc_number %in% c(coc))
    
    remove <- c("PA-502", "CA-512", "OR-507", "OR-506", "OK-504", "MD-503", "MD-505", "GA-508")
    topc_coc4<-subset(topc_coc3, !(topc_coc3$coc_number %in% c(remove)))
    topc_coc5<-subset(topc_coc4, topc_coc4$X.1 != 18445)
    
    #clean city_state names in local data and population data
    localp3$city_state<-gsub(" METROPOLITAN", "", localp3$city_state)
    localp3$city_state<-gsub(" METRO", "", localp3$city_state)
    localp3$city_state<-gsub("ST. ", "SAINT ", localp3$city_state)
    topc_coc5$city_state[which(topc_coc5$city_state=="CHARLOTTE_NC")] <-"CHARLOTTE-MECKLENBURG_NC"
    #topc_coc5$city_state[which(topc_coc5$city_state=="WASHINGTON_DC")] <-"WASHINGTON METROPOLITAN_DC"
    topc_coc5$city_state[which(topc_coc5$city_state=="NASHVILLE_TN")] <-"NASHVILLE-DAVIDSON_TN"
    topc_coc5$city_state[which(topc_coc5$city_state=="BALTIMORE_MD")] <-"BALTIMORE CITY_MD"
    topc_coc5$city_state[which(topc_coc5$city_state=="LEXINGTON_KY")] <-"LEXINGTON-FAYETTE COUNTY_KY"
    topc_coc5$city_state[which(topc_coc5$city_state=="MADISON_WI")] <-"MADISON CITY_WI"
    
    
    #join local rates with cocs with large cities
    localp4<-join(topc_coc5, localp3, by="city_state")
    #subset locations that have information
    localp5<-subset(localp4, localp4$Agency != "NA")
    #remove extra columns
    localp6<-localp5[,c("city_state", "coc_number", "coc_name", "Property.crime.rate")]
    coc_citiesp3<-coc_citiesp2[,c("city_state", "coc_number", "coc_name", "Property.crime.rate")]
    #combine two city lists
    ratebycity<-rbind(localp6, coc_citiesp3)
    #remove smaller cities within the cocs
    remove2<-c("MESA_AZ", "CHULA VISTA_CA", "SANTA ANA_CA", "IRVINE_CA", "HENDERSON_NV")
    ratebycity2<-subset(ratebycity, !(ratebycity$city_state %in% c(remove2)))
    #remove extra columns
    ratebycity2<-ratebycity2[,c("coc_number", "coc_name", "Property.crime.rate")]
    
    #create a vector of the cocs whose rate is determined by major city
    removecoc<-ratebycity$coc_number
    
    cocs<-rbind(cocs, ma)
    #remove cocs that are determined by city
    cocs_state<-subset(cocs, !(cocs$coc_number %in% c(removecoc)))
    colnames(cocs_state)<-c("Abbrv", "coc_number", "coc_name")
    
    #join state rates to state abreviation then to coc
    staterate2<-join(staterate, state, by="State")                 
    staterate3<-join(cocs_state, staterate2, by="Abbrv")
    #remove extra columns
    staterate4<-staterate3[,c("coc_number", "coc_name", "Property.crime.rate")]
    #join cocs with rates determined by state to those with rates determined by city
    propertycrime<-rbind(ratebycity2, staterate4)
    
    #remove no coc and are with ni property crime rate
    propertycrime<-subset(propertycrime, propertycrime$coc_number != "No CoC")
    propertycrime<-subset(propertycrime, propertycrime$Property.crime.rate != "NA")
    
    write.csv(propertycrime, file="coc_property_crime_rate.csv")


###Clear the environment
rm(list=ls())

###Find the max # of days below freezing for each CoC.

##Matt pulled the original data, I connected it to CoC and found the max number of days but there were some CoCs that didn't have any data. I sent that list to Matt and he then mannually pulled the data for those CoCs and then I combined that list with the existing data
      #TALK TO MATT ABOUT QUESTIONS WITH THIS SECTION
      # get NOAA data
      options(noaakey = "QxrmQbmZtApmsnOtmkNHiBlwVBtaxiFL")
      
      states<-read.csv("State_crosswalk.csv")
      states<-states[,2]
      
      #get station ids
      stations <- ghcnd_stations()
      s_init<-stations[stations$last_year>=2017 & stations$first_year<=2012,]
      s_init<-s_init[!is.na(s_init$id),]
      s_init<-s_init[s_init$state%in%states,]
      s_init<-s_init[s_init$element=="TMIN",]
      s_ids<-as.data.frame(unique(s_init[,c(1,2,3,5,6)]))
      
      getNOAA<-function(x){
        id<-x[1][[1]]
        z<-ghcnd_search(stationid=id,var="TMIN",date_min="2012-01-01",date_max="2017-12-31")
        z<-as.data.frame(z[1][[1]])
        zz<-nrow(z)
        z<-z[!is.na(getElement(z,"tmin")),]
        z["tmin"]<-(getElement(z,"tmin")/10) * (9/5) + 32
        y<-z[getElement(z,"tmin")<=32,]
        ifelse(zz==0 | nrow(y)==0, return(x["DaysBelowFrz"]<-0), return(x["DaysBelowFrz"]<-(nrow(y)/zz)*365))
      }
      
      # TEST
      d1<-apply(as.data.frame(s_ids[8001:8098,]),1,getNOAA)
      
      # RUN
      # DaysBelowFrz<-d1  #run on first pass
      DaysBelowFrz<-c(DaysBelowFrz,d1)
      
      z<-cbind(s_ids,DaysBelowFrz)
      colnames(z)[4]<-"State"
      colnames(z)[5]<-"City"
      # write.csv(x = z,file = "/Users/matthewmurray/Documents/CoC_Temp.csv",row.names = F)
      #z<-read.csv("/Users/matthewmurray/Documents/CoC_Temp.csv")
      
      county<-read.csv("/Users/matthewmurray/Downloads/State_county_city.csv")
      
      z$City<-tolower(z$City)
      
      simpleCap <- function(x) {
        s <- strsplit(x, " ")[[1]]
        paste(toupper(substring(s, 1,1)), substring(s, 2),
              sep="", collapse=" ")
      }
      
      
      z$City<-sapply(z$City, simpleCap)
      z<-z[order(z$State,z$latitude,z$longitude),]
      
      t<-left_join(county,z,by=c("State","City"))
      t<-t[!is.na(t$DaysBelowFrz),]
      t<-t[,c(1,2,3,4,8)]
      write.csv(t,"CoC_Temp_combined.csv",row.names = F)
      
      #BACK TO MICA's CODE
      
      #clear environment
      rm(list=ls())
      #Read files
      temp <- read.csv ("CoC_Temp_combined.csv", header=TRUE, stringsAsFactors = FALSE)
      coc <- read.csv ("State_County_COC.csv", header = TRUE, stringsAsFactors = FALSE)
      coc_city <- read.csv("coc_city.csv", header=TRUE, stringsAsFactors = FALSE)
      
      #Create field state_county
      temp$state_county<-paste(temp$State, temp$County, sep="_")
      temp$state_county<-toupper(temp$state_county)
      temp$state_county[which(temp$state_county=="AK_SKAGWAY HOONAH ANGOON")] <-"AK_HOONAH ANGOON"
      temp$state_county[which(temp$state_county=="AK_WRANGELL PETERSBURG")] <-"AK_WRANGELL"
      
      
      coc$state_county<-paste(coc$State, coc$County, sep="_")
      coc$state_county<-toupper(coc$state_county)
      coc2<-coc[,c("state_county", "coc_number", "coc_name")]
      
      #join temp and coc information
      temp2 <- join(temp, coc2, by="state_county", type="left", match="all")
      #write.csv(temp2, file="temptest.csv")
      
      #create field state_county
      coc_city$state_county <- paste(coc_city$State, coc_city$County, sep="_")
      coc_city$state_county <- toupper(coc_city$state_county)
      
      #remove extra columns
      coc_city2<-coc_city[,c("state_county", "coc_number", "coc_name")]
      
      #join temp and coc_city2
      city_temp<-join( temp,coc_city2, by="state_county", type="left", match ="all")
      
      #remove NAs
      city_temp2<-subset(city_temp, city_temp$coc_number !="NA")
      
      #append temp 2 and city_temp2
      temp_all<-rbind(temp2, city_temp2)
      
      #summarize by the maximum number of days below 32 degrees
      coc_temp <- ddply(temp_all, .(coc_number, coc_name), summarize, days_below_32=max(DaysBelowFrz))
      #write.csv(coc_temp, file="coc_temp.csv")
      #coc_temp$present<-"yes"
      coc_all<-read.csv("all_cocs.csv", header=TRU, stringsAsFactors = FALSE)
      coc_present<-join(coc_all, coc_temp, by="coc_number", type="left")
      #write.csv(coc_present, file="coc_temp_present.csv")
      coc_temp1<- subset(coc_present, coc_present$days_below_32 !="NA")
      coc_temp1<-coc_temp1[,c("coc_number", "coc_name", "days_below_32")]
      
      #create a CSV of coc's without temp data
      coc_temp2<- coc_present[is.na(coc_present$days_below_32),]
      coc_temp2<- coc_temp2[,c("coc_number", "CoC.Name")]
      
      #find temps for missing Matt did this mannually :(
      
      #add in missing temperatures  
      tempmissing <- read.csv("CoC_Temp_needed.csv", header=TRUE, stringsAsFactors = FALSE)
      
      #join cocs missing temp data to new temp data
      coc_temp3<-join(coc_temp2, tempmissing, by="coc_number")
      
      #remove extra columns and rename
      coc_temp3<-coc_temp3[,c("coc_number", "CoC.Name", "days_below_32")]
      colnames(coc_temp3)<-c("coc_number", "coc_name", "days_below_32")
      
      #combine original temp data
      coc_temperature<-rbind(coc_temp3, coc_temp1)
      
      write.csv(coc_temperature, file="coc_average_days_below_32.csv")


### Clear environment
rm(list=ls())

###Join All Data Sets
    #Read in CSVs
    area<-read.csv("coc_area_sq_miles.csv", header=TRUE, stringsAsFactors=FALSE)
    area<-subset(area, area$coc_number != "NA")
    rent<-read.csv("weighted_mean_census_median_gross_rent_by_coc.csv", header=TRUE, stringsAsFactors=FALSE)
    income<-read.csv("coc_mean_income_lowest_quintile.csv", header=TRUE, stringsAsFactors=FALSE)
    population <- read.csv("coc_estimated_2016_population.csv", header=TRUE, stringsAsFactors=FALSE)
    mentalhealth <-read.csv("serious_mental_illness_by_coc.csv", header=TRUE, stringsAsFactors=FALSE)
    alcohol<-read.csv("alcohol_dependence_or_abuse_by_coc.csv", header=TRUE, stringsAsFactors=FALSE)
    drugs<-read.csv("illicit_drug_use_by_coc.csv", header=TRUE, stringsAsFactors=FALSE)
    temp<-read.csv("coc_average_days_below_32.csv", header=TRUE, stringsAsFactors=FALSE)
    crime<-read.csv("coc_property_crime_rate.csv", header=TRUE, stringsAsFactors=FALSE)
    HIC<-read.csv("2007-2017-HIC-Counts-by-CoC.csv", header=TRUE, stringsAsFactors=FALSE, skip=1)
    homeless<-read.csv("2017_PIT_Count.csv", header=TRUE, stringsAsFactors=FALSE)
    
    #change MO-604a to MO-604
    temp$coc_number[which(temp$coc_number=="MO-604a")] <-"MO-604"
    
    
    
    #join files, removing extra columns
    joina<-join(area, rent, by="coc_number")
    joina<-joina[,c("coc_number", "coc_name", "land_area", "weighted_estimate_median_gross_rent")]
    joinb<-join(income, population, by="coc_number")
    joinb<-joinb[,c("coc_number", "weighted_income", "estimated_pop_2016")]
    joinc<-join(mentalhealth, alcohol, by="coc_number")
    joinc<-joinc[,c("coc_number", "weighted_mental_illness", "weighted_alcohol_dependence_or_abuse")]
    joind<-join(drugs, temp, by="coc_number")
    joind<-joind[,c("coc_number", "weighted_drug_use", "days_below_32")]
    joinf<-join(crime, HIC, by="coc_number")
    joinf<-joinf[,c("coc_number", "Property.crime.rate", "Total.Year.Round.Beds..ES..TH..SH.")]
    joing<-join(joina, joinb, by="coc_number")
    joinh<-join(joinc, joind, by="coc_number")
    joini<-join(joing, joinh, by="coc_number")
    joinj<-join(joini, joinf, by="coc_number")
    panel3data<-join(joinj, homeless, by="coc_number")
    panel3data<-panel3data[,c("coc_number", "coc_name", "land_area", "weighted_estimate_median_gross_rent", "weighted_income", "estimated_pop_2016", "weighted_mental_illness", "weighted_alcohol_dependence_or_abuse", "weighted_drug_use", "days_below_32", "Property.crime.rate", "Total.Year.Round.Beds..ES..TH..SH.", "total_homeless", "sheltered_homeless", "unsheltered_homeless", "chronically_homeless", "homeless_individuals", "homeless_people_in_families", "homeless_veterans", "homeless_unacompanied_youth")]
    
    
    write.csv(panel3data, file="panel3data.csv")

### clear environment
rm(list=ls())

### create clusters - This was done by Matt
    
    set.seed(123)
    #################################################################
    #################################################################
    #################################################################
    d<-read.csv("panel3data.csv")
    rownames(d)<-d$coc_number #make ids row names
    df<-d[,-c(1,2)] #remove id fields
    
    # subset features for model
    df<-df[,c(1,2,3,5,6,10,11,14)]
    names(df)
    #################################################################
    #################################################################
    #################################################################
    # Find best number of clusters
    k.max <- 18
    data <- df
    wss <- sapply(1:k.max,function(k){kmeans(data, k, nstart=50, iter.max = 15 )$tot.withinss})
    wss
    plot(1:k.max, wss,
         type="b", pch = 19, frame = FALSE,
         xlab="Number of clusters K",
         ylab="Total within-clusters sum of squares")
    
    #################################################################
    #################################################################
    #################################################################
    # run model
    result <- cmeans(df, centers=5, iter.max=100, m=2, method="cmeans")
    result
    
    #################################################################
    #################################################################
    #################################################################
    # format and combine data
    c<-as.data.frame(result$cluster)
    dat<-cbind(c,d)
    colnames(dat)[1]<-"cluster"
    dat<-dat[order(dat$cluster),]
    
    dat$cluster_final<-NA
    dat$cluster_final[which(dat$type==1 & dat$cluster==1)]<-"1a"
    dat$cluster_final[which(dat$type==2 & dat$cluster==1)]<-"1a" #combine w/above
    dat$cluster_final[which(dat$type==3 & dat$cluster==1)]<-"1c"
    dat$cluster_final[which(dat$type==1 & dat$cluster==2)]<-"2a"
    dat$cluster_final[which(dat$type==2 & dat$cluster==2)]<-"2b"
    dat$cluster_final[which(dat$type==3 & dat$cluster==2)]<-"2c"
    dat$cluster_final[which(dat$type==1 & dat$cluster==3)]<-"3a"
    dat$cluster_final[which(dat$type==2 & dat$cluster==3)]<-"3a" #combine w/above
    dat$cluster_final[which(dat$type==3 & dat$cluster==3)]<-"3c"
    dat$cluster_final[which(dat$type==1 & dat$cluster==4)]<-"4a"
    dat$cluster_final[which(dat$type==2 & dat$cluster==4)]<-"4b"
    dat$cluster_final[which(dat$type==3 & dat$cluster==4)]<-"4c"
    dat$cluster_final[which(dat$type==1 & dat$cluster==5)]<-"5a"
    dat$cluster_final[which(dat$type==2 & dat$cluster==5)]<-"5b"
    dat$cluster_final[which(dat$type==3 & dat$cluster==5)]<-"5c"
    
    dat<-dat[order(dat$cluster_final),]
    dat<-dat[,c(25,2:22)]
    
    #################################################################
    #################################################################
    #################################################################
    # get cluster count
    table(dat$cluster_final)
    
    #################################################################
    #################################################################
    #################################################################
    # write final csv
    write.csv(dat,"homeless_clusters_cmeans.csv",row.names = F)

### Clear environment
rm(list=ls())

### Join cluster data to funding and missing homeless population dataset
    cluster<-read.csv("homeless_clusters_cmeans.csv", header=TRUE, stringsAsFactors = FALSE)
    funding<-read.csv("coc_pop_value.csv", header=TRUE, stringsAsFactors = FALSE)
    
    cluster2<-join(cluster, funding, by="coc_number", type="left", match="all")
    cluster3<-cluster2[,c("cluster_final", "coc_number", "coc_name", "class", "type", "density", "land_area", "weighted_estimate_median_gross_rent", "weighted_income", "estimated_pop_2016", "weighted_mental_illness", "weighted_alcohol_dependence_or_abuse", "weighted_drug_use", "days_below_32", "Property.crime.rate", "Total.Year.Round.Beds..ES..TH..SH.", "total_homeless", "sheltered_homeless", "unsheltered_homeless", "chronically_homeless", "homeless_veterans", "homeless_unacompanied_youth", "amount")]
    write.csv(cluster3, "cluster_data.csv")
