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
 
// }