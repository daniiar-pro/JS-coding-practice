// 51) generateCoinChange

// Generate Coin Change

// Create a function which accepts cents, compute and print how to represent that amount with smallest number of coins. pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents), half-dollar(50 cents) and dollar (100 cents).

// `generateCoinChange(194)

// 194 cents can be represented by:
// [
//     dollars:    1
//     quarters:    3
//     dimes:      1
//     nickels:    1
//     pennies:    4
// ]`
// `generateCoinChange(23)`
// `out: [10,10,1,1,1]`;

// SOLUTION:

// ================================================================>

// 52) sumDigits

// Write a function called "sumDigits".

// Given a number, "sumDigits" returns the sum of all its digits.

// var output = sumDigits(1148);
// console.log(output); // --> 14
// If the number is negative, the first digit should count as negative.

// var output = sumDigits(-316);
// console.log(output); // --> 4
// Notes:

// In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.

// Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

// =========================================================>

// 53) repeatString

// Write a function called "repeatString".

// Given a string and a number, "repeatString" returns the given string repeated the given number of times.

// var output = repeatString('code', 3);
// console.log(output); // --> 'codecodecode'

// SOLUTION:
// function repeatString(string, num) {
//   let repeated = '';

//   for(let i = 0; i < num; i++){
//       repeated +=string
//   }
//   return repeated
// };

// ===================================================>

// 54) getLongestOfThreeWords

// Write a function called "getLongestOfThreeWords".

// Given 3 words, "getLongestOfThreeWords" returns the longest of three words.

// Notes:

// If there is a tie, it should return the first word in the tie.
// var output = getLongestOfThreeWords('these', 'three', 'words');
// console.log(output); // --> 'these'

// SOLUTION:
// function getLongestOfThreeWords(word1, word2, word3) {
//   if(word1.length >= word2.length && word3.length){
//       return word1;
//   } else if(word2.length >= word1.length && word3.length){
//       return word2;
//   } else if(word3.length >= word1.length && word2.length){
//       return word3;
//   } else {
//       return word1;
//   }
// }

// function getLongestOfThreeWords(word1, word2, word3){
//     let longest = '';

//     for(let i = 0; i < 3; i++){
//         if(arguments[i].length > longest.length){
//             longest = arguments[i];
//         }
//     }
//     return longest;

// };

// =======================================================================>

// 55) findShortestOfThreeWords

// Write a function called "findShortestOfThreeWords".

// Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.

// Notes:

// If there are ties, it should return the first word in the parameters list.
// var output = findShortestOfThreeWords('a', 'two', 'three');
// console.log(output); // --> 'a'

// SOLUTION:
// function findShortestOfThreeWords(word1, word2, word3) {
//   let shortest = word1;

//   for(let i = 1; i < arguments.length; i++){
//       if(arguments[i].length < shortest.length){
//           shortest = arguments[i]
//       }
//   }
// return shortest;
// }

// function findShortestOfThreeWords(word1, word2, word3){
//     let mindWord = arguments[0];

//     for(let i = 0; i < 3; i++){
//         if(arguments[i].length < mindWord.length){
//             mindWord = arguments[i];
//         }
//     }
// return mindWord;
// };

// ===============================================>

//  56) isOddWithoutModulo

// Write a function called "isOddWithoutModulo".

// Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

// Note:

// It does so without using the modulo operator (%).

// It should work for negative numbers and zero.

// var output = isOddWithoutModulo(17);
// console.log(output); // --> true


// SOLUTION:
// function isOddWithoutModulo(num) {


//    num = Math.abs(num);
//    if(num==0)
//        return false;
//    else if(num==1)
//        return true;
//    else
//        return isOddWithoutModulo(num-2);

// };

// 57) isEvenWithoutModulo

// Write a function called "isEvenWithoutModulo".

// Given a number, "isEvenWithoutModulo" returns whether it is even.

// Notes:

// It does so without using the modulo operator (%).

// It should work for negative numbers and zero.

// var output = isEvenWithoutModulo(8);
// console.log(output); // --> true

// SOLUTION:
// function isEvenWithoutModulo(num) {
//   // your code here
// };

// =============================================================================>

// 58)  multiplyBetween

// Write a function called "multiplyBetween".

// Given 2 integers, "multiplyBetween" returns the product between the two given integers, beginning at num1, and excluding num2.

// Notes:

// The product between 1 and 4 is 1 * 2 * 3 = 6.

// If num2 is not greater than num1, it should return 0.

// var output = multiplyBetween(2, 5);
// console.log(output); // --> 24


// SOLUTION:
// function multiplyBetween(num1, num2) {
//   if(typeof num2 !== 'number') return 0;

//     let res = 1;

//     for(let i = num1; i < num2; i++){
//         res *= i
//     }
//     return res;

// }

// ==============================================================>

//59)  transformFirstLast

// Write a function called "transformFirstLast".

// Transform first and last item to an object.

// var arr = [1,2,3,4]
// // {first: 1, last: 4}

// SOLUTION:
// function transformFirstLast(arr) {
//     let obj = {};

//     obj.first = arr[0];
//     obj.last = arr[arr.length -1];

//     return obj;
// }

// // we created obj literal 
// // then new key for obj.first and assign value arr[0]
// // assigned array first value to it
// // then for last assigned arrays last value
// // using arr[arr.length -1];

// // then returned changed object with new
// // key-value pairs;

// ===============================================================================>

// 60)  getAllKeys

// Write a function called "getAllKeys".

// Return all keys from a given array.

// var obj = {a: 1, b: 4}
// getAllKeys(obj) // ['a', 'b']

// SOLUTION:
// function getAllKeys(arr) {
//  return Object.keys(arr);
// }