//  21) checkAge

// Write a function called "checkAge".

// Given a person's name and age, "checkAge" returns one of two messages:

// "Go home, {insert_name_here}!", if they are younger than 21."Welcome, {insert_name_here}!", if they are 21 or older.

// Naturally, replace "{insert_name_here}" with the given name. :)

// var output = checkAge('Adrian', 22);
// console.log(output); // --> 'Welcome, Adrian!'

// SOLUTION:
// function checkAge(name, age) {
//     if (age >= 21) {
//       return `Welcome, ${name}!`
//     } else {
//       return `Go home, ${name}!`
//     }
//     }
//     checkAge('Adrian', 22);

// =====================================================>

// 22)  Multiples-of-Six

// Write a function called "multiplesOfSix".

// Using WHILE loop, print multiples of 6 starting from 0 up to 60,000

// var output = multiplesOfSix();
// console.log(output); // --> 

// SOLUTION:
// function multiples0fSix(){
//     for (i=0; i<=60 ; i++)
//     console.log(i)
//   } multiples0fSix()
 

// =======================================================>


// 23)  add-odd-integers-notest

// Using FOR loop, Add odd integers from -300,000 to 300,000 and console.log the final sum.

// var output = addOddIntegers();
// console.log(output); 

// SOLUTION:
// for( let i = -3000 ; i<=3000; i++){
//     console.log(i)
//   }
  
//   ==========================================================>

// 24)  Countdown-by-Fours-notest

// Using WHILE loop, log multiples of 4 starting from 2016 to 0.

// SOLUTION:
// let result = '';
// let i = 0;

// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);

// console.log(result);

// ========================================================>

// 25)  printIntaAndSum0To255

// Using FOR loop, get a sum of all numbers from 0 to 255 (255 included). Return the sum. Inside the loop, also console.log the value of sum and see how the value is changing on every iteration.

// SOLUTION:
// function printIntaAndSum0To255() {
//     // your code here
//     var sum = 0;
  
//   for (var i = 0; i <= 255; i++) {
//       sum = sum + i;
//   }
//   return sum
//   console.log("Sum = " + sum);    
//   }
//   printIntaAndSum0To255()
  