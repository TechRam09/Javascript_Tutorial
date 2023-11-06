// Arrow Function

// declaration ,instead of function keyword use () =>{}
const sum = (num1,num2)=> {
    return num1 + num2
}
console.log(sum(5,2));//7

// Explicit return
const addTwonum = (num1,num2)=> {
    return num1 + num2
}
console.log(sum(5,2));//7

//implicit return  ,if return has only one step
//remove curly braces and return keyword,use  parenthesis ()
const addTwoint = (num1,num2) => (num1+num2)
console.log(addTwoint(5,2));

//'this' Inside a arrwo function
const arrowFunc = () =>{
    let username = "Shreeram"
    console.log(this);//=> { },it returns a empty object in node environment
    console.log(this.username);//=>undefined,here in arrow function also we cant use to acces a variable declared with let keyword inside a function
}

arrowFunc()