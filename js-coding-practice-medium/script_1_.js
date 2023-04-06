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

// ==============================================================================>
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

// ==========================================>

// 4) removeDup

// Removing duplicates of an array and returning an array of only unique elements

// `removeDup([1,2,3,1,1,1,2]) // [1,2,3]`

// SOLUTION:
// function removeDup(array) {
//   let res = [];

//   array.forEach(ar => {
//       if(!res.includes(ar)){
//       res.push(ar)

//       }
//   })
//   return res;
// }

// function removeDup(arr){
//     let sett = [... new Set(arr)];
//     return sett;
// }