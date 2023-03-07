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