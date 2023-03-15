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

// 34) filterEvenElements

// Write a function called "filterEvenElements".

// Given an array of numbers, "filterEvenElements" returns an array containing only the even numbers of the given array.

// var output = filterEvenElements([2, 3, 4, 5, 6]);
// console.log(output); // --> [2, 4, 6]

// SOLUTION:
// function filterEvenElements(arr){
//     return arr.filter(ar => ar % 2 === 0)
// };

// ===================================================================>

// 35) getLengthOfShortestElement

// Write a function called "getLengthOfShortestElement".

// Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

// Notes:

// It should return 0 if the array is empty.
// var output = getLengthOfShortestElement(['one', 'two', 'three']);
// console.log(output); // --> 3

// SOLUTION:
// function getLengthOfShortestElement(arr) {
//     if(arr.length === 0) return 0;

//     let result = 0;

//    for(let i = 0; i < arr.length; i++){

//        if(arr[i].length >= arr[i].length){

//            result = result + arr[i][0].length;

//        }
//    }

//    return result;
// }


// function getLengthOfShortestElement(arr){
//     const lengthArray = arr.map((e) => e.length);

//     let shortest = Infinity;

//     if(lengthArray.length < 1) return 0;

//     for(const el of lengthArray){
//         if(el < shortest){
//             shortest = el;
//         }
//     }
//     return shortest
// };

// ===================================================================>

// 36) getLongestElement

// Write a function called "getLongestElement".

// Given an array, "getLongestElement" returns the longest string in the given array.

// Notes:

// If there are ties, it returns the first element to appear.

// If the array is empty, it should return an empty string.

// var output = getLongestElement(['one', 'two', 'three']);
// console.log(output); // --> 'three'


// SOLUTION:
// function getLongestElement(arr) {
//   let long = arr.reduce((prev,cur) => {
//       return prev.length > cur.length ? prev : cur;
//   },'')
//   return long;
// }

//we have used here reduce method with prev and cur,
// and if prev.length is > than cur.length
// then return prev otherwise return cur,
// initial value is '' empty string


// function getLongestElement(arr){
//     if(arr.length === 0) return '';

//      let result = arr[0];

//      for(let i = 1; i < arr.length; i++){
//          if(arr[i].length > result.length){
//              result = arr[i]
//          }
//      }
//      return result;
// };

// =================================================>

