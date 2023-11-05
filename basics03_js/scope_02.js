// nested scope and closure
// nested scope- functio(n inside function / if condition inside if condition. for loop inside for loop

function one(){
    let name = "shreeram"
    function two(){
        let Channel = "hitesh"
        console.log(name);
    }
    console.log(Channel);//error because channel is not defined in function one scope
    two()
}
one()

function one(){
    let name = "shreeram"
    function two(){
        let Channel = "hitesh"
        // console.log(name);//fuction one variable like name acts as global scope variable it can accesed by scope
    }
    two()//function two is called so there is output 
}
one()

function one(){                                  //no output bcz function 2 is not called
        let name = "shreeram"
        function two(){
            let Channel = "hitesh"
            console.log(name);
        }
        
    }
    one()


if(true){
    let username = "Shreeram"
    if(username === "Shreeram"){
        let channel = "chai with code"
        console.log(username + channel);
    }
    console.log(channel);//error because channel is second if condition block scope variable it cannot be accessed outside that block
}
console.log(username);


if(true){
    let username = "Shreeram"
    if(username === "Shreeram"){
        let channel = "chai with code"
        console.log(username + channel);
    }
    // console.log(channel);//error because channel is second if condition block scope variable it cannot be accessed outside that block
}
console.log(username);//error because username is insidee the if condition block it cannot be accessed outside that block

//if we comment both error ;lines
if(true){
    let username = "Shreeram"
    if(username === "Shreeram"){
        let channel = "chai with code"
        console.log(username + channel);
    }
    // console.log(channel);//error because channel is second if condition block scope variable it cannot be accessed outside that block
}
// console.log(username);//error because username is insidee the if condition block it cannot be accessed outside that block