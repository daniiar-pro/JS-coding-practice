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
// }