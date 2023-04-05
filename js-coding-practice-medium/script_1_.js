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

// ==========================================>

// 2) getFreq

// Find frequency of 'a' in a given text.

// `getFreq('alibaba', 'a') // 3`

// SOLUTION:
// // function getFreq(str, target) {
// //   let sp = str.split('');
    
// //     let count = 0;

// //     for (let i = 0; i < sp.length; i++){
// //         if(sp[i] === target){
// //             count++;
// //         }
// //     }
// //     return count;
// // }

// function getFreq(str, target){
//     let count = 0;

//     for (let i = 0; i < str.length; i++){
//         if (str[i] === target)  count++
//     }
//     return count;
// }