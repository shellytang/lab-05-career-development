'use strict';

const List = module.exports = function() {
  for(let key in arguments) {
    this[key] = arguments[key];
  }
  this.length = arguments.length;
};

// O(n)
List.prototype.copy = function() {
  let result = new List();
  for(let key in this) {
    result[key] = this[key];
  }
  return result;
};

// O(n)
List.prototype.push = function(value) {
  let result = this.copy();
  result[result.length++] = value;
  return result;
};

// O(n)
List.prototype.pop = function() {
  let result = this.copy();
  delete result[--result.length];
  return {
    value: this[this.length - 1],
    list: result,
  };
};

//O(n)
List.prototype.forEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);  //for each iterates and runs a function but does not return
  }
};

//O(n)
List.prototype.map = function(callback) {
  let testMapArr = [];
  for(let i = 0; i < this.length; i++) {
    testMapArr.push(callback(this[i], i, this));
  }
  return testMapArr;
};

// O(n)
List.prototype.filter = function(callback) {
  let testFilterArr = [];
  for(let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      testFilterArr.push(this[i]);
    }
  }
  return testFilterArr;
};

// O(n)
List.prototype.reduce = function(callback) {
  let result = 0;
  for (let i = 0; i < this.length; i++) {
    result += this[i];
    callback(this[i], i, this);
  }
  return result;
};

// # Whiteboard Exercise (Groups of 4)
// * Implement `forEach()` as a method of your List Data Structure
// * Implement `filter()` as a method of your List Data Structure
