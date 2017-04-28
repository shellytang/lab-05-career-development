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
  // console.log('did we get here??');
  for(let i = 0; i < this.length; i++) {
    // console.log('what is this: ', typeof callback);
    testMapArr.push(callback(this[i], i, this));
  }
  return testMapArr;  //map is a collection of items that returns a new array
};

// O(n)
List.prototype.filter = function(callback) {
  let testFilterArr = [];
  for(let i = 0; i < this.length; i++) {
    testFilterArr.push(callback(this[i], i, this));
  }
  return testFilterArr;
};

//O^2
List.prototype.reduce = function(callback) {
  for(let i = 0; i < this.length; i ++) {
    for(let j =0; j < this.length; j++) {
      callback(this[j], this[i]); //accumlator and current value
    }
  }
  return this;
};


// # Whiteboard Exercise (Groups of 4)
// * Implement `forEach()` as a method of your List Data Structure
// * Implement `filter()` as a method of your List Data Structure
