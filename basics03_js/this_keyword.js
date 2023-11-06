// //'this' keyword
// //this keyword used when we have access the  object keys inside a function declared inside the object as a key means context of object
const myObj ={
    username:"Shree",
    age:19,
    login:function(){
        console.log(`${this.username} has just loginned`);
        console.log(this);//=>{ username: 'Shreeram', age: 19, login: [Function: login] },it displays/this containes the current context of object
    }
     
}

myObj.login()//=>Shree has just loginned,the context of username here is Shree
myObj.username = "Shreeram"//The context of username in object is changed to Shreeram
myObj.login()//=>Shreeram has just loginned after changing the context ofusername in objext 

console.log(this);//outside the object it returns empty object in node but incase of browser it returns a global window which contains various methods

const newFunc = function(){
    let username = "shree"
    console.log(this); //In node ,Inside a function ,if this is use ,it returns/containes various set of values ,global value ,microtask,structure clone,ideal time ,fetch and some more performance evalution
    console.log(this.username);//=> undefined, here we cant use to acces a variable declared with let keyword inside a function
}

newFunc()


//Inside a arrwo function

const arrowFunc = () =>{
    let username = "Shreeram"
    console.log(this);//=> { },it returns a empty object in node environment
    console.log(this.username);//=>undefined,here in arrow function also we cant use to acces a variable declared with let keyword inside a function
}

arrowFunc()

