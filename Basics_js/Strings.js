const name = "shreeram"
const projects = 2

//concat : console.log(name + " has done " + projects + " projects"); olderway to concat

// concat in present way:
// console.log(`Hi! my Name is ${name} and I have done ${projects} projects`);

//String declaration another way  which return object

const animeName = new String('Onepiece')

// console.log(animeName[0]); // gives element at first =>O
// console.log(animeName.__proto__); //=>list of methods which can be used
// console.log(animeName.length); //gives the length of string =>8
// console.log(animeName.toUpperCase());
// console.log(animeName);
// console.log(animeName.indexOf('O')); // gives the position of the specified character

const anime = animeName.substring(0,3);
// console.log(anime);

const revname = animeName.slice(-8,1);
console.log(revname);

const newString= " shree " //extra space are includedlog
console.log(newString);//includes the empty space 
console.log(newString.trim()); // doesnt include empty space


const url ="https://shree.com/shreeram%20NS"
console.log(url.replace('%20','_')); //replace a substring with another

console.log(url.includes('shree'));//whether the specific string is present

const myName = "My Name is shreeram"

console.log(myName.split(' '));