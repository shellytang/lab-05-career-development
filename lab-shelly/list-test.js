'use strict';

const List = require('./list');

let list = new List();

// let myArr = list.push(2);

// myArr = list.push(2);
// console.log(myArr);
let myArr = list.push(1);
console.log('myArr: ', myArr);

// let myCB = function(a) {
//   return a + 1;
// };

let testArr = myArr.map(function(a) {
  console.log('what is a: ', a);
  return a + 1;
});
console.log('my new testArr: ', testArr);
