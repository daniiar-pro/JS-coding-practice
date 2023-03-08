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