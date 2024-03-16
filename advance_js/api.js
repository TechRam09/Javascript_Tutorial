let name = document.getElementById('name')
    const requestUrl = 'https://api.github.com/users/TechRam09'//api request url
    const xhr = new XMLHttpRequest()//to construct an HTTP Request object
    xhr.open('GET',requestUrl)//first step to send request
    //console.log(xhr.readyState)//ready state specifies the current state of the xmlhttprequest process//=>1 -represent the open has beem called
    //To continuously check the state use object.onreadystatechange function
    xhr.onreadystatechange = ()=>{
        console.log(xhr.readyState)
        if(xhr.readyState === 4){
            const data =JSON.parse(xhr.responseText)
            console.log(typeof data)
            console.log( data.login);
        }
        
        
    }
    xhr.send();//to call the open function

   