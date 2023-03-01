// 41) square

// Write a function called "square".

// Given a number, "square" should return the square of the given number.

// var output = square(5);
// console.log(output); // --> 25

// SOLUTION:
// function square(num) {
//     return num * num
//   }
//   square (5);

// =====================================================================>

// 42) computeAverageLengthOfWords

// Write a function called "computeAverageLengthOfWords".

// Given two words, "computeAverageLengthOfWords" returns the average of their lengths.

// var output = computeAverageLengthOfWords('code', 'programs');
// console.log(output); // --> 6

// SOLUTION:
// function computeAverageLengthOfWords(word1, word2) {
//     const average = ( word1.length + word2.length ) / 2;
//     return average;
//   }

// =====================================================================>

// 43) computeAreaOfARectangle

// Write a function called "computeAreaOfARectangle".

// Given the length and width of a rectangle, "computeAreaOfARectangle" returns its area.

// var output = computeAreaOfARectangle(4, 8);
// console.log(output); // --> 32

// SOLUTION:
// function computeAreaOfARectangle(length, width) {
//     const rec = length * width
//     return rec 
//  }
//  computeAreaOfARectangle(4, 8);

// ========================================================================>

// 44) computePerimeterOfARectangle

// Write a function called "computePerimeterOfARectangle".

// Given a length and a width describing a rectangle, "computePerimeterOfARectangle" returns its perimter.

// var output = computePerimeterOfARectangle(5, 2);
// console.log(output); // --> 14

// SOLUTION:
// function computePerimeterOfARectangle(length, width) {
//     const rect = length * 2 + width * 2 
//     return rect
//   }
//   computePerimeterOfARectangle (5, 2)
  
  
//   // const per = (length + width) * 2
//   // return per

// ================================================================>

// 45) computePerimeterOfATriangle

// Write a function called "computePerimeterOfATriangle".

// Given 3 sides describing a triangle, "computePerimeterOfATriangle" returns its perimter.

// var output = computePerimeterOfATriangle(6, 4, 10);
// console.log(output); // --> 20

// SOLUTION:
// function computePerimeterOfATriangle(side1, side2, side3) {
//     const perimeter =  side1 + side2 + side3;
//     return perimeter;
//   }

// =============================================================>

// 46)  computePower

// Write a function called "computePower"

// . Given a number and an exponent, "computePower" returns the given number, raised to the given exponent.

// var output = computePower(2, 3);
// console.log(output); // --> 8

// SOLUTION:
// function computePower(num, exponent) {
//     const result = Math.pow(num,exponent)
//     return result
//   }
//   computePower(2,3);

// =========================================================================>

// 47) computeSquareRoot

// Write a function called "computeSquareRoot".

// Given a number, "computeSquareRoot" returns its square root.

// var output = computeSquareRoot(9);
// console.log(output); // --> 3


// SOLUTION:
// function computeSquareRoot(num) {
//     const result = Math.sqrt(num)
//     return result
//   }
//   computeSquareRoot(9);

// ===================================================================>

// 48) getLastElement

// Write a function called "getLastElement".

// Given an array, "getLastElement" returns the last element of the given array. Notes:* If the given array has a length of 0, it should return 'undefined'.

// var output = getLastElement([1, 2, 3, 4]);
// console.log(output); // --> 4

// SOLUTION:
// function getLastElement(array){
//     if(array.length === 0){
//         return undefined
//     }
//     return array[array.length-1]
// }

// getLastElement([1, 2, 3, 4]);

// =========================================================>

// 49) addToFront

// Write a function called "addToFront".

// Given an array and an element, "addToFront" adds the given element to the front of the given array, and returns the given array.

// Notes: * It should be the SAME array, not a new array.

// var output = addToFront([1, 2], 3);
// console.log(output); // -> [3, 1, 2];

// SOLUTION:
// function addToFront(arr, element) {
//     arr.unshift(element) 
//      // your code here
//     return  arr
//    }
//    addToFront([1, 2], 3);

// ====================================================================>

// 50) addToBack

// Write a function called "addToBack".

// Given an array and an element, "addToBack" returns the given array with the given element added to the end.

// Note: It should be the SAME array, not a new array.

// var output = addToBack([1, 2], 3);
// console.log(output); // -> [1, 2, 3]

// SOLUTION:
// function addToBack(arr, element) {
//     // your code here
//     arr.push(element)
//     return arr
//   }