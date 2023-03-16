// 41) printAverage0fArray

// Analyze an array's values and print the average.

// var arr = [1,2,3,4]
// `printAverage0fArray(arr) // 2.5`

// SOLUTION:
// // function printAverage0fArray(arr){

// // let sum = 0;

// // let av = 0;

// // for(let i = 0; i < arr.length; i++){
// //     sum += arr[i];
// //     av = sum / arr.length;
    
// // }
// // return av;
// // }


// function printAverage0fArray(arr){
//     let result = arr[0];

//     for(let i = 1; i < arr.length; i++){
//         result += arr[i];
//     }
//     return result/ arr.length
// };

// ===================================================================>

// 42) returnOdds

// Return Odds from an Array

// returnOdds([1,2,3,4]) // [1,3]

// SOLUTION:
// // function returnOdds(arr){
// // const odds = arr.filter(ar => ar % 2 !== 0);
// // return odds;
// // }


// function returnOdds(arr){
//     let result = [];

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 !== 0){
//             result.push(arr[i])
//         }
//     }
//     return result;
// };

// ==========================================================>

// 43) countGreaterThanY

// Return Array Count Greater than Y.

// Given an array and a value Y. count and print the number of array values greater than Y.

// `countGreaterThanY([1,2,3], 2) //1`
// `countGreaterThanY([2,2,2], 0) //3`

// SOLUTION:
// function countGreaterThanY(arr, y){
//  let count = 0;

//  for(let i = 0; i < arr.length; i++){
//      if(arr[i] >y) count++
//  }
//  return count;
// };

// ===================================================================>

// 44) printMax

// Given an array, print the max.

// `printMax([1,-12,3,1,0]) //3`
// `printMax([2,2,2]) //2`

// // function printMax(arr){
// //     return Math.max(...arr)
// // }

// function printMax(arr){
//     let max = 0;

//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max
// }

// =======================================================>

// 45) scaleArr

// Given array arr and number num, multiply each arr value by num, and return the changed arr.

// `scale([2,3,4],5) // [10,15,20]`
//  SOLUTION:
// // function scaleArr(arr,num){
// //  const sc = arr.map(ar => ar * num);
// //  return sc;
// // }


// function scaleArr(arr, num){
//     let result = [];

//     for(let i = 0; i < arr.length; i++){
//          arr[i] * num;
//          result.push(arr[i] * num);
//     }
// return result 
// };

// =================================================================>

// 46) reverse

// Reverse Array.

// Given array, write a function to reverse values in-place.

// `reverse([34,6,4,2]) // [2,4,6,34]`

// SOLUTION:
// function reverse(arr) {
 
// };

// 47) squareArrayVals

// Square each value in a given array, returning that same array with changed values.

// `squareArrayVals(arr)`

// SOLUTION:
// // function squareArrayVals(arr) {
// //    arr = arr.map(ar => ar * ar);
// //   return arr;
// // }

// function squareArrayVals(arr){
//     let res = [];

//     for(let  i = 0; i < arr.length; i++){
//         res.push(arr[i] * arr[i]);
//     }
//     return res;
// };

// ==============================================================>

// 48) zeroOutArrayNegativeVals

// Zero Out Array Negative Numbers

// Return the given array, after setting any negative values to zero.

// `zeroOutArrayNegativeVals(arr)`

// SOLUTION:
// function zeroOutArrayNegativeVals(arr) {

// let res = [];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 0)  arr[i] = 0;
//     res.push(arr[i])
// }
// return res;

// };

// =============================================================>

// 49) sigma

// Sigma

// Implement function sigma(num) that given a number, returns the sum of all positive integers to number (inclusive).

// `sigma(5) // 15 (1 + 2 + 3 + 4 + 5)`

// SOLUTION:
// function sigma(num) {
// let sum = 0;

// for(let i = 0; i <= num; i++){
//     sum += i;
// }
// return sum;
// };

// ================================================>

// 50) factorial

// Factorial

// Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive).

// `factorial (5) = 120 (or 1 * 2 * 3 * 4 * 5)`

// SOLUTION:
// function factorial (num) {
//   let fact = 1;
//   for(let i = 1; i <= num; i++){
//       fact *= i
//   };
//   return fact;
// }