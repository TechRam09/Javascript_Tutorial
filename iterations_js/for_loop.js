/*Syntax :
for (let index = 0; index < array.length/constant; index++) {
    const element = array[index]/index;
    
}
*/


// printing numbers from 1 to 10
//we can use anything inplace of index suchas i,j,k
for (let index = 0; index < 10; index++) {//this prints only from 0 to 9 bcz when index comes to 10 ,10 is not less than 10 so it comes out of loop
    const element = index;
    // console.log(element);
}

//from 1 to 10
for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
}
// console.log(element);//to print element outside loop will be error =>no output

// if inside for loop
for (let index = 0; index < 10; index++) {
    if (index == 5) {
        console.log("5 is detected");
    }
    console.log(index);
}//=>if will b e executed first then the next stmt

// for inside for
for (let i = 0; i <= 10; i++) {
    console.log("outer loop value"+i);
    for (let j = 0; j <= 10; j++) {
       console.log(`inner loop vale:${j} and outerloop value:${i}`);  
    }
}
//tables printing from 1 10
for (let i = 1; i <= 10; i++) {
    console.log("\nTable of :"+i);
    for (let j = 1; j <= 10; j++) {
       console.log(i +'*'+j+"="+ (i*j));   
    }
    
}

// for in array
let myArray = [ "shree","ram","NS"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);

}

//if equal is used undefined will be logged
for (let index = 0; index <= myArray.length; index++) {
    const element = myArray[index];
    console.log(element);

}


//break and continue

//break is used to stop the iteration after certain condition is satisfied
for (let index = 0; index < 7; index++) {
    if(index == 5){
        console.log("5 is detected");
        break;
    }
    console.log(index);
}
// /*output =>
// 0
// 1
// 2
// 3
// 4
// 5 is detected
// */

//continue is used to skip the execution of certain condition index
for (let i = 0; i <= 7; i++) {
    if (i==5) {
        console.log("5 is detected");
        continue
    }
    console.log(`value:${i}`);
    
}
/*output =>
value:0
value:1
value:2
value:3
value:4
5 is detected
value:6
value:7
*/
