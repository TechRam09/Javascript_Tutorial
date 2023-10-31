//Array  joining

const animeName = ["Onepiece","Naruto","Bleach","DBZ"];
const animeMc = ["Luffy","Naruto","Itadori","Goku"];
const animeRank = ["1","2","3","4"]
// anime.push(animeMc)

console.log(animeName);//['Onepiece', 'Naruto', 'Bleach', 'DBZ',[ 'Luffy', 'Naruto', 'Itadori', 'Goku' ]] array is added as a fourth elemnt but both arrays are not joined.

//Concat/joining of string using concat method,but it doesnot add to main array but ity joins both the array and store it another array variable
const anime = animeName.concat(animeMc)
console.log(anime);//[ 'Onepiece', 'Naruto', 'Bleach',   'DBZ','Luffy',    'Naruto', 'Itadori',  'Goku' ] 
//it joins but not so optimised 

//instead of concat we use spread operator = > ... - spread operator,it can also be use to join more than two array which is not possible in concat() method
const animes = [...animeName,...animeMc,...animeRank]//[...ar1,...arr2,...arrn]
console.log(animes);//[ 'Onepiece', 'Naruto', 'Bleach', 'DBZ','Luffy','Naruto', 'Itadori','Goku', '1','2', '3','4']

//converting string,objects into array => Array.from(string/object/number)
console.log(Array.from("Shreeram"));//['S', 'h', 'r','e', 'e', 'r','a', 'm']
console.log(Array.from(12345));// when it cant convert the data into array it returns a null object => [ ]
console.log(Array.from({ name:"shree"}));//=>[ ]same goes for object when it comes to convert the key to array,we have to specify it ,if it cant then return a null object

//to convert numbers into array and numbers/value stored in the variable using  Array.of() methode
let num1=122
let num2=123
let num3=124

//Directly by specifying number
console.log(Array.of(123,122,124));//[123,122,124]
//Convert the value stored in variable
console.log(Array.of(num1,num2,num3));//[ 122, 123, 124 ]