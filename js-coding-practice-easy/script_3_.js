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
//   printIntaAndSum0To255();

// =================================================>


// 26) Print-Odds-1-255-notest

// Using FOR loop and modulus operator, print all odd integers from 1 to 255.

// output -> 1, 3, 5...

// SOLUTION:
// function printOdds1To255() {
//     // your code here
//     for( let i = 0; i<=255; i++){
//     if( i%2 ===1)
//     console.log(i)
//     }
  
    
//     }

// ========================================================>

// Threes-and-Fives

// Create threesFives() that finds values from 100 and 400 (including 400) that are divisible by either 3 or 5, but not both 3 and 5. Get the sum of those values. Display the final sum in the console.

// `threesFives()`

// SOLUTION:


//   function threesFives(){
//     for ( let i = 100; i <=400; i++){
//       if(i%3 ===0 || i%5===0) {
//         console.log(i)
//       }
//     }
//   }

// =====================================================>

// 28) modulo

// Write a function called "modulo".

// Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

// Extra:

// Can you do without using the actual built-in modulo (aka "remainder") operator (%) in your implementation.
// var output = modulo(25, 4);
// console.log(output); // --> 1

// SOLUTION:
// function modulo(num1, num2) {
//     return num1 % num2 
    
//   }
  
//   modulo(25,4);

// =========================================================>

// 29)  multiply

// Write a function called "multiply".

// Given 2 numbers, "multiply" returns their product.

// Notes:

// It should not use the multiply operator (*).\
// var output = multiply(4, 7);
// console.log(output); // --> 28

// SOLUTION:
// function multiply(a, b) {
//     return a / (1 / b);
//   }
  
//   console.log(multiply(4, 7));

// =====================================================>

// 30) isEven

// Write a function called "isEven".

// Given a number, "isEven" returns whether it is even.

// var output = isEven(11);
// console.log(output); // --> false

// SOLUTION:
// function isEven(num) {
//     if (num % 2 ===0){
//       return true
//     } else{
//       return false
//     }
//   }

// ===================================================>