//Another way creating object
//Singleton or using constructor

const newUser = new Object()
console.log(newUser);//=>{ }

//same in normal way
// const newUser = { }
console.log(newUser);//=> { }

//adding elements to object
newUser.id = "123a"
newUser.name = "shreeram"
newUser.age=19
newUser.isLoggedIn = true

//after adding newUser
console.log(newUser);////{ id: '123a', name: 'shreeram', age: 19, isLoggedIn: true }


// objects inside objects 
const User={
    email:"shree@gmail.com",
    regularUser:{
        email:"ns@gmail.com",
        fullname:{
           firstname:"shreeram",
           lastname:"N S"
        }
    }
}

console.log(User.regularUser);
/*=>
{
    email: 'ns@gmail.com',
    fullname: { firstname: 'shreeram', lastname: 'N S' }
}*/
console.log(User.regularUser.fullname);//=>{ firstname: 'shreeram', lastname: 'N S' }
console.log(User.regularUser.fullname.firstname);//=>shreeram

//combining of objects
const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}
const obj3 = {4:'e',5:'f'} 

// using assign method,syntax:Object.assign(target,source objects)
const obj4 = Object.assign({},obj1,obj2,obj3)//here, {} is target object and obj1,obj2,obj3....objn be the source objects
console.log(obj4);//=>{ '1': 'a', '2': 'b', '3': 'c', '4': 'e', '5': 'f' }

//Most used and modern way to combine the objects is using spread operator
const obj = {...obj1,...obj2,...obj3}
console.log(obj);//=>{ '1': 'a', '2': 'b', '3': 'c', '4': 'e', '5': 'f' }


// data from thre database
//it will be in array of objects
const users = [
    {
        id:1,
        email:"ns@gmail.com"
    },
    {
        id:2,
        email:"s@gmail.com"
    },
    {
        id:3,
        email:"n@gmail.com"
    }
]

// if we want to acces first object value
// users[1].email => in array user ,[0]=>first object ,.emal=>acces email
console.log(users[0].email);//array index starts from 0


console.log(newUser);//{ id: '123a', name: 'shreeram', age: 19, isLoggedIn: true }
// if we need only keys of objects,use Object.keys(objectname)
console.log(Object.keys(newUser));//=>[ 'id', 'name', 'age', 'isLoggedIn' ]
// if we need only values of objectb keys , use Object.values(objectname)
console.log(Object.values(newUser));//[ 'id', 'name', 'age', 'isLoggedIn' ]
// if we want the object key value pair as a array element , use Object.entries(newUser)
console.log(Object.entries(newUser));//[ 'id', '123a' ],[ 'name', 'shreeram' ],[ 'age', 19 ],[ 'isLoggedIn', true ]


// to check whether the specified key/property is present in objects
console.log(newUser.hasOwnProperty('name'));//True
console.log(newUser.hasOwnProperty('fox'));//false
