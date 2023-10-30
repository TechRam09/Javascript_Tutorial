//Dates
let myDate = new Date()
console.log(myDate);//=> 2023-10-17T18:38:11.836Z
console.log(myDate.toDateString());//=>Wed Oct 18 2023
console.log(myDate.toString());//=>Wed Oct 18 2023 00:10:13 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString());//=>10/18/2023, 12:10:13 AM

// To get spefcied date

let bdayDate = new Date(2003,10,9)//Date(yyyy,mm,dd),in array or list the month starts from 0 ex:Jan=0,Feb=1......Dec=11.
console.log(bdayDate);//2003-11-08T18:30:00:000Z
console.log(bdayDate.toDateString());//Sun Nov 09 2003

let newDate = new Date(2023,0,9,5,30)//Date(yyyy,mm,dd,hour,minutes,seconds)
console.log(newDate);//2023-01-09T00:00:000Z
console.log(newDate.toLocaleString());//=>1/9/2023.5:30:00 AM

let createDate= new Date("11-09-2023")
console.log(createDate);//=>2023-11-08T18:30:00.000Z
console.log(createDate.toLocaleString());//=>11/9/2023,12:00:00 AM

// Time Stamps
let myTime = Date.now()
console.log(myTime);
//to compare two time stamps
console.log(myDate.getTime());//=>1697569073575 get Time in millisecond
console.log(myDate.getTime()/1000);//=>1697569073.575 get Time in seconds,it will be in decimal
//to remove decimal
console.log(Math.floor(myDate.getTime()/1000));//=>1697569073.575 

let Dates =new Date()
console.log(Dates);//=>2023-10-17T19:03:28.235Z
console.log(Dates.getMonth()+1);//=>10
console.log(Dates.getDay());//=>3 <=>Wed