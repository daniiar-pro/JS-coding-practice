// 31) getSmallestElementAtProperty

// Write a function called "getSmallestElementAtProperty".

// Given an object and a key, "getSmallestElementAtProperty" returns the smallest element in the array located at the given key.

// Notes:

// If the array is empty, it should return undefined.

// If the property at the given key is not an array, it should return undefined.

// If there is no property at the key, it should return undefined.

// var obj = {
//   key: [2, 1, 5]
// };
// var output = getSmallestElementAtProperty(obj, 'key');
// console.log(output); // --> 1

// SOLUTION:
// function getSmallestElementAtProperty(obj, key) {
//     if(obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length > 0){
//         return Math.min.apply(null, obj[key]);;
//     }
//     return undefined;
//     }


//     function getSmallestElementAtProperty(obj, key) {
//   if (obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length > 0) {
//     // Find the smallest element in the array
//     return Math.min.apply(null, obj[key]);
//   }
//   // If the property is not an array, is empty or does not exist, return undefined
//   return undefined;
// }


// function getSmallestElementAtProperty(obj, key){
//     if(!obj[key]) return undefined;
//     if(!Array.isArray(obj[key])) return undefined;
//     if(obj[key].length === 0) return undefined;
//     let result = obj[key][0];
//     for(let i = 1; i < obj[key].length; i++){
//         if(obj[key][i] < result) result = obj[key][i]
//     }
//     return result
// };

// ========================================================================>

// 32) squareElements

// Write a function called "squareElements".

// Given a array of numbers, "squareElements" should return a new array where each element is the square of the element of the given array.

// var output = squareElements([1, 2, 3]);
// console.log(output); // --> [1, 4, 9]

// SOLUTION:
// function squareElements(arr) {
//   const sq = arr.map(ar => ar ** 2);
//   return sq;
// };

// =============================================================>

// 33) computeProductOfAllElements

// Write a function called "computeProductOfAllElements".

// Given an array of numbers, "computeProductOfAllElements" returns the products of all the elements in the given array.

// Notes:

// If given array is empty, it should return 0.
// var output = computeProductOfAllElements([2, 5, 6]);
// console.log(output); // --> 60

// SOLUTION:
// // function computeProductOfAllElements(arr) {
// //   const co = arr.reduce((prev,cur) => {
// //    return   prev * cur
// //   },1)
// //   if(!arr.length) return 0;
// //   return co;
// // }

// function computeProductOfAllElements(arr){
//     if(arr.length === 0) return 0;
//     let result = 1;
//     for(let i = 0;  i < arr.length; i++){
//         result *= arr[i];

//     }
//     return result;
// };

// ========================================================>