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