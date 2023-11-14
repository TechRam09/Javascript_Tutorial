//for of loop
/*
for (const iterator of object) { //iterator means like index ,here we need not have to specify index/i or length of array it automatically takes it
    
}
*/
// printing the array elements
let numbers = [2,5,6,8,9]
for (const num of numbers) {
    // console.log(numbers);
    
}

//printing strings

let strings = "Hello Shreeram"

for (const string of strings) {
    // console.log(string);
}
/*
output =>
H
e
l
l
o

S
h
r
e
e
r
a
m
*/

const map =new Map()
map.set('KA','Karnataka')
map.set('MH','Maharasthra')
map.set('GJ','Gujarat')

for (const key of map) {
    console.log(map);// it prints map as object
}

for (const key of map) {
    console.log(key);//it prints map elements array
}

for (const [key,value] of map) {
    console.log(key,":",value);//it prints key and value pair
}