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


// function removeElement(arr, d){
//     const result = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== d){
//             result.push(arr[i])
//         } else if(i === d){
//             return [];
//         } 
//     }
//     return result;
// };

// function removeElement(arr,id){
//     const result = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== id){
//             result.push(arr[i])
//         }
//     }
//     return result
// }'

// first we've iterated over our arr then check
// if our els is not equal to el in id then
// separate it to another variable