// 11) sortStr

// Create a function to sort a given string "gtdebca";

// NOTE: use **sort;**

// `sortStr("gtdebca") // "abcdegt"
// sortStr("seattle") // "aeelstt"`

// SOLUTION:
// function sortStr(str){
//     return str.split('').sort().join('')
// }

// ===================================================================>

// 12) sortNums

// Create a function to sort numbers in a given array [20, 18, 10, 5];

// `sortNums([20, 18, 10, 5]) // [5, 10, 18, 20]
// sortNums([5,1,0-4]) // [-4,0,1,5]`

// SOLUTION:
// function sortNums(array) {
//     return array.sort((a, b) => a - b)
//   }

// =============================================================>

// 13) replace1

// Create a function to remove 2 items starting from a index of a given item and add a new item.

// `replace(["Banana", "Orange", "Apple", "Mango"], "Orange", 2, "Melon") // ["Banana", "Melon", "Mango"]
// replace([5,1,0-4], 1, 2, 9) // [5,9,-4]`

// SOLUTION:
// function replace1(arr, item, removeCount, value ) {
//   const idx = arr.indexOf(item);
//   arr.splice(idx, removeCount, value);
//   return arr;

// }

// function replace1(arr, item , removeCount, value){
//     arr.splice(arr.indexOf(item), removeCount, value);
//     return arr;
//   }
  
  // first we have find the index of arr's item
  // then we made it as a start point for splice
  // then removed count, added new value also/
  // that's how splice() method works

//   =================================================================>

// 14) merge

// Create a function to merge all given arrays into a array.

// *Note: we don't know how many parameters are there.

// *Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

// merge(["Banana", "Orange", "Mango"], ["Orange", "Melon"]) 
// ["Banana", "Orange", "Mango","Orange", "Melon"]

// SOLUTION:
// function merge(a, b) {
//   for(let i  = 0; i< b.length; i++){
//     a.push(b[i]);
//   }
//   return a;
// }



// function merge(a,b){
//   const merged = [...a, ...b];
//   return merged;
// }

// function merge(a, b){
//   return a.concat(b);
// }

// function merge(a, b){
//   const merg = b.reduce((prevVal, curVal) => {
//     prevVal.push(curVal)
//     return prevVal;
//   }, a);
//   return merg;
// }

// ===========================================================================>

// 15) merge

// Create a function to merge all given arrays into a array.

// *Note: we don't know how many parameters

// `merge([1],[2],[3,4],[5]) // [1,2,3,4,5]`

// SOLUTION:
// function merge(...args){
// //  const merged = [].concat(...args);
// //  return merged;
//  result = [];
//  return result.concat(...args)
// };

// ==========================================================================>

// 16) clean

// Create a function to remove all spaces from a given string.

// `clean("       He  llo  World!        ") // HelloWorld!`

// SOLUTION:
// function clean(str) {
//   const join = str.split(' ').join('')
//     return join;
// };


// =========================================================================>

// 17) indexOf

// Implement custom indexOf method

// `const str = "California";
// str.indexOfCus("i") // 3;`

// SOLUTION:

// ==========================================================>


// 18) lastIndexOf

// Implement lastIndexOf method.

// `const students = [1,2,3,4,2];
// students.lastIndexOf(2);  // 4`

// SOLUTION:

// =====================================>

//19) includes

// Implement includes method.

// `const students = ["Aizat", "Kach", "Jantai", "Aidar"];
// students.includes('Jantai');  // true`

// ================================================>


// 20) removeNumbersLargerThan

// Write a function called "removeNumbersLargerThan".

// Given a number and an object, "removeNumbersLargerThan" removes any properties whose values are numbers greater than the given number.

// var obj = {
//   a: 8,
//   b: 2,
//   c: 'montana'
// }
// removeNumbersLargerThan(5, obj);
// console.log(obj); // --> { b: 2, c: 'montana' }

// SOLUTION:
// function removeNumbersLargerThan(num, obj) {
//   for (var key in obj) {                    // for each key in the object
//     if(!isNaN(obj[key]) && obj[key] > num)  // if the value of that key is not a NaN (is a number) and if that number is greater than num
//       delete obj[key];                      // then delete the key-value from the object
//   }
//   return obj
// }