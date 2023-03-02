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