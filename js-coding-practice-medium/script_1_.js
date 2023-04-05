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

// =======================================>

// 3) getFreqAll

// Find frequencies of all letters in a given text.

// `getFreqAll('alibaba') // {a:3, l:1, i:1, b:2}`

// SOLUTION:
// function getFreqAll(str) {
//   let freq = {};
  
//      for (let i = 0; i < str.length; i++){
//          let letter = str[i]
//          if(freq[letter]){
//              freq[letter]++
//          } else {
//              freq[letter] = 1;
//          }
//      }
//      return freq
// }

// function getFreqAll(str){

//     let res = {};

//     for (let i = 0; i < str.length; i++){
//         if(res[str[i]]) res[str[i]]++;
//         else res[str[i]] = 1;
//     }
//     return res;
// }