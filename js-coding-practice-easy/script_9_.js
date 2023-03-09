// 81) addSeven

// Build function that accepts array. Return an array with all values except first, adding 7 to each. Do not alter the original array.

// `addSeven([1,2,5,10]) // [9,12,17]`

// SOLUTION:

// function addSeven(arr) {
//     let sliced = arr.slice(1);
//     const filtered = sliced.map( (ar) => {
//     const filtered = ar + 7;
//     return filtered 
// })
// return filtered
// }


// function addSeven(arr){
//     let newArr = [];
//     for(let i = 1; i < arr.length; i++){
//         newArr.push(arr[i] + 7)
//     }
//     return newArr;
// };

// ========================================================================================>

// 82) isPersonOldEnoughToDrinkAndDrive

// Write a function called "isPersonOldEnoughToDrinkAndDrive".

// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrinkAndDrive" returns whether the given person is old enough to legally drink and drive in the United States.

// Notes:* The legal drinking age in the United States is 21.* The legal driving age in the United States is 16.* It is always illegal to drink and drive in the United States.

// var obj = {
//   age: 45
// };
// var output = isPersonOldEnoughToDrinkAndDrive(obj);
// console.log(output); // --> false;

// SOLUTION:
// var obj = {
//     age:45
// }

// function isPersonOldEnoughToDrinkAndDrive(obj){
//     if(obj.age >= 21){
//      return false
//     } else if(obj.age >= 16){
//         return false
//     } 
// }

// function isPersonOldEnoughToDrinkAndDrive(person){
//     return false;
// }

// ==========================================================>

// 83) isPersonOldEnoughToDrive

// Write a function called "isPersonOldEnoughToDrive".

// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrive" returns whether the given person is old enough to drive.

// Notes:* The legal driving age in the United States is 16.

// var obj = {
//   age: 16
// };
// var output = isPersonOldEnoughToDrive(obj);
// console.log(output); // --> true;

// SOLUTION:
// function isPersonOldEnoughToDrive(person){
//     return person.age >= 16 ? true : false;
// };

// ===============================================================>