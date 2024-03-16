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



