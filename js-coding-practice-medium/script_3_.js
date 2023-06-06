// 21) popFront

// Array: Pop Front

// Given array, remove and return the value at the beginning of the array.

// Note:

// Do this without using built-in array methods except pop().
// `popFront([1,2,3]) // 1`

// SOLUTION:
// function popFront(arr) {
//   // let res = 0;

//   // for (let i =  0; i < arr.length; i++){
//   //   res += arr[0];
//   // }
//   // return res;
//   let res =  arr.reverse();
//   return res.pop();

// }
// =======================================================>

// 22) removeDup

// Array: Remove Duplicates

// Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together.

// Notes:

// As with all these array challenges, do this without using any built-in array methods.

// Solve this without using any nested loops.

// `removeDup([1,2,2,2,3,4,4]) // [1,2,3,4]`

// SOLUTION:
// function removeDup(arr) {
//   let sorted = [];

//   for (let i = 0; i < arr.length; i++){
//     if(!sorted.includes(arr[i])){
//       sorted.push(arr[i]);
//     } else {
//       sorted;
//     }
    
//   }
//   return sorted;
// }

// 23) reverse

// Array: Reverse

// Given a numerical array, reverse the order of values, in place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array - move values within the array that you are given. As always. do not use built-in array functions such as splice().

// `reverse([1,2,3,4]) // [4,3,2,1]`

// function reverse(arr) {
//   return arr.reverse()
// }

// function reverse(arr) {
//   // your code here
//     let temp;
//     for (let i=0; i<arr.length/2; i++){
//     temp=arr[i];
//     arr[i]=arr[arr.length-1-i];
//     arr[arr.length-1-i]=temp;
//   }
//   return arr
// }

// =========================================>

// 24) filterRange

// Array: Filter Range

// Given array and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order.

// Note:

// No built-in array functions.
// `filterRange([2,6,12,4,7,13,42,1], 3, 9) // [6, 4, 7]`

// SOLUTION:
// function filterRange(arr, min, max) {
//   let res = [];

//   for (let i = 0; i < arr.length; i++){
//     if(arr[i] > min && arr[i] < max){
//       res.push(arr[i])
//     }
//   } 
//   arr = res;
//   return arr;
// }