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

// 84) isPersonOldEnoughToVote

// Write a function called "isPersonOldEnoughToVote".

// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToVote" returns whether the given person is old enough to vote.

// Notes:* The legal voting age in the United States is 18.

// var obj = {
//   age: 19
// };
// var output = isPersonOldEnoughToVote(obj);
// console.log(output); // --> true;

// SOLUTION:
// function isPersonOldEnoughToVote(person) {
//     return person.age >= 18 ? true : false;
//     };

// ===================================================================>

// 85) isPersonOldEnoughToDrink

// Write a function called "isPersonOldEnoughToDrink".

// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrink" returns whether the given person is old enough to drink.

// Notes:* The legal drinking age in the United States is 21.

// var obj = {
//   age: 16
// };
// var output = isPersonOldEnoughToDrink(obj);
// console.log(output); // --> false;

// SOLUTION:
// function isPersonOldEnoughToDrink(person) {
//     return person.age >=21 ? true : false;
//   }

// ==============================================================================>

// 86) getProperty

// Write a function called "getProperty".

// Given an object and a key, "getProperty" returns the value of the property at the given key. Notes:* If there is no property at the given key, it should return undefined.

// var obj = {
//   key: 'value'
// };
// var output = getProperty(obj, 'key');
// console.log(output); // --> 'value';

// SOLUTION:
// function getProperty(obj,key){
//     return obj.hasOwnProperty(key) ? obj[key] : undefined;
// };

// ==============================================================================>

// 87) addProperty

// Write a function called "addProperty".

// Given an object, and a key, "addProperty" sets a new property on the given object with a value of true.

// var myObj = {};
// addProperty(myObj, 'myProperty');
// console.log(myObj.myProperty); // --> true

// SOLUTION:
//  function addProperty(obj,key){
//     obj[key] = true;
//     return obj
//  }

// ============================================================================>

// 88) removeProperty

// Write a function called "removeProperty".

// Given an object and a key, "removeProperty" removes the given key from the given object.

// var obj = {
//   name: 'Sam',
//   age: 20
// }
// removeProperty(obj, 'name');
// console.log([obj.name](http://obj.name/)); // --> undefined;

// SOLUTION:
// function removeProperty(obj, key) {
//     delete obj[key];
//     return obj
//   };

// ==================================================================>

// 89) getLengthOfThreeWords

// Write a function called "getLengthOfThreeWords".

// Given 3 words, "getLengthOfThreeWords" returns the sum of their lengths.

// var output = getLengthOfThreeWords('some', 'other', 'words');
// console.log(output); // --> 14

// SOLUTION:
// function getLengthOfThreeWords(a, b, c){
//     const len =  a.length + b.length + c.length;
//     return len
// };

// =============================================================================>

// 90) addFullNameProperty

// Write a function called "addFullNameProperty".

// Given an object that has a "firstName" property and a "lastName" property, "addFullNameProperty" returns a "fullName" property whose value is a string with the first name and last name separated by a space.

// var person = {
//   firstName: 'Jade',
//   lastName: 'Smith'
// };
// addFullNameProperty(person);
// console.log(person.fullName); // --> 'Jade Smith';

// SOLUTION:
// function addFullNameProperty(obj){
//     obj.fullName = `${obj.firstName} ${obj.lastName}`;
//     return obj;
//     };
