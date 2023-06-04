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