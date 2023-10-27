/*
no when compared 2 numbers with same data type
returns Boolean value
*/


// with different datatype
// should not compare value with different data type
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); //=> false ,because >,< converts null to 0 ,0 !> 0
console.log(null == 0); //=> false
console.log(null >= 0); //=> true ,becasuse >= /<= /=> converts null to 0
/*

same for undefined
*/

// String Check ,=== : it checks not only number also the data types are equal

console.log("2" === 2) // "2" is string and 2 is number so => false