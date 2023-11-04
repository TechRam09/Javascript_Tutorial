// to execute same set of code multiple times as well as breaking down the number of lines program we use functions
//function to add two numbers

//function definition whioch starts with function keyword followed by function name and inside the parenthesis it is called parameters during function definition
function sum(num1,num2){
    console.log(num1+num2);
}
// //function call for which we have to specify only function name and arguments during function call within parenthesis
sum() //Nan - not a number will be output because no arguments is passed

function sum(num1,num2){
    console.log(num1+num2);
}
sum(3,4) //=>7

// another way
function sum(num1,num2){
    console.log(num1+num2);//=>7
}
const result = sum(3,4) ;
console.log(result);//=>undefined,bcz no value is returned from the function to the  const result

// so inorder to return a value from the function to a variable/const ,return statement is used
function sum(num1,num2){
    sum = num1+num2;
    return sum 
}
const results = sum(3,4) ;//now reslults=sum
console.log(results);

// inorder save extra variable Space,we can avoid using variable to store returning sum and no statement after return is not executed in js
function sum(num1,num2){
    return num1+num2// 7 is returned
    console.log("shreeram");//it is not printed bcz it is after return statement
}
const newresults = sum(3,4) ;//now reslults=sum,7 is stored in results
console.log(newresults);//=>7

function isLogged(username){
    return `${username} has just loged in`
}

isLogged("Shreeram")//no output because no console statement

// if argument is passed
function isLogged(username){
    return `${username} has just loged in`
}

console.log(isLogged("Shreeram"));

//if argument is not passed
function isLogged(username){
    return `${username} has just loged in`
}

console.log(isLogged());//then it will consider argument has undefined

// so inorder to check whether the username is defined or undefined we use if statements

function isLogged(username){
    if(username === undefined){
        console.log("Enter your username");
    }
    // inorder to avoid the execution of this line use return inside the null statement or add as else  part to execute the second part 
    return `${username} has just logged in`
}
console.log(isLogged())

//another way to write the condition
function isLogged(username){
    if(!username){ //=>!username means username===undefined because undefined is considered as false value
        console.log("Enter your username");
        return
    }
    // inorder to avoid the execution of this line use return inside the null statement or add as else  part to execute the second part 
    return `${username} has just logged in`
}
console.log(isLogged())

//using else part as well as addinbg default value as parameter value 

function isLogged(username = "shree" ){
    if(!username){ 
        console.log("Enter your username");
    }
    else{
        return `${username} has just logged in`
    }
    
}
console.log(isLogged("Shreeram"))
