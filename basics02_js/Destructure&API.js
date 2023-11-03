//destructuring object
const course = {
    coursename:"WebDevelopment",
    price:"free",
    comapnyname:"Rampage"
}

console.log(course.comapnyname)//Rampage
//If we need to access the companyname,instead of using course.companyname multiple time ,we can destructure the objects
const {comapnyname} = course//{key} = Objectname=>from where we are accessing it
console.log(comapnyname);//just we can use the key name to access now=>Rampage

//Still we can destructure and make it easy to access, if company name is bigger we can assign a shortest anothe name
const {comapnyname:company} = course//{key:another key name}= objectname
console.log(company);//we can use anothe keyname=>Rampage

//API intro
//it is .json file

