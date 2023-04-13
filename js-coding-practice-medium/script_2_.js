// 11) remove

// Remove Shorter Strings

// Given an array of strings and length len, find and remove any strings that are shorter than given length len from the array.

// remove(["geeks", "for", "geeks"], 3) // ["geeks", "geeks"]
// remove(["hello", "react", "javascript", "ruby"], 6) // ["javascript"]

// SOLUTION:
// function remove(arr, len) {
//   let longs = [];
//   for (let i = 0; i < arr.length; i++){
//       if(arr[i].length > len){
//           longs.push(arr[i])
//       }
//   }
//   return longs;
// };

// ================================>