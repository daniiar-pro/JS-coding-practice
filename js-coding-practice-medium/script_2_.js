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


// 12) search_word

// Write a JavaScript function to find a word within a string.

// `search_word('The quick brown fox', 'fox') // => "'fox' was found 1 times."
// search_word('aa, bb, cc, dd, aa', 'aa'); // -> "'aa' was found 2 times."`

// //   function search_word(str, word) {
// //   const regex = new RegExp(word, "g");
// //   const count = (str.match(regex) || []).length;
// //   return `'${word}' was found ${count} times.`;
// // }

// function search_word(str, word){
    
//     let text = str;
//     let count = 0;

//     while(text){
//         if (text.indexOf(word) === 0){
//             count++
//         }
//         text = text.slice(1)
//     }
//     return `'${word}' was found ${count} times.`
// }

// 13) myChoice

// We have the following array:

// const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "].

// Write a JavaScript program to display the colors in the following way :

// `"1st choice is Blue."
// "2nd choice is Green."
// "3rd choice is Red."

// Solution:
// function myChoice(arr) {
//     let res = '';
//  for (let i = 0; i < arr.length; i++){
//      let suffix;
//      if(i + 1 === 1){
//          suffix = 'st'
//      } else if(i + 1 === 2){
//          suffix = 'nd'
//      } else if(i + 1 === 3){
//          suffix = 'rd'
//      } else {
//          suffix = 'th'
//      }
//       res += `${i+1}${suffix} is ${arr[i]} `
//  }
//  return res;
 
// }

// ======================================================>


// 14) search_word

// Write a JavaScript function to find a word within a string.

// `search_word('The quick brown fox', 'fox') // => "'fox' was found 1 times."
// search_word('aa, bb, cc, dd, aa', 'aa'); // -> "'aa' was found 2 times."`

// SOLUTION:
//   function search_word(str, word) {
//   const regex = new RegExp(word, "g");
//   const count = (str.match(regex) || []).length;
//   return `'${word}' was found ${count} times.`;
// }

// function search_word(str, word){
    
//     let text = str;
//     let count = 0;

//     while(text){
//         if (text.indexOf(word) === 0){
//             count++
//         }
//         text = text.slice(1)
//     }
//     return `'${word}' was found ${count} times.`
// };

// =========================================>


// 15) parameterize

// Write a JavaScript function to parameterize a string.
// `parameterize('Marat Gaipov from Seattle') // => marat-gaipov-from-seattle`

// SOLUTION:
// function parameterize(str) {
//  return str.split(' ').join('-').toLowerCase();
// }

// ====================================================>

// 16) swapCase

// Write a function to swap cases.

// `swapCase('AaBbc'); // -> "aAbBC"

// function swapCase(str) {
//     let res = '';
//   let arr = str.split('');
//   for (let i = 0; i < arr.length; i++){
//       if(arr[i] === arr[i].toLowerCase()){
//           res += arr[i].toUpperCase();
//       }  else {
//           res += arr[i].toLowerCase()
//       }
//   };
//   return res;
// }
// `swapCase('AaBbc'); // -> "aAbBC"`

// =========================================>

// 17) repeat

// Write a JavaScript function to repeat a string a specified times.

// `repeat('a', 4) // 'aaaa'`

// function repeat(char, num) {
//   let str = '';

//   for (let i = 0; i < num; i++){
//       str += char;
//   }
// return str;
// }