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


