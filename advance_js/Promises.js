const promiseOne = new Promise((resolve,reject)=>{
    //Do Async operarions klike DB calls
    setTimeout(function(){
        console.log("This is async task");
        resolve()   // to connect resove and then 
    },1000)
})


//consuming the promise
promiseOne.then(function(){
  console.log("Promise consumed")  
})


//promise 2

new Promise(function(resolve,reject){
  setTimeout(()=>{
    console.log("Async 2 task")
    resolve()
  },2000)
}).then(()=>{
console.log("Promise resolved");
})

//promise3 passing of value from resolve to promise consume(.then)

let promiseThree = new Promise((resolve,reject)=>{
  setTimeout(()=>{
   resolve({username:'Shree',age:20}) ;//value comes from database or network will in the form of oblject
  },3000)
})

promiseThree.then((user)=>{
 console.log(user);
})


//error handling in promise //if and if not data came

let promiseFour = new Promise((resolve,reject)=>{
  setTimeout(()=>{
   let error = false;//toggle to see output
   if(!error){   // !error- no error  (to check there is no error)
     resolve({username:'rahul',password:'123'})
   }else{
     reject("Something Went Wrong!!!....")
   }
  },4000)
})

promiseFour.then((user)=>{ 
 return user.username
})
.then
((username)=> console.log(username))
.catch((error)=>{
 console.log(error);
})
.finally(()=>{
 console.log("It can either be resolve or rejected but done")//after execution this line will be printed for sure
})

//noe error is true so output is "Something Went Wrong!!...."
//now toggle if there no error

// another method of res

//promise fith using async and await

let promiseFifth = new Promise((resolve,reject)=>{
  setTimeout(()=>{
   let error = true;//toggle to see output
   if(!error){   // !error- no error  (to check there is no error)
     resolve({username:'rahul',password:'123'})
   }else{
     reject("JS Went Wrong!!!....")
   }
  },4000)
})

async function promiseFifthfunction(){
  try {
    const response = await promiseFifth
    console.log(response);
  } catch (error) {
    console.log(error)
  }
}
//since we have use reject to handle in async we have to use try and catch
promiseFifthfunction();

//fetch and use data using async type promise

async function getuser(){
   try {
    let response = await fetch('https://api.github.com/users/TechRam09')  //this takes time so await is used
   let data = await response.json()  // this also take time so await is used
   console.log(data);
   } catch (error) {
    console.log(error);
   }
}

getuser()


// same using .then.catch 
let user = fetch('https://api.github.com/users/TechRam09')
user.then((response)=>{
   return response.json()
}).then((data)=>{
  console.log(data.login);
}).catch((error)=>{
   console.log(error);
})