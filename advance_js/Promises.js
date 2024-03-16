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


