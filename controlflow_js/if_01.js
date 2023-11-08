// if
//simple
const isUserLoggedIn = true
if(isUserLoggedIn){
    console.log("Logged In");
}



// using conditional operator -> '<','>','<=','>=', '==','!='

if(2<3){
    console.log("true");//it will be executed bcz 2<3 is true
}

if(2>3){
    console.log("false");//it will not be executed bcz 2>3 is not true
}

if(2<=3){
    console.log("2 is less than 3  but not equal to 3");//it will be executed bcz 2<3 is true
}

if(2>=2){
    console.log("2 is not greater but equal to 2");//it will  be executed bcz 2 =2 is not true
}


if(2==2){
    console.log("true");//is executed bcz 2 is equal to 2
}

if(2==3){
    console.log("2 is not equal to 3");//is not executed bcz 2 is equal to 3
}

// another way using negative condition
if(2!=3){
    console.log("Executed");//It is executed bcz 2 is not equal to 3
}

if(2!=2){
    console.log("not Executed");//it si not executed bcz condition is false coz 2 is equal to 2
}


//if there is need of checking the type of data with condition we use strict equal operator, ===
//==
if(2 == '2'){
    console.log("true");//executed because == doesnot consider type of data
}

// //===
if(2 === '2'){
    console.log("false");//doesnt executed because === consider type of data=> 2 is number and '2' is string.
}

// if -else
const temperature = 50

if(temperature <= 50){
    console.log("temperature is less than or equal to 50");//executed bcz 50 =50
}else{
    console.log("Temp is greater than 50");
}

const temp = 52

if(temp<= 50){
    console.log("temperature is less than or equal to 50");
}else{
    console.log("Temp is greater than 50");//executed bcz 52 >50
}

// short end for if 
//for single line
const balance = 1200
if(balance>500) console.log("greater than 500");


//if else nesting
if(balance <500){
    console.log("less than 500");
}else if(balance <750){
    console.log("less than 750");
}else if(balance < 900){
    console.log("less than 900");
}else{
    console.log("greter than 900");// exceuted bcz 1200>900
}

//to check multiple condition at once ,&& if both are true statement is executed
const UserLoggedIn =true
const debitCard =true
if (UserLoggedIn && debitCard){
    console.log("allowed to buy course");//both are true
}

const isLoggedIn =true
const CreditCard =false
if (isLoggedIn && CreditCard){
    console.log("allowed to buy course");
}else{
    console.log("not allowed to executed");//credit card is not true so this is executed
}


//checkingmultiple condition using || ,either one condition is true condition is executed

const isLoggedInemail =true
const isLoggedIngoogle = false

if(isLoggedInemail || isLoggedIngoogle){
    console.log("User has loggined");//executed bcz isLogginedInemail is true
}else{
    console.log("User has not loggined");
}





