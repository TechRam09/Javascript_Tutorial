const userEmail = "ns@gmail.com"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Dont have user email");
}

const userName = ""

if(userName){
    console.log("Got user Name");
}else{
    console.log("Dont have user Name");
}

const userDetails = []

if(userDetails){
    console.log("Got user Details");
}else{
    console.log("Dont have user Details");
}

//java script consider some of the values true by default  is cally truey values
//The values other than falsy values is truey values
//falsy values
//false, 0 , -0, BigInt 0n,"", null, undefined
//but "0",'false'," ",[],{}, function(){} is  also true values

const email = []
//Empty array is returned
if (email.length === 0){
    console.log("Array is Empty");
}

const empObj = {}

if(Object.keys(empObj).length === 0){
    console.log("object is Empty");
}
false == 0 //=>true
false == ''//=>true
0 == ''//=> true


// Nullish Coalescing Operator(??): null undefined

let val1;
val1 = 5 ?? 10 // ?? means =>if no data is came from the database then consider the the value preceding the ?? so no value is assigned to val1 so 5 will be stored in val1
console.log(val1);


// same in case of null or undefined 
// null =>if no data has returned from the database initialise the variable with null value
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);//first value encounter will be stored in variable

// terniary operator,Syntax: condition ? true: false
const price = 100
price >= 80 ? console.log("less than 80") : console.log("greater than 80");