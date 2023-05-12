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