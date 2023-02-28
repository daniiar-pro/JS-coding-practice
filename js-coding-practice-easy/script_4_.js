// 31) isOdd

// Write a function called "isOdd".

// Given a number, "isOdd" returns whether the given number is odd.

// var output = isOdd(9);
// console.log(output); // --> true

// SOLUTION:
// function isOdd(num) {
//     if(num % 3===0){
//       return true
//     } else {
//       return false
//     }
//   }

// =====================================================================>

// 32) isSameLength

// Write a function called "isSameLength".

// Given two words, "isSameLength" returns whether the given words have the same length.

// var output = isSameLength('words', 'super');
// console.log(output); // --> true

// SOLUTION:
// function isSameLength(word1, word2) {
//     if (word1.length === word2.length){
//       return true
//     } else{
//       return false
//     }
//     }
    
//      isSameLength ("words", "super");

// ==============================================================>

// 33) areBothOdd

// Write a function called "areBothOdd".

// Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.

// var output = areBothOdd(1, 3);
// console.log(output); // --> true


// SOLUTION:
// function areBothOdd(num1, num2) {
//     if (num1 % 2 !== 0 && num2 % 2 !== 0) {
//       return true
//     } else {
//       return false
//     }
//     }
//     areBothOdd(1,3);

// ===================================================================>

// 34) isEitherEven

// Write a function called "isEitherEven".

// Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even.

// var output = isEitherEven(1, 4);
// console.log(output); // --> true

// SOLUTION:
// function isEitherEven(num1, num2) {
//     if(num1 % 2 === 0 || num2 % 2 === 0){
//       return true
//     } else {
//       return false
//     }
    
//     }
//     isEitherEven(1, 4) 
    

// =================================================================>

// 35) isOddLength

// Write a function called "isOddLength".

// Given a word, "isOddLength" returns whether the length of the given word is odd.

// var output = isOddLength('special');
// console.log(output); // --> true


// SOLUTION:
// function isOddLength(word) {
 //     if (word.length % 2 !== 0){
//       return true
 //     } else {
  //       return false
 //     }
//   }
 //   isOddLength ('special');
            
            
 // ===========================================================>

// 36)  isEvenLength

//  Write a function called "isEvenLength".
            
// Given a word, "isEvenLength" returns whether the length of the word is even.
            
// var output = isEvenLength('wow');
//  console.log(output); // --> false

// SOLUTION:
// function isEvenLength(word) {
//     if(word.length % 2 === 0){
//       return true
//     } else{
//       return false
//     }
//   }

// ===============================================================>

// 37) isEvenAndGreaterThanTen

// Write a function called "isEvenAndGreaterThanTen".

// Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.

// var output = isEvenAndGreaterThanTen(13);
// console.log(output); // --> false

// SOLUTION:
// function isEvenAndGreaterThanTen(num) {
//     if (num % 2 === 0 && num >10){
//       return true
//     }else {
//       return false
//     }
//   }
//    isEvenAndGreaterThanTen(13) 
  

// ==================================================================>

// 38) average

// Write a function called "average".

// Given two numbers, "average" returns their average.

// var output = average(4, 6);
// console.log(output); // --> 5

// SOLUTION:
// function average(num1, num2) {
//     return (( num1 *1 + num2 * 1) / 2);
//   }
//   average (4, 6);

// ======================================================================>

// 39) computeAreaOfATriangle

// Write a function called "computeAreaOfATriangle".

// Given the base and height of a triangle, "computeAreaOfATriangle" returns its area.

// var output = computeAreaOfATriangle(4, 6);
// console.log(output); // --> 12

// SOLUTION:
// function computeAreaOfATriangle(base, height) {
//     return ((base * height)/ 2)
  
//   }
//   computeAreaOfATriangle(4, 6)
  
//   //const area = base * height / 2
//   // return area;

// ===================================================================>

// 40) cube

// Write a function called "cube".

// Given a number, "cube" returns the cube of that number.

// var output = cube(3);
// console.log(output); // --> 27

// SOLUTION:
// function cube(num) {
//     const result = Math.pow(num,3)
//     return result
//     }