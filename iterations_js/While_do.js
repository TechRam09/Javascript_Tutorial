/*
while loop syntax
initialisation
while (condition) {
    statement
    updation
}
*/
//it checks condition then executes stmts
let index = 1
while (index <=10) {
    // console.log(index);
    index = index+2
}

//for array
let hero =0
let myheros = ["ironman","spiderman","superman","batman"]
while (hero < myheros.length) {
    // console.log(myheros[hero]);
    hero++
}

//do- while loop,it executes stmts once then checks the condition
/*
intialisation
do {
    stmts
    updation
} while (condition);
*/

let i = 0
do {
    console.log(i);
    i++
} while (i<=10);

//if j= 11 ,and j<=10 =>it executes because it doesnt checks condition first
j =11
do {
    console.log(j);//=>11
    j++
} while (j<=10);


let myArray = ["a","b","C"]
let arrindex = 0
do {
    // console.log(myArray[arrindex]);
    arrindex++
} while (arrindex < myArray.length);