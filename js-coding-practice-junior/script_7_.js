// 61) fromListToObject

// Write a function called "fromListToObject".

// Convert array to an object as it's shown here.

// var arr = [[1,2],['a','b']]
// fromListToObject(arr)
// // {1:2, a:'b'}

// SOLUTION:
// function fromListToObject(arr) {
//   let obj = {};

//   for(let i = 0; i < arr.length; i++){
//       obj[arr[i][0]]= arr[i][1];
//   }
//   return obj;
// };

// ======================================================>

// 62) listAllValues

// Write a function called "listAllValues".

// List all values

// var obj = {1:2, a:'b'}
// listAllValues(obj) // [2,'b']

// SOLUTION:
// function listAllValues(obj) {
//   return Object.values(obj);
//   };

// ================================================>

// 63) transform

// Write a function called "transform".

// Transform employee data to an array.

// var obj = {name:"seytech", location:'online'}
// transform(obj)
// ["name", "seytech", "location", "online"]
 
// SOLUTION:
// function transform(obj) {
//  let keys = Object.entries(obj);
 
//  let oneArr = [];

//     for (let i = 0; i < keys.length; i++){
//         oneArr.push(keys[i][0], keys[i][1]);
//     }

// return oneArr;
// }

// function transform(obj){
//     let res = [];

//     for (let key in obj){
//         res.push(key);
//         res.push(obj[key])
//     }
//     return res;
// };

// ==============================================================>

// 64) greetCustomer

// Great customer and return a text.

// var obj = {name: "Seytech", lastName: "Co"}
// greetCustomer(obj) // "Welcome Seytech Co"

// SOLUTION:
// function greetCustomer(obj) {
//   return `Welcome ${obj.name} ${obj.lastName}`;
// };

// =====================================================>

// 65) convertStr1

// Convert url to an object

// var url = "www.learn.seytech.co/courses/array/prepation"
// greetCustomer(obj)
// {0: 'courses', 1:'array', 2:'preparation'}

// var url = "www.learn.seytech.co/courses/array/preparation";

// SOLUTION:
// function convertStr1(url) {
//   var path = url.split('/').slice(1);
//   var obj = {};
//   for (var i = 0; i < path.length; i++) {
//     obj[i] = path[i];
//   }
//   return obj;
// }

// var obj = convertStr1(url);
// console.log(obj); // {0: 'courses', 1:'array', 2:'preparation'}

// function convertStr1(url){

//     let obj = {};
//     let arr = url.split('/');
//     arr.shift();
//     for(let i = 0; i < arr.length; i++){
//         obj[i] = arr[i];
//     }
//     return obj;
// };

// ========================================================>

// 66) getParams

// Convert url to an object

// var url = "http//learn.seytech.co/?age=10&loc=seattle&type=bootcamp"
// getParams(url)
// // {age: 10, loc:'seattle', type:'bootcamp'}

// SOLUTION:
// function getParams(url) {
//   // your code here
// };

// ========================================================>

// 67) getDomain

// Convert url to an object

// var url = "https//learn.seytech.co"
// getDomain(url)
// // {type: "https", domain:'seytech', subDomain:'learn'}

// SOLUTION:
// function getDomain(url) {
//   // your code here
// };
