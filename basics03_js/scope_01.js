// scope- { }
//global scope and block scope

//block scope
if(true){
    let val1=20
    const val2 =30
    var val3 =30
}

console.log(val1);//no output because val1 is if block scope element
console.log(val2);//no output because val2 is if block scope element
console.log(val3);//the variable declared with var keyword acts as a global scope element output is=>30,so it is avoided using var keyword for variable declaration

//global scope
let val1 = 40
if(true){
    let val1=20
    const val2 =10
    var val3 =30
}

console.log(val1);//=>40 because val2 is a global scope element

// both global and block scope element 
let val2=40
if(true){
    let val1=20
    const val2 =10
    var val3 =30
    console.log("Block:",val2);
}
console.log("Global:",val2);