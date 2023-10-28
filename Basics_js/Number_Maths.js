 const score = 400
console.log(score);
//  for banking webpage everthing should be in number 

const balance = new Number(100.8345)
console.log(balance);  // object type number is defined

//Number Methods
console.log(balance.toString()); // to convert number into string
console.log(typeof balance.toString());
//Once it is convertedinto string we can use the string methods
console.log(balance.toString().length);
console.log(balance.toFixed(2));// itv specifies the amount of digit to return/display after decimal, (2) => 2 digits after decimal

console.log(balance.toPrecision(3)); //decides the output whether it is the number is n-1 or n=1 besed on the value after the number specified in parenthewsis of metyhod basically it returns string, (3) => in 100.0345 after first 3 digits next number is 8 8 then output will be 101

//to make less confussion
const hundreds = 100000
console.log(hundreds.toLocaleString());
//to convert into Indiam currency or number
console.log(hundreds.toLocaleString('en-IN'));

//Matn opeartion
let newNum = new Number(-1234)
console.log(Math.abs(newNum)) //converts only negative num to positive - => 4

// Round the number after decimal
console.log(Math.round(123.8567)); // round of the n=> n+1 if number of decimal >5 if not terminate the numbers after decimal point
console.log(Math.ceil(123.8567));//round of to the highest number means n+1
console.log(Math.floor(123.8567));//terminate the numbers after decimal point
console.log(Math.min(4,3,6,8)); //find minimum number in an array or list of numbers
console.log(Math.max(4,3,6,8)); //find maximum number in an array or list of numbers

// to generate random numbers
console.log(Math.random()); //grnerate only numbers between 0 to 1 ex 0.123,0.345667,1.2233532,1.2445
let randomVal = Math.random()*10;// to get a two digits number with thye decimal
console.log(Math.floor (randomVal));// to get only two diguts value use floor to round of to lowest number
//To avoid zero
console.log((Math.random()*10) + 1); // add the result of Math.random()*10 by 1


//To generate random number for dice game
// to get value between the minimum value and max value
const min = 1
const max = 6
console.log(Math.floor(Math.random() * (max-min + 1)) + min );//the first half generates same like above so add min value to get the value above minimum value


