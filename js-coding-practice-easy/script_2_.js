// 11)  isEqualTo

// Write a function called "removeDupChars".

// Given a string, return a string that every single character is unique in the output string.

// removeDupChars("sleep") // "slep"
// removeDupChars("characters") // "chartes" 

// SOLUTION:
// function removeDupChars(string) {
//     let strs = string.split('');
//    let sor = '';
//    let soer = strs.filter(str => {
//      str !== str ? sor.push(str) ? sor
//    })
//    }

// ==========================================================>

// 12)  setting-and-swapping

// Create two variables: num and name. Set num's value to 50. Set name's value to 'Javascript'. Now swap values: set num to 'Javascript' and name to 50.

    // SOLUTION:
    // function isEqualTo(num1, num2) {
    //     return num1 === num2
    //    }
    //    isEqualTo(2,2);

// =====================================================================>

// 13)  isOldEnoughToDrink

// Write a function called "isOldEnoughToDrink".

// Given an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States.

// Notes:* The legal drinking age in the United States is 21.

// var output = isOldEnoughToDrink(22);
// console.log(output); // --> true

// SOLUTION:
// function isOldEnoughToDrink(age) {
//     if( age >= 21) {
//         return true; "you are allowed"
//     } else{
//         return false; "you are not"
//     }
//   }
  
//   isOldEnoughToDrink(97);

// ========================================================>

// 14) isOldEnoughToDrive

// Write a function called "isOldEnoughToDrive".

// Given a number, in this case an age, "isOldEnoughToDrive" returns whether a person of this given age is old enough to legally drive in the United States.

// Notes:* The legal driving age in the United States is 16.

// var output = isOldEnoughToDrive(22);
// console.log(output); // --> true

// SOLUTION:
// function isOldEnoughToDrive(age){
//     if(age >= 16){
//         return true
//     } else {
//         return false
//     }
// }
// isOldEnoughToDrive(13);

// ===================================================>

// 15) isOldEnoughToVote

// Write a function called "isOldEnoughToVote".

// Given a number, in this case an age, 'isOldEnoughToVote' returns whether a person of this given age is old enough to legally vote in the United States.

// Notes:* The legal voting age in the United States is 18.

// var output = isOldEnoughToVote(22);
// console.log(output); // --> true

// SOLUTION:
// function isOldEnoughToVote(age) {
//     return age >= 18;
//   } 
  
//   console.log(isOldEnoughToVote(17)); // false
//   console.log(isOldEnoughToVote(18)); // true

