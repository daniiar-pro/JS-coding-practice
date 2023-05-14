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

// };
// 5) largestDiff

// Given an array of integers, find the largest difference between two elements

// `largestDiff([2,3,8,1]) // 7`

// SOLUTION:
// function largestDiff(arr) {
//   var maxDiff = 0;
//   for (var i = 0; i < arr.length - 1; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//       var diff = Math.abs(arr[j] - arr[i]);
//       if (diff > maxDiff) {
//         maxDiff = diff;
//       }
//     }
//   }
//   return maxDiff;
// }

// console.log(largestDiff([2,3,8,1])); // 7


// function largestDiff(arr){
//     let resArr = arr.sort((a,b) => (a-b));
//     let res = resArr[resArr.length -1] - resArr[0];
//     return res; 
// };

// ====================================>



// 6) capitalize

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

// `capitalize('the quick brown fox') // The Quick Brown Fox`
 
// SOLUTION:
//  function capitalize(str){

//      let arr = str.split(' ');
//      let string = '';

//      for (let i = 0; i < arr.length; i++){
//          string = arr[i][0];

//          arr[i] = string.toUpperCase() + arr[i].slice(1)
//      }
//      return arr.join(' ')
//  };


// }
// ================================================>

// 7) reverseStr

// Create a function which reverses a given string.

// `reverseStr("hello me") // "em olleh"`

// SOLUTION:
// function reverseStr(str) {
//   return str.split('').reverse().join('')
// };

// ==============================>

// 8) secondLowest

// Write a JavaScript function which will take an array of numbers stored and find the second lowest

// `secondLowest([2,3,8,0]) // 2`

// SOLUTION:
// function secondLowest(arr){
//     let result = arr.sort((a,b) => a-b);

//     return result[1];
// };


// ==================================>

// 9) reverseWords

// Create a function to reverse all words in a given string.

// `reverseWords("my name is Marat") // "ym eman si taraM"`

// SOLUTION:
// function reverseWords(str) {
//   let rev = str.split(' ').map(st => {
//      return st.split('').reverse().join('')
//   });
//   return rev.join(' ')
// };

// ====================================>

//  10) count

// Accept a string and return the number of non-space characters found in the string

// `count("Honey pie, you are driving me crazy") // 29 (not 35)`

// SOLUTION:
// function count(str) {
//   let res = str.trim('');
//   let d =res.split(' ').join('');
//   return d.length;
// }


