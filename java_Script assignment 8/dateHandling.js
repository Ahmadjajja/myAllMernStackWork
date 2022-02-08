// console.log("___DateHandling___");
// console.log("___ASSIGNMENT_08___");
// console.log("Write a JavaScript function to check whether an `input` is a date object or not. ");
// console.log("Date_HANDLING_Q_NO_1_");
// function is_date(input) {
//     if ( Object.prototype.toString.call(input) === "[object Date]" ) 
//       return true;
//     else
//         return false;   
//       };
  
//   console.log(is_date("October 13, 2014 11:13:00"));
//   console.log(is_date(new Date(86400000)));
//   console.log(is_date(new Date(99,5,24,11,33,30,0)));
//   console.log(is_date([1, 2, 4, 0]));
  
// console.log(" Write a JavaScript function to get the current date.");
// console.log("Date_HANDLING_Q_NO_2_");
// function current_Date(){
//     var today=new Date();
//     // console.log(today.getDate()+" "+today.getMonth()+" "+today.getFullYear());
//     console.log(today.toDateString());
// }
// current_Date();

// console.log("Write a JavaScript function to get the number of days in a month. ");
// console.log("Date_HANDLING_Q_NO_3_");
// function getDaysInMonth(month,year){
//     var daysInMonth=new Date(year,month,0);
//     return daysInMonth.getDate();
// }
// console.log(getDaysInMonth(1, 2012));
// console.log(getDaysInMonth(2, 2012));
// console.log(getDaysInMonth(9, 2012));
// console.log(getDaysInMonth(12, 2012));


// console.log("Write a JavaScript function to get the month name from a particular date.");
// console.log("Date_HANDLING_Q_NO_4_");
// function month_name(month) {
//     mlist=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     return mlist[month.getMonth()];
// }
// console.log(month_name(new Date("10/11/2009")));
// console.log(month_name(new Date("11/13/2014")));


// console.log("Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).");
// console.log("Date_HANDLING_Q_NO_5_");
// function compare_dates(date1,date2) {
//     if (date1>date2) {
//         return ("date1>date2");
//     } else if (date1<date2) {
//         return ("date2>date1");
//     }else{
//         return ("date1=date2");
//     }
// }
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));


// console.log("Write a JavaScript function to add specified minutes to a Date object).");
// console.log("Date_HANDLING_Q_NO_6_");
// function add_minutes(date,min){ 
//     return new Date(date.getTime() + min*60000);
//     /* And just in case this is not obvious,
//      the reason we multiply minutes by 60000 
//     is to convert minutes to milliseconds.*/
// }
// console.log(add_minutes(new Date(2014,10,2), 30).toString());


// console.log(" Write a JavaScript function to test whether a date is a weekend");
// console.log("Date_HANDLING_Q_NO_7_");
// function is_weekend(dt) {
//     date=new Date(dt);
//     if (date.getDay()===6||date.getDay()===0) {
//         return ("weekend");
//     }
// }
// console.log(is_weekend('Nov 15, 2014'));
// console.log(is_weekend('Nov 16, 2014'));
// console.log(is_weekend('Nov 17, 2014'));

// console.log("Write a JavaScript function to get difference between two dates in days.");
// console.log("Date_HANDLING_Q_NO_8_");//confusion in this program logic
// function date_diff_indays(date1,date2) {
//     var dt1=new Date(date1);
//     var dt2=new Date(date2);
//     return Math.floor((Date.UTC(dt2.getFullYear(),dt2.getMonth(),dt2.getDate())-Date.UTC(dt1.getFullYear(),dt1.getMonth(),dt1.getDate()))/(1000*60*60*24));
// }
// console.log(date_diff_indays('04/02/2014', '11/04/2014'));
// console.log(date_diff_indays('12/02/2014', '11/04/2014'));

    
// console.log("Write a JavaScript function to get the last day of a month.");
// console.log("Date_HANDLING_Q_NO_9_");
// var lastday = function(y,m){
//     dList=["sun","mon","tue","wed","thu","fri","sat"];
//     return  dList[new Date(y, m, 0).getDay()]; //here in this condition 0 used for getting last day of month
//     // return  new Date(y, m,0).getDate();
// }
// console.log(lastday(2014,0));
// console.log(lastday(2014,1));
// console.log(lastday(2014,11));

// console.log(" Write a JavaScript function to calculate 'yesterday day'.");
// console.log("Date_HANDLING_Q_NO_10_");
// var yesterday =  function(date1){   //arrow function used here
//     var dt = new Date(date1);
//     // return dt.getDate();     output1=15,output2=16,output3=17
//     // return dt.getDate()-1;   output1=14,output2=15,output3=16
//     return new Date((dt.setDate(dt.getDate()-1)));
// //   return new Date((dt.setDate(dt.getDate()-1))).toString();          //this statement's result is same as above
// }
// console.log(yesterday('Nov 15, 2014'));
// console.log(yesterday('Nov 16, 2015'));
// console.log(yesterday('Nov 17, 2016'));


// console.log("Write a JavaScript function to get the maximum date from an array of dates.");
// console.log("Date_HANDLING_Q_NO_11_");
// function max_date(AllDates) {
//     var bigDt=new Date(AllDates[0]);
    
//     for (let index = 1; index < AllDates.length; index++) {
//         if (bigDt>=new Date(AllDates[index])) {
//                 bigDt=bigDt;
//         } else {
//             bigDt=new Date(AllDates[index]);
//         }
//     }
//     return bigDt;
// }
// console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));


// console.log("Write a JavaScript function to get the minimum date from an array of dates.  ");
// console.log("Date_HANDLING_Q_NO_12_");
// function min_date(AllDates) {
//     var minDt=new Date(AllDates[0]);
    
//     for (let index = 1; index < AllDates.length; index++) {
//         if (minDt<=new Date(AllDates[index])) {
//                 minDt=minDt;
//         } else {
//             minDt=new Date(AllDates[index]);
//         }
//     }
//     return minDt;
// }
// console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));


// console.log("Write a JavaScript function that will return the number of minutes in hours and minutes. ");
// console.log("Date_HANDLING_Q_NO_13_");
// var timeConvert=function(minutes) {
//     // console.log("",minutes,"minutes=",parseInt(minutes/60),"hour(s) and ",minutes-(parseInt(minutes/60)*60),"minutes");
//     return minutes+" minutes = "+ parseInt(minutes/60) + " hour(s) and "+ ( minutes - ( parseInt ( minutes / 60 ) * 60 ) ) + " minutes ";
// }
// console.log(timeConvert(200));

// console.log("Write a JavaScript function to get the amount of days of a year.");
// console.log("Date_HANDLING_Q_NO_14_");
// var days_of_a_year=function(year) {
//     if (year%400==0||year%4==0&&year%100!=0) {
//         return 366 + " days ";
//     } else {
//         return 365 + " days ";
//     }
// }
// console.log(days_of_a_year(2015));
// console.log(days_of_a_year(2016));

// console.log("Write a JavaScript function to get the quarter (1 to 4) of the year.");
// console.log("Date_HANDLING_Q_NO_15_");
// var quarter_of_the_year=function (date) {
//     if (date.getMonth()==1||date.getMonth()==2||date.getMonth()==3) {
//         return 1;
//     } else if(date.getMonth()==4||date.getMonth()==5||date.getMonth()==6){
//         return 2;
//     }else if(date.getMonth()==7||date.getMonth()==8||date.getMonth()==9){
//         return 3;
//     }else{
//         return 4;
//     }
//     return date.getMonth();
// }
// console.log(quarter_of_the_year(new Date(2015, 1, 21)));
// console.log(quarter_of_the_year(new Date(2015, 10, 18)));



// console.log("Write a JavaScript function to count the number of days passed since beginning of the year.");
// console.log("Date_HANDLING_Q_NO_16_");
// var days_passed=function (dt){
//     var current=new Date(dt.getTime());
//     var previous=new Date(dt.getFullYear(), 0, 1);
//     return ((current-previous)/(86400000))+1;
// }
//   console.log(days_passed(new Date(2015, 0, 15)));
//   console.log(days_passed(new Date(2015, 11, 14)));



// console.log("Write a JavaScript function to convert a Unix timestamp to time.");
// console.log("Date_HANDLING_Q_NO_17_");
// var Unix_timestamp=function (TimeInUnix) {
//     var time=new Date(TimeInUnix);
//     return time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
// }
// console.log(Unix_timestamp(1412743274))

// console.log("Write a JavaScript program to calculate age.");
// console.log("Date_HANDLING_Q_NO_18_");
// var calculate_age=function (dateOfBirth) {
//     var currentDate=new Date();
//     return (currentDate.getFullYear()-dateOfBirth.getFullYear())+" years";
// }
// console.log(calculate_age(new Date(1982, 11, 4)));
// console.log(calculate_age(new Date(1962, 1, 1)));


// console.log(" Write a JavaScript function to get the day of the month, 2 digits with leading zeros. ");
// console.log("Date_HANDLING_Q_NO_19_");
// var day_of_the_month=function (date) {
//     return "0"+(date.getDay()+1);
// }
// d= new Date(2015, 10, 1);
// console.log(day_of_the_month(d));  


// console.log("Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun). ");
// console.log("Date_HANDLING_Q_NO_20_");
// var short_Days=function (date) {
//     if (date.getDay()==0) {
//         return "sun";
//     } else if(date.getDay()==1){
//         return "mon";
//     }else if (date.getDay()=2) {
//         return "tue";
//     }else if (date.getDay()==3) {
//         return "wed";
//     }else if (date.getDay()==4) {
//         return "thu";
//     }else if (date.getDay()==5) {
//         return "fri";
//     }else if (date.getDay()==6) {
//         return "sat";
//     }
// }
// dt = new Date(2015, 10, 1);
// console.log(short_Days(dt));



// console.log("Write a JavaScript function to get a full textual representation of the day of the week (Sunday through Saturday).");
// console.log("Date_HANDLING_Q_NO_21_");
// var long_Days=function (date) {
//     if (date.getDay()==0) {
//         return "sunday";
//     } else if(date.getDay()==1){
//         return "monday";
//     }else if (date.getDay()=2) {
//         return "tuesday";
//     }else if (date.getDay()==3) {
//         return "wednesday";
//     }else if (date.getDay()==4) {
//         return "thursday";
//     }else if (date.getDay()==5) {
//         return "friday";
//     }else if (date.getDay()==6) {
//         return "saturday";
//     }
// }
// dt = new Date(2015, 10, 1);
// console.log(long_Days(dt));



// console.log("Write a JavaScript function to get ISO-8601 numeric representation of the day of the week (1 (for Monday) to 7 (for Sunday)).");
// console.log("Date_HANDLING_Q_NO_22_");
// var ISO_numeric_date=function (date) {
//     return (date.getDay()===0)?7:date.getDay();
// }
// dt = new Date(2015, 10, 1);
// console.log(ISO_numeric_date(dt));


// console.log("Write a JavaScript function to get English ordinal suffix for the day of the month, 2 characters (st, nd, rd or th.).");
// console.log("Date_HANDLING_Q_NO_23_");
// var english_ordinal_suffix=function (date) {
//     if (date.getDay()==0) {
//         return 1+"st";
//     } else if(date.getDay()==1){
//         return 2+"nd";
//     }else if (date.getDay()=2) {
//         return 3+"rd";
//     }else if (date.getDay()==3) {
//         return 4+"th";
//     }else if (date.getDay()==4) {
//         return 5+"th";
//     }else if (date.getDay()==5) {
//         return 6+"th";
//     }else if (date.getDay()==6) {
//         return 7+"th";
//     }
// }
// dt = new Date(2015, 10, 1);
// console.log(english_ordinal_suffix(dt));


// console.log("Write a JavaScript function to get ISO-8601 week number of year, weeks starting on Monday.");
// console.log("Date_HANDLING_Q_NO_24_");
// var ISO8601_week_no=function (date) {
//     const days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
//     // return days[date.getDay()];
//     let date2=new Date(date.getFullYear(),0);
//     return Math.ceil(((date-date2)/86400000)/7);
// }
// dt = new Date(2015, 10, 1);
// console.log(ISO8601_week_no(dt));


// console.log("Write a JavaScript function to get a full textual representation of a month, such as January or June.");
// console.log("Date_HANDLING_Q_NO_25_");
// var full_month=function(date) {
//     monthArr=['january','february','march','aprile','may','june','july','august','september','october','november','december']
//     return monthArr[date.getMonth()];
// }
// dt = new Date(2015, 10, 1);
// console.log(full_month(dt));



// console.log("Write a JavaScript function to get a numeric representation of a month, with leading zeros (01 through 12)");
// console.log("Date_HANDLING_Q_NO_26_");
// var numeric_month=function(date) {
//     const monthArr=['01','02','03','04','05','06','07','08','09','10','11','12'];
//     return monthArr[date.getMonth()];
// }
// dt = new Date(2015, 10, 1);
// console.log(numeric_month(dt));

// console.log(" Write a JavaScript function to get a short textual representation of a month, three letters (Jan through Dec).");
// console.log("Date_HANDLING_Q_NO_27_");
// var short_months=function(date) {
//     const monthArr=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
//     return monthArr[date.getMonth()];
// }
// dt = new Date(2015, 10, 1);
// console.log(short_months(dt));

// console.log(" Write a JavaScript function to get a full numeric representation of a year (4 digits). ");
// console.log("Date_HANDLING_Q_NO_28_");
// var full_year=function(date) {
//     return date.getFullYear();
// }
// dt = new Date(2015, 10, 1);
// console.log(full_year(dt));

// console.log("Write a JavaScript function to get a two digit representation of a year. ");
// console.log("Date_HANDLING_Q_NO_29_");
// var sort_year=function(date) {
//     return date.getYear();
// }
// dt = new Date(1989, 10, 1);
// console.log(sort_year(dt));


// console.log("Write a JavaScript function to get lowercase Ante meridiem and Post meridiem.");
// console.log("Date_HANDLING_Q_NO_30_");
// var lower_am_pm=function(date) {
//     return date.getHours()>12?'pm':'am';;
// }
// dt = new Date(1989, 10, 1,13); 
// console.log(lower_am_pm(dt));
// dt = new Date(); 
// console.log(lower_am_pm(dt));



// console.log("Write a JavaScript function to get lowercase Ante meridiem and Post meridiem.");
// console.log("Date_HANDLING_Q_NO_31_");
// var lower_AM_PM=function(date) {
//     return date.getHours()>12?'PM':'AM';;
// }
// dt = new Date(1989, 10, 1,13); 
// console.log(lower_AM_PM(dt));
// dt = new Date(); 
// console.log(lower_AM_PM(dt));

// console.log("Write a JavaScript function to swatch Internet time (000 through 999).");
// console.log("Date_HANDLING_Q_NO_32_");
// var internet_time=function(date) {
//    return Math.ceil((date.getHours()*41.6)+(date.getMinutes()*0.694)+(date.getSeconds()*0.011574));
// }
// dt = new Date();
// console.log(internet_time(dt));


// console.log("Write a JavaScript function to get 12-hour format of an hour with leading zeros");
// console.log("Date_HANDLING_Q_NO_33_");
// var hours_with_zeroes=function(date) {
//    hoursArr=['00','01','02','03','04','05','06','07','08','09','10','11','00','01','02','03','04','05','06','07','08','09','10','11','12'];

//    return hoursArr[date.getHours()]
// }
// dt = new Date();
// console.log(hours_with_zeroes(dt));

// console.log("Write a JavaScript function to get 24-hour format of an hour without leading zeros");
// console.log("Date_HANDLING_Q_NO_34_");
// var hours_without_zeroes=function(date) {
//    return date.getHours();
// }
// dt = new Date();
// console.log(hours_without_zeroes(dt));


// console.log("Write a JavaScript function to get minutes with leading zeros (00 to 59)");
// console.log("Date_HANDLING_Q_NO_35_");
// var minutes_with_leading_zeros=function(date) {
//    const minWithLeadingZeroArr=['00','01','02','03','04','05','06','07','08','09'];
//    return (date.getMinutes()<=9)?minWithLeadingZeroArr[date.getMinutes()]:date.getMinutes();
// }
// dt = new Date(1989, 10, 1,9,9);
// console.log(minutes_with_leading_zeros(dt));


// console.log("Write a JavaScript function to get seconds with leading zeros (00 to 59)");
// console.log("Date_HANDLING_Q_NO_36_");
// var seconds_with_leading_zeros=function(date) {
//    const secWithLeadingZeroArr=['00','01','02','03','04','05','06','07','08','09'];
//    return (date.getSeconds()<=9)?secWithLeadingZeroArr[date.getSeconds()]:date.getSeconds();
// }
// dt = new Date(1989, 10, 1,9,9,8);
// console.log(seconds_with_leading_zeros(dt));


// console.log("Write a JavaScript function to get seconds with leading zeros (00 to 59)");
// console.log("Date_HANDLING_Q_NO_37_");
// var seconds_with_leading_zeros=function(date) {
//    const secWithLeadingZeroArr=['00','01','02','03','04','05','06','07','08','09'];
//    return (date.getSeconds()<=9)?secWithLeadingZeroArr[date.getSeconds()]:date.getSeconds();
// }
// dt = new Date(1989, 10, 1,9,9,8);
// console.log(seconds_with_leading_zeros(dt));


// console.log(" Write a JavaScript function to get Timezone.");
// console.log("Date_HANDLING_Q_NO_38_");
// var getTimeZone=function(date) {
//    return date.toTimeString().slice(18); //slice function will cut first 18 digits of current time
// }
// dt = new Date();
// console.log(getTimeZone(dt));
// "India Standard Time"


// console.log("Write a JavaScript function to find whether or not the date is in daylights savings time.");
// console.log("Date_HANDLING_Q_NO_39_");
// var daylights_savings=function(date) {
//     year=date.getFullYear();
//     let x=7;
//     for (let index = 0; index < 7; index++,x++) {
//         var startDate=new Date(year,2,x);
//         if (startDate.getDay()===1) {
//             x=startDate.getDate();
//             break;
//         }
//     }
//     var startDate=new Date(year,2,x);
//     let y=1;
//     for (let index = 0; index < 7; index++,y++) {
//         endDate=new Date(year,10,y);
//         if (endDate.getDay()===1) {
//             y=endDate.getDate();
//             break;
//         }
//     }
//     endDate=new Date(year,10,y);
//    if (endDate.getMonth()>=date.getMonth()&&startDate.getMonth()<=date.getMonth()) {
//     if (date.getMonth()===10&&endDate.getDate()>=date.getDate()||date.getMonth()===2&&startDate.getDate()<=date.getDate()) {
//         return "date is in daylights savings time";
//     } else {
//         return "date is not in daylights savings time";
//     }   
//    }else{
//     return "date is not in daylights savings time";
//    }
// }
// dt = new Date(2021,10,1);
// console.log(daylights_savings(dt));


console.log("Write a JavaScript function to get difference to Greenwich time (GMT) in hours.");
console.log("Date_HANDLING_Q_NO_40_");












