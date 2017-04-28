'use strict';

const List = require('./list');

let list = new List();

// let myArr = list.push(2);

// myArr = list.push(2);
// console.log(myArr);

let myCB = function(x) {
  return x + 1;
};

let myArr = list.map(myCB(1));
console.log(myArr);
