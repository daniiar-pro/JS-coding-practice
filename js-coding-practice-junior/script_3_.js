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

// 27) removeNumberValues

// Write a function called "removeNumberValues".

// Given an object, "removeNumberValues" removes any properties whose valuse are numbers.

// var obj = {
//   a: 2,
//   b: 'remaining',
//   c: 4
// };
// removeNumberValues(obj);
// console.log(obj); // --> { b: 'remaining' }

// SOLUTION:
// function removeNumberValues(obj) {
//   for(let key in obj){
//     if(typeof obj[key] === 'number'){
//       delete obj[key]
//     }
//   }
//   return obj;
// }


// function removeNumberValues(obj){
//   for(let key in obj){
//     if(Number.isInteger(obj[key])){
//       delete obj[key]
//     }
//   }
//   return obj
// };

// ====================================================================>


// 28) removeStringValues

// Write a function called "removeStringValues".

// Given an object, "removeStringValues" removes any properties on the given object whose values are strings.

// var obj = {
//   name: 'Sam',
//   age: 20
// }
// removeStringValues(obj);
// console.log(obj); // { age: 20 }

// SOLUTION:
// function removeStringValues(obj) {
// for(let key in obj){
//   if(typeof obj[key] === 'string'){
//     delete obj[key];
//   }
// }
// return obj;
// }

// ========================================================================>

// 29) select

// Write a function called "select".

// Given an array and an object, "select" returns a new object whose properties are those in the given object AND whose keys are present in the given array.

// Notes:

// If keys are present in the given array, but are not in the given object, it should ignore them.

// It does not modify the passed in object.

// var arr = ['a', 'c', 'e'];
// var obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// };
// var output = select(arr, obj);
// console.log(output); // --> { a: 1, c: 3 }

// SOLUTION:
// function select(arr, obj) {
// let result = {};
//   for(let key in obj){
//     if(arr.includes(key)){
//       result[key] = obj[key]
//     }
//   }
//   return result;
// }


// function select(arr, obj){
//   const newObject = {};
//   for(let i = 0; i < arr.length; i++){
//     if(obj[arr[i]]){
//       newObject[arr[i]] =  obj[arr[i]]
//     }
//   }
//   return newObject;
// };


// =============================================================>

// 30) getOddElementsAtProperty

// Write a function called "getOddElementsAtProperty".

// Given an object and a key, "getOddElementsAtProperty" returns an array containing all the odd elements of the array located at the given key.

// Notes:

// If the array is empty, it should return an empty array.

// If it contains no odd elements, it should return an empty array.

// If the property at the given key is not an array, it should return an empty array.

// If there is no property at the key, it should return an empty array.

// var obj = {
//   key: [1, 2, 3, 4, 5]
// };
// var output = getOddElementsAtProperty(obj, 'key');
// console.log(output); // --> [1, 3, 5]

// SOLUTION:n
// function getOddElementsAtProperty(obj, key) {
//   // Check if the property at the given key is an array
//   if (Array.isArray(obj[key])) {
//     // Filter the odd elements of the array at the given key
//     return obj[key].filter(element => element % 2 !== 0);
//   }
//   // If the property at the given key is not an array, return an empty array
//   return [];
// }

// function getOddElementsAtProperty(obj,key){
//     let result =[];
//     if(!obj[key]) return result;
//     if(!Array.isArray(obj[key])) return result;
//     for(let i = 0; i < obj[key].length; i++){
//         if(obj[key][i] % 2 !==0) {
//             result.push(obj[key][i])
//         }
//     }
//     return result;
// }