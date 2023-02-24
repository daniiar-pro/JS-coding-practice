# **JS-coding-practice**

`1) removePrefix

Clear all '$' signs from numbers in a given array. => [2,3,4,5,15]`

`removePrefix(['$2', '$3', '$4', '$5','$15']) // [2,3,4,5,15`

`1) Solution :
  function removePrefix(arr){
    let result = [];
    
    for (let i = 0; i < arr.length; i++){
    result.push(arr[i].slice(1));
    }
    
    return result;
  }`


`2) sayHello

Create a function sayHello(). Within it, console.log string "Hello World!"`

#SOLUTION:

 `function sayHello(){
    console.log('Hello World!');
 }
 sayHello();`

======================================================================>



`3) getFullName

Write a function called "getFullName".

Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space.

var output = getFullName('Joe', 'Smith');
console.log(output); // --> 'Joe Smith'`


SOLUTION: 

`function getFullName (firstName, lastName){
    return firstName + " " + lastName;
}`

===================================================================================>

`4)  getLengthOfWord

Write a function called "getLengthOfWord".

Given a word, "getLengthOfWord" returns the length of the given word.

var output = getLengthOfWord('some');
console.log(output); // --> 4
`
SOLUTION:

`function getLengthOfWord(word){
    return word.length
}`

=====================================================================>

5)  isGreaterThanTen

Write a function called "isGreaterThanTen".

Given a number, "isGreaterThanTen" returns whether it is greater than 10.

`var output = isGreaterThanTen(11);
console.log(output); // --> true`

SOLUTION:

`function isGreaterThanTen(num) {
    if (num > 10) {
        return true
    } else {
        return false
    }
}

isGreaterThanThen(9)`

====================================================================>

`6)  getLengthOfTwoWords

Write a function called "getLengthOfTwoWords".

Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.

var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9`

SOLUTION:
`function getLengthOfTwoWords(word1, word2) {
    return word1.length + word2.length;
    
    }
    getLengthOfTwoWords( "some", "word")`
    

=====================================================================================>

7)  isLessThan30

Write a function called "isLessThan30".

Given a number, "isLessThan30" returns whether the given number is less than 30.

`var output = isLessThan30(9);
console.log(output); // --> true`

SOLUTION:
`function isLessThan30(num) {
    if (num < 30){
        return true
    } else {
        return false
    }

}

isLessThan30(23);`

==================================================================================>

`8)  equalsTen

Write a function called "equalsTen".

Given a number, "equalsTen" returns whether or not the given number is 10.

var output = equalsTen(9);
console.log(output); // --> false`

SOLUTION:
`function equalsTen(num) {
    if(num == 10){
        return true
       } else {
           return false
       }
}
 equalsTen(5);`

=====================================================================================>

`9)  isLessThan

Write a function called "isLessThan".

Given 2 numbers, "isLessThan" returns whether num2 is less than num1.

var output = isLessThan(9, 4);
console.log(output); // --> true`

SOLUTION:
`function isLessThan(num1, num2) {
    if ( num1 > num2) {
        return true;
    } else{
        return false;
    }
  }
  isLessThan (3,4);`

==========================================================================>

10)  isGreaterThan

Write a function called "isGreaterThan".

Given 2 numbers, "isGreaterThan" returns whether num2 is greater than num1.

var output = isGreaterThan(11, 10);
console.log(output); // --> false

SOLUTION:
`function isGreaterThan(num1, num2){
    if(num2 > num1){
        return true
    } else {
        return false
    }
}

isGreaterThan(2,3)`
