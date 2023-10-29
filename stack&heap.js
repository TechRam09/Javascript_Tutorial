// Stack (Primitive) , Heap (Non -primitive)
// Stack- when it is used we will get the copy of the value 
// Heap - we will get the original value(refernece) 

let firstName = "shree"
let name = firstName
name = "shreeram"

console.log(firstName);     //Stack 
console.log(name);


let userOne = {
    email:"Shreeram@gmail.com",
    upi:"shree@paytm",
}

let userTwo = userOne

userTwo.email="nsshreeram@gmail.com"   // heap -orginal will of userOne will be edited

console.log(userOne.email);
console.log(userTwo.email);