// 51)  addToFrontOfNew

// Write a function called "addToFrontOfNew".

// Given an array and an element, "addToFrontOfNew" returns a new array containing all the elements of the given array, with the given element added to the front.

// Important: It should be a NEW array instance, not the original array instance.

// var input = [1, 2];
// var output = addToFrontOfNew(input, 3);
// console.log(output); // --> [3, 1, 2];
// console.log(input); --> [1, 2];

// SOLUTION:
// function addToFrontOfNew(arr, element) {
//     // your code here
//   //   let newArr = arr
//   //   newArr.unshift(element)
//   //   return newArr
//   const newArr = [element, ...arr]
//   return newArr
  
//   }

// ==================================================================>

// 52) addToBackOfNew

// Write a function called "addToBackOfNew".

// Given an array and an element, "addToBackOfNew" returns a clone of the given array, with the given element added to the end.

// Important: It should be a NEW array instance, not the original array instance.

// var input = [1, 2];
// var output = addToBackOfNew(input, 3);
// console.log(input); // --> [1, 2]
// console.log(output); // --> [1, 2, 3]

// SOLUTION:
// function addToBackOfNew(arr, element) {
//     // your code here
//     let newArr = [ ...arr, element]
//     return newArr
//   }

// ===========================================================>

// 53) getElementsAfter

// Write a function called "getElementsAfter".

// Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index.

// var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
// console.log(output); // --> ['d', 'e'];


// SOLUTION:
// function getElementsAfter(array, index){
//     const add =  array.slice(index + 1);
//     return add
// }

// //slice slices the portion of the arr depending
// //on index number from start point and end not 
// // included

// // in this example slice from the provided
// // index but not included so that's why added + 1

// ==============================================================>

// 54) getElementsUpTo

// Write a function called "getElementsUpTo".

// Given an array and a index, "getElementsUpTo", returns an array with all the elements up until, but not including, the element at the given index.

// Notes:* In order to do this you should be familiar with the 'splice' method.

// var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
// console.log(output); // --> ['a', 'b', 'c']

// SOLUTION:
// function getElementsUpTo(array, n) {
//     // your code here
//     const result = array.splice(0,n)
//     return result
//   };

// ======================================================================>

// 55) getAllElementsButFirst

// Write a function called "getAllElementsButFirst".

// Given an array, "getAllElementsButFirst" returns an array with all the elements but the first.

// var input = [1, 2, 3, 4];
// var output = getAllElementsButFirst(input);
// console.log(output); // --> [2, 3, 4]

// SOLUTION:
// function getAllElementsButFirst(array) {
//     // your code here
//     const res = array.slice(1)
//     return res
//   };

// =========================================================================>

// 56) getAllElementsButLast

// Write a function called "getAllElementsButLast".

// Given an array, "getAllElementsButLast" returns an array with all the elements but the last.

// var input = [1, 2, 3, 4];
// var output = getAllElementsButLast(input);
// console.log(output); // --> [1, 2 , 3];

// SOLUTION:
// function getAllElementsButLast(array) {
//     // your code here
//     return array.slice(0,-1)
//   };

// ==========================================================================================>

// joinArrays

// Write a function called "joinArrays".

// Given two arrays, "joinArrays" returns an array with the elements of "arr1" in order, followed by the elements in "arr2".

// var output = joinArrays([1, 2], [3, 4]);
// console.log(output); // --> [1, 2, 3, 4]
// You should be familiar with the "concat" method for this problem.

// SOLUTION:
// function joinArrays(arr1, arr2) {
//     const add = arr1.concat(arr2)
//     return add
//   }
//   joinArrays([1, 2], [3, 4]);

// =================================================================>

// 58) joinThreeArrays

// Write a function called "joinThreeArrays".

// Given three arrays, "joinThreeArrays" returns an array with the elements of "arr1" in order followed by the elements in "arr2" in order followed by the elements of "arr3" in order.

// var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
// console.log(output); // --> [1, 2, 3, 4, 5, 6]
// You should be familiar with the "concat" method for this problem.

// SOLUTION:
// function joinThreeArrays(arr1, arr2, arr3) {
//     const add = arr1.concat(arr2,arr3)
//     return add
//   }
//   joinThreeArrays([1, 2], [3, 4], [5, 6]);

// ============================================================>

// 59) removeFromFront

// Write a function called "removeFromFront".

// Given an array, "removeFromFront" returns the given array with its first element removed. Notes:* You should be familiar with the method 'shift'.

// var output = removeFromFront([1, 2, 3]);
// console.log(output); // --> [2, 3]

// SOLUTION:
// function removeFromFront(arr) {
//     // your code here
//      arr.shift()
//      return arr
//   }
//   removeFromFront([1, 2, 3]);

// ===============================================================================>

// 60) removeFromBackOfNew

// Write a function called "removeFromBackOfNew".

// Given an array, "removeFromBackOfNew" returns a new array containing all but the last element of the given array.

// Notes:* You should be familiar with the 'slice' method.

// var arr = [1, 2, 3];
// var output = removeFromBackOfNew(arr);
// console.log(output); // --> [1, 2]
// console.log(arr); // --> [1, 2, 3];


// SOLUTION:
// function removeFromBackOfNew(arr) {
//     arr.pop();
//     return arr
// }