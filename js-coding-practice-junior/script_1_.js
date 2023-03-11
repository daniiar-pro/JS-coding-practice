// 1) isBiggerThan5

// Create a function which returns true if all elements of a given array are bigger then 5

// Note: Please use loop and higher order functions

// SOLUTION:
// function isBiggerThan5(arr){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] > 5){
//             return true
//         } else {
//           return  false
//         }
//     }
// }

// function isBiggerThan5(arr){
//     return arr.every(ar => ar > 5)
// };

// =======================================================>

// 2) isLessThan

// Create a function which returns true if any element of a given array is less then a given number

// `isLessThan([1,2,3,4],2) // true
// isLessThan([10,20,60],10) // false`
// Note: Please use loop and higher order functions (some);

// SOLUTION:
// function isLessThan(arr, num){
//     return arr.some(ar => ar < num)
// };

// ====================================================================>

// 3) lastIndexOf

// Create a function which returns last index of an item from a given array.

// Notes:

// Please use lastIndexOf or loop
// `lastIndexOf(["Apple", "Orange", "Apple", "Mango"], "Apple") // 2
// lastIndexOf([1,1,2,3,1,3], 1) //` ;

// SOLUTION:
// function lastIndexOf(arr, index){
//     return arr.lastIndexOf(index)
// };

// ========================================================================>

// 4) allIndexOf

// Create a function which returns all indexes of an item from a given array.

// Notes:

// Please use loop

// `allIndexOf(["Apple", "Orange", "Apple", "Mango"], "Apple") // [0,2]
// allIndexOf([1,1,2,3,1,3], 1) // [0,1,4]`

// SOLUTION:
// function allIndexOf(arr, index){
//     let result = [];

//    for(let i = 0; i< arr.length; i++){
//        if(arr[i] === index){
//            result.push(i)
//        }
//    }
//    return result;
// };

// ==============================================================>

//5) addPostfix

// Create a function which adds a postfix to a given array items.

// Notes:

// Please use map or loop
// `addPostfix(["Apple", "Orange", "Apple", "Mango"], "+")` 
// `// ["Apple+", "Orange+", "Apple+", "Mango+"]`

// SOLUTION:

// function addPostfix(arr){
//     return arr.map(ar => `${ar}+`)
// }

// function addPostfix(arr, str){
//     for(let i = 0; i <arr.length; i++){
//         arr[i] += str;

//     }
//     return arr
// }

// ==============================================================>

// 6) addPostfixMiddle

// Create a function which adds postfix between array items and convert to a string.

// `addPostfixMiddle(["Apple", "Orange", "Kiwi"], "and")` 
// `// "Apple and Orange and Kiwi"`

// SOLUTION:
// function addPostfixMiddle(arr, postfix) {
//     return arr.join( ` ${postfix} ` )  
// }

// =============================================================>

// 7) countItem

// Create a function which finds how many item inside a given array.

// Note: You can use loop

// `countItem([1,2,4,5,8,5,1,5], 5) // 3`;

// SOLUTION:
// function countItem(arr, num) {
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === num){
//              count++    
//         }
//     }
//     return count;
//   }

// ===================================================>

// 8)  sumAll

// Create a function which finds sum of all elements from a given array

// Note: Please use reduce, loop

// `sumAll([1,2,3,4]) // 10`

// SOLUTION:
// function sumAll(arr){
//     return arr.reduce((acc, cur) => acc + cur, 0)
// };


// =======================================================================>

// 9) sumAllNums

// Create a function which returns sum of all numbers from a given array. [1,{}, null,2] => 3

// `sumAllNums([1,{}, null,2]) // 3`
// `sumAllNums(["1",NaN, null,2]) // 2`

// SOLUTION:
// function sumAllNums(arr){
//     let result = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'number' && !isNaN(arr[i])){
//             result += arr[i]
//         }
//     }
//         return result;
// }

// ===============================================>

// 10) filterChar

// Create a function to filter all chars which are not equal to a given char from an arrays. ['a','b','A','c'], 'a' => ['b','c']

// NOTE: use reduce, filter, loop

// `filterChar(['a','b','A','c'], 'a') // ['b','c']`


// SOLUTION:
// function filterChar(arr, char) {
//   let res = []
//   for(let i = 0; i < arr.length; i++){
//       if(arr[i] !== char){
//       if(typeof(arr[i]) === 'string'){
//               arr[i] = arr[i].toString().toLowerCase();
// if(arr[i] !== char){
//           res.push(arr[i])
// }
//       }
          

//       }
//   }
//   return res
// }