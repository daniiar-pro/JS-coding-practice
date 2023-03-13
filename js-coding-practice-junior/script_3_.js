// 21) removeNumbersLessThan

// Write a function called "removeNumbersLessThan".

// Given a number and an object, "removeNumbersLessThan" removes any properties whose values are numbers less than the given number.

// var obj = {
//   a: 8,
//   b: 2,
//   c: 'montana'
// }
// removeNumbersLessThan(5, obj);
// console.log(obj); // --> { a: 8, c: 'montana' }


// SOLUTION:
// function removeNumbersLessThan(num, obj) {
//   for(let key in obj){
//     if(!isNaN(obj[key]) && obj[key] < num){
//       delete obj[key]
//     }
//   }
//   return obj;
// }

// =======================================================>

// 22) removeStringValuesLongerThan

// Write a function called "removeStringValuesLongerThan".

// Given an number and an object, "removeStringValuesLongerThan" removes any properties on the given object whose values are strings longer than the given number.

// var obj = {
//   name: 'Montana',
//   age: 20,
//   location: 'Texas'
// };
// removeStringValuesLongerThan(6, obj);
// console.log(obj); // { age: 20, location: 'Texas' }


// SOLUTION:
// function removeStringValuesLongerThan(num, obj) {
//   for(let key in obj){
//     if(obj[key].length > num){
//       delete obj[key]
//     }
//   }
//   return obj
// }

// =========================================================>

// 23) removeEvenValues

// Write a function called "removeEvenValues".

// Given any object, "removeEvenValues" removes any properties whose values are even numbers.

// Do this in place and return the original object, do not construct a cloned object that omits the properties.

// var obj = {
//   a: 2,
//   b: 3,
//   c: 4
// };
// removeEvenValues(obj);
// console.log(obj); // --> { b: 3 }
// Note: Remember, we are talking about any object, not just the one shown in the sample.

// SOLUTION:
// function removeEvenValues(obj) {
//   for(let key in obj){
//     if(obj[key] % 2 === 0){
//       delete obj[key];
//     }


//   }
//   return obj
// };

// ===================================================================>

// 24) countNumberOfKeys

// Write a function called "countNumberOfKeys".

// Given an object, "countNumberOfKeys" returns how many properties the given object has.

// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };
// var output = countNumberOfKeys(obj);
// console.log(output); // --> 3

// SOLUTION:
// function countNumberOfKeys(obj) {
// return Object.keys(obj).length
// }

// function countNumberOfKeys(obj){
//     let count = 0;
//     for(let key in obj){
//       count++
//     }
//     return count;
//   };

// ======================================================================>

// 25) removeOddValues

// Write a function called "removeOddValues".

// Given an object, "removeOddValues" removes any properties whose valuse are odd numbers.

// var obj = {
//   a: 2,
//   b: 3,
//   c: 4
// };
// removeOddValues(obj);
// console.log(obj); // --> { a: 2, c: 4 }

// function removeOddValues(obj) {
//   for(let key in obj){
//     if(obj[key] % 2 !== 0){
//       delete obj[key]
//     }
//   }
//   return obj
// };

// =====================================================================>


// 26) removeArrayValues

// Write a function called "removeArrayValues".

// Given an object, "removeArrayValues" removes any properties whose values are arrays.

// var obj = {
//   a: [1, 3, 4],
//   b: 2,
//   c: ['hi', 'there']
// }
// removeArrayValues(obj);
// console.log(obj); // --> { b: 2 }

// SOLUTION:
// function removeArrayValues(obj) {
//  for(let key in obj){
//    if(Array.isArray(obj[key])){
//      delete obj[key]
//    }
//  }
//  return obj;
// }

// ===================================================>

