//two types of creation
//1.Singleton-> single in stance,object created using constructor
//2. As literal

const mySymbol = Symbol("key1")
//As a literal,it will be in key:value pairs
let User = {
    name:"Shreeram",//the key ,here name will be automatically considered as string
    "fullName" : "Shreeram N S",//another way declaring
    age : 19,//value as number
    email : "nsshreeram@gmail.com",//value as string
    isLoggedin : false,//value as boolean
    lastLoggedin :["Monday","Saturday"] ,
    [mySymbol]:"key2"//valuea as symbol,the key has be written within [symbolName]
}

//accesing it  
//there are two methods
//1.General Method using dot operator(.)
console.log(User.name);//Shreeram 

//2. when the key is declared explicitly as string for example "fullName",it is optimised way, objectName["key"]
console.log(User["fullName"]);//Shreeram N S

// Symbol is accesed using ObjectName[key],Without using doubolquotes for key
console.log(User[mySym]);//yes
console.log(typeof User.mySymbol);//string

console.log(typeof User[mySymbol]);
console.log(User);

//changing the objects key value
User.age = 20
console.log(User.age);//age will be changed to age:20

//protecting/freezing the objects key values from changing
Object.freeze(User);//Freeze the object User
User.age = 19
console.log(User.age);//age will remail 20

// Function as object key value

 User.greeting = function(){
    console.log("Hello!! Everyone");
}

console.log(User.greeting);//it returns reference for the function,function will nob executed
console.log(User.greeting());

//to use or reference the object key inside the function
User.myFunction = function(){
    console.log(`Hello ${this.name},Welcome`);//this is used to acces the current object items,this can be used in place of object name
}

console.log(User.myFunction());
User.myFunction = function(){
    console.log(`Hello ${this["fullName"]},Welcome`);//this is used to acces the current object items,this can be used in place of object name
}
console.log(User.myFunction());
console.log(User);
