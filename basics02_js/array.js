//Arrays: array index starts from 0=>first element is located at 0th position

const myArr = [2,3,6,8]
const anime=["Onepiece","Naruto","Bleach","DBZ"]

const arr= new Array(1,2,3,4)

console.log(myArr[1]);//=>2
console.log(anime[0]);//=>Onepiece
console.log(arr[3]);//=>4

myArr.push(4)//To add new element at end of the array
myArr.push(1)
console.log(myArr);//=>[2,3,6,8,4,1]
myArr.pop()//to remove last element from the array
console.log(myArr);//=>[2,3,6,8,4]

// Shift and unshift

myArr.unshift(5)//To add the element at the starting of the array,this is not a optimised way if more elements are present
console.log(myArr);//=>[5,2,3,6,8]

myArr.shift()//To remove the elemnts atstarting of the element,his is not a optimised way if more elements are present
console.log(myArr);//[3,6,8],2 is removed

// to question array whether the the specified element is present or not? it returns a boolean value
console.log(myArr.includes(6));//=>True
console.log(myArr.includes(7));//false

//To get the index of elemnt,if element present it returns index otherwise it returns -1
console.log(myArr.indexOf(6));//=>2
console.log(myArr.indexOf(7));//=> -1

//Slice and Splice
console.log("A. ",myArr);//=>A. [2,3,6,8]
const newArr1 = myArr.slice(1,3)//Slice returns the instance of of array,slice(starting range,ending range),but the ending range will not included
console.log(newArr1);//=>[3,6]

console.log("B. ",myArr);//=>B. [2,3,6,8]
const newArr2 = myArr.splice(1,3)//Splice also retrurns the instance of array but includes yhe ending range value,splice)(starting range,ending range) and it also maniputes original array
console.log(newArr2);//=>[3,6,8]
console.log("C. ",myArr);//=>[2],it deturns only the value which was not involved for splicing