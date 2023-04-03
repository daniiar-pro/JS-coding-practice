// 1) removePrefix

// Clear all '$' signs from numbers in a given array. => [2,3,4,5,15]

// `removePrefix(['$2', '$3', '$4', '$5','$15']) // [2,3,4,5,15]`

// SOLUTION:
// function removePrefix(arr) {
//   let res = [];

//   for (let i = 0; i < arr.length; i++){
//       res.push(arr[i].slice(1));
//   }
//   return res;
// }