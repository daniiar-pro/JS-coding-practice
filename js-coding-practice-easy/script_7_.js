// 61) getAllElementsButNth

// Write a function called "getAllElementsButNth".

// Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.

// var output = getAllElementsButNth(['a', 'b', 'c'], 1);
// console.log(output); // --> ['a', 'c'];


// SOLUTION:
// function getAllElementsButNth(array,index){
//     const result = [];
//     for(let i = 0; i < array.length; i++){
//         if( i !== index){
//             result.push(array[i]);
//         }
//     }
//     return result
// }

// ==========================================================================>

// 62) removeElement

// Write a function called "removeElement".

// Given an array of elements, and a "discarder" parameter, "removeElement" returns an array containing the items in the given array that do not match the "discarder" parameter.

// Notes:

// If all the elements match, it should return an empty array.

// If an empty array is passed in, it should return an empty array.

// var output = removeElement([1, 2, 3, 2, 1], 2);
// console.log(output); // --> [1, 3, 1];

// SOLUTION:
// function getIndexOf(charAtStr, string){
//     for(let i = 0; i < string.length; i++){
//         if(string[i] === charAtStr) return i
//     }
//     return -1;
// }

// getIndexOf('a',  'Daniiar')


// function getIndexOf(char, str){
//     return str.includes(char)
// };

// ======================================================================>

// 64) Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

// var output = findMinLengthOfThreeWords('a', 'be', 'see');
// console.log(output); // --> 1;

// SOLUTION:
// function findMinLengthOfThreeWords (word1, word2, word3){
//     if(word1.length < word2.length && word3.length){
//         return word1.length
//     } else if(word2.length < word1.length && word3.length){
//         return word2.length
//     } else {
//         return word3.length
//     }
// }

// findMinLengthOfThreeWords('a', 'be', 'see')

// function findMinLengthOfThreeWords(a, b , c){
//     return Math.min(a.length, b.length, c.length);
// }
// ==============================================================================>

// 65) findMaxLengthOfThreeWords

// Write a function called "findMaxLengthOfThreeWords".

// Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.

// var output = findMaxLengthOfThreeWords('a', 'be', 'see');
// console.log(output); // --> 3;

// SOLUTION:
// function findMaxLengthOfThreeWords(word1, word2, word3) {
//     // your code here
//     return Math.max(word1.length, word2.length, word3.length)
//   };
// ==========================================================================>

// 66) filterOddLengthWords

// Write a function called "filterOddLengthWords".

// Given an array of string, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

// var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
// console.log(output); // --> ['there', "now'];

// SOLUTION:

// function filterOddLengthWords(array){
//     const odds = [];
//     for(let i = 0; i < array.length; i++){
//       if(array[i].length % 2 !== 0){
//           return odds.push(array[i])
//       } else {
//           return [];
//       }
//     }
//     return odds;
// }

// function filterOddLengthWords(array){
//     const odds = array.filter(arr => arr.length % 2 !== 0);
//     return odds
// }


// function filterOddLengthWords(array){
//     const result = [];
//     for(let words of array){
//         if(words.length % 2 !== 0){
//             result.push(words)
//         }
//     }
//     return result;
// };

// ==================================================================>

// 67)  filterEvenLengthWords

// Write a function called "filterEvenLengthWords".

// Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.

// var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
// console.log(output); // --> ['word', 'word'];

// SOLUTION:


// function filterEvenLengthWords(array){
//     const evens = [];
//     for(let word of array){
//         if(word.length % 2 === 0){
//             evens.push(word)
//         }
//     }
//     return evens;
// }

// function filterEvenLengthWords(array){
//     const evens = array.filter(arr => arr.length % 2 === 0);
//     return evens;
// };

// ================================================================>

// 68) getLengthOfLongestElement

// Write a function called "getLengthOfLongestElement".

// Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.

// Notes:

// It should return 0 if the array is empty.
// var output = getLengthOfLongestElement(['one', 'two', 'three']);
// console.log(output); // --> 5

// SOLUTION:
// function getLengthOfLongestElement(array){
//     let longest = array[0].length;
//     for(let i = 1; i < array.length; i++){
//         if(array[i].length > longest){
//             longest = array[i].length
//         }
//     }
//     return longest;
//    }
   // ["ther","it","is","now"];

//    ==============================================================================>

// 69) countCharacter

// Write a function called "countCharacter".

// Given a string input and a character, "countCharacter" returns the number of occurrences of a given character in the given string.

// var output = countCharacter('I am a hacker', 'a');
// console.log(output); // --> 3

// SOLUTION:
// function countCharacter(str, char) {
//   // your code here
//   let split = str.split('')
//   let result = []
//   for(let i = 0; i< split.length; i++){
//     if(split[i]===char){
//       result.push(split[i])
//     }
//   }
//   return result.length
// }

// function countCharacter(str, char){
//     let counter = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === char){
//             counter++
//         }
//     }
//     return counter;
// };

// =====================================================================>

// 70)  getAllLetters

// Write a function called "getAllLetters".

// Given a word, "getAllLetters" returns an array containing every character in the word. Notes:* If given an empty string, it should return an empty array.

// var output = getAllLetters('Radagast');
// console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']

// SOLUTION:
// function getAllLetters(str){
//     return str.split('')
// }