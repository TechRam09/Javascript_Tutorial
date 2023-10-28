// based on how data stored and accessed in memory
/*
Primitive:call by value

7 types:
String,Number,Boolean,null,undefined,Symbol,BigInt
*/
/*
Non-Primitive:call by reference

3 types:
Array, Objects, Functions
*/

// Array declaration
const food = ["momos","pizza","gobi"]

//object definittion ,key: value

let myObj={

        name:"shree",
        age:20,
    }

let myFunction = function(){
    console.log("Hello world");
}

console.log(typeof food );