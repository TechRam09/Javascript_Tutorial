//Immediately Invoked Function Expression(IIFE)
//it is used for immediate excution of function as well as to avoid the pollution of global variable.
//syntax: ()();, first parenthesis for function definition and another parenthesis for function execution/call/passing of argument and ; for function seperation

//named function -IIFE
(function myFunct(){
    console.log(`it's my 10th day`);
})();

//arrao function -IIFE
(() =>{                                  //function definition
    console.log('Learning IIFE in Js');
})();//execution

//Passing of arguments in named function
(function newFunc(name){    //function definition with parameter
    console.log(`it's ${name} 10th day`);//=>it's Shreeram 10th day
})('Shreeram');//passing of argument

////Passing of arguments in arrow function
((course) =>{                                  //function definition
    console.log(`Learning IIFE in ${course}`);//Learning IIFE in JS
})("JS");//execution
