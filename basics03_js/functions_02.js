//spread/rest operator is used when we dont know how argument will be passed.the output will in the form of array of n arguments passed.
//Example: Shoping kart ,Function To calculate the number of products as well as the price of n products
function Cartprice(...num1){
    return num1
}

console.log(Cartprice(200,500,1000,300));//=>[ 200, 500, 1000, 300 ]

function Cartprice(val1,val2,...num1){
    return num1
    
}
console.log(Cartprice(200,500,1000,300));//[1000,300] will be returned,because 200 will be stored in val1 and 500 in val2

// objects in functions

// // object creation
const User ={
    name:"Shreeram",
    price:1500
}

// //function definition
function UserDetails(anyobject){//Syntax function func Name(anyobject),anyobject is used because to acces the key or vale from any object
    console.log(`Name is ${anyobject.name} and the price of purchase is ${anyobject.price}`);//=>Name is Shreeram and the price of purchase is 1500
}

// //function calling  by passing object name
UserDetails(User)//Syntax: functionName(objectName),Here ObjectName is mandatory to pass
//another way to pass object/function call by directly passing the object
UserDetails({
    name:"Shreeram",
    price:1500
})

//object key is undefined
//object creation
const Users ={
    name:"Shreeram",
    prices:1500
}

//function definition
function UserDetails(anyobject){
    console.log(`Name is ${anyobject.name} and the price of purchase is ${anyobject.price}`);//Name is Shreeram and the price of purchase is undefined,because price is not defined as object key
}

//function calling 
UserDetails(Users)


// Array in functions

const myArr = [2,5,6,8,7]

function array(getArray){
    console.log(getArray[2]);//=>6
}


//function call by array  name
array(myArr)
//function call by passing the array directly
array([1,3,5,7,9])//=>5


//another way of using array in objects
const myArray = [2,5,6,8,7]

function array(getArray){
    return getArray[2];//=>6
}


//function call by array  name
console.log(array(myArray));

