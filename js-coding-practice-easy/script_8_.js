// 71) Write a function that, when given a word array, returns the largest suffix (word-end) common to all words in the array

// `commonSuf(["deforestation", "citation", "conviction", "incarceration"]) // "tion"
// commonSuf(["nice", "ice", "baby"]) // ""`

// SOLUTION:
// function commonSuf(words) {
//     if (words.length === 0) {
//       return "";
//     }
    
//     let maxSuffix = words[0];
    
//     for (let i = 1; i < words.length; i++) {
//       const word = words[i];
//       let j = 0;
//       while (j < maxSuffix.length && j < word.length && maxSuffix[maxSuffix.length - j - 1] === word[word.length - j - 1]) {
//         j++;
//       }
//       maxSuffix = maxSuffix.slice(maxSuffix.length - j);
//       if (maxSuffix === "") {
//         return "";
//       }
//     }
    
//     return maxSuffix;
//   }
  

// =================================================>

// 72) Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array's 'zeroth' element) down to 0 (as the last element). How long is this array?

// `countdown(5) // [5,4,3,2,1,0]`

// SOLUTION:
// function countdown(num) {
//     const res = [];
//     while(num >= 0){
//         res.push(num);
//         num--
//     }
//     return res;
//    }
   
// =========================================================================>

// 73) Your function will receive an array with two numbers. Print the first value,and return the second.

// `print([3,5]) // print 3 and return 5`

// SOLUTION:
// function print(array){
//     console.log(array[0]);
//     return array[1];
// };

// ===============================================================>

// 74) Write a function called "isEitherEvenOrAreBoth7".

// Given two numbers, 'isEitherEvenOrAreBoth7' returns true if at least one of the parameters is even, or, both of them are equal to 7.

// var output = isEitherEvenOrAreBoth7(3, 7);
// console.log(output); // --> false
// var output = isEitherEvenOrAreBoth7(2, 3);
// console.log(output); // --> true

// SOLUTION:
// function isEitherEvenOrAreBoth7(num1, num2) {
// if(num1 === 7 && num2 === 7){
//   return true
// } else if((num1 % 2==0) || (num2 % 2==0)){
//   return true
// } else{
//   return false
// }

// }

// function isEitherEvenOrAreBoth7(num1, num2){
//   if((num1 % 2 === 0 || num2 % 2 === 0) || (num1 === 7 && num2 === 7) ){
//     return true
//   } else  {
//   return false
//   }
// }

// function isEitherEvenOrAreBoth7(num1,num2){
//     if(num1  % 2 === 0 || num2 % 2=== 0){
//         return true
//       } else  if (num1 === 7 && num2=== 7){
//         return true
//      } else {
//          return false;
//      }
// }

// function isEitherEvenOrAreBoth7(num1, num2){
//     if((num1 % 2 === 0 || num2 % 2 === 0) || (num1 ===7 && num2  === 7)){
//         return true
//      } else{
//          return false
//      }
// };

// ============================================================>

// 75) Write a function called "isEitherEvenAndLessThan9".

// Given two numbers, 'isEitherEvenAndLessThan9' returns true if at least one of them is even, and, both of them are less than 9.

// var output = isEitherEvenAndLessThan9(2, 4);
// console.log(output); // --> true
// var output = isEitherEvenAndLessThan9(72, 2);
// console.log(output); // --> false

// SOLUTION:
// function isEitherEvenAndLessThan9(num1, num2) {
//     if((num1 % 2 === 0 || num2 % 2=== 0) || (num1 < 9 && num2 < 9)){
//         return true;
//     } else{
//         return false;
//     }
//   };

// =================================================================>

// 76) Kelvin wants to convert between temperature scales.

// Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed in Celsius degrees.

// Notes:* Fahrenheit = (9/5 * Celsius) + 32.

// `fahrenheitToCelsius(90) // 32`

// SOLUTION:
// function fahrenheitToCelsius(fDegrees) {
//     return Math.round((fDegrees -32) * 5/9)
// }
// (90°F − 32) × 5/9 = 32.222°C
