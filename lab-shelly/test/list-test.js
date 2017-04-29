'use strict';

const expect = require('chai').expect;
const List = require('../list');

let list = new List(1,2,3,4);

describe('testing list module', function() {
//++++ MAP+++++
  describe('testing map method', function() {
    let testMapArr = list.map(function(a) {
      return a + 1;
    });
    it('should return a new array', function() {
      expect(testMapArr).to.be.a('array');
    });
    it('should return a new array with same length of original array', function() {
      expect(testMapArr).to.have.length.of(4);
    });
    it('should have a callback as an argument that adds 1 to the index value', function() {
      expect(testMapArr[1]).to.be.equal(3);
    });
  });
//++++ FILTER+++++
  describe('testing filter method', function() {
    let testFilterArr = list.filter(function(a){
      if(a > 2) return a;
    });

    it('should return a new array', function() {
      expect(testFilterArr).to.be.a('array');
    });
    it('should return an array with values greater than two', function() {
      expect(testFilterArr).to.include(3,4);
    });
    it('should not return an item less than two', function() {
      expect([1]).to.not.be.oneOf([[1],2,3,4]);
    });
  });
//++++ forEach +++++
  describe('testing forEach method', function() {

    let testForEachArr = list.forEach(function(a) {
      return a + 1;
    });

    it('should return the value undefined', function() {
      expect(testForEachArr).to.equal(undefined);
    });
    it('should not return an array', function() {
      expect(testForEachArr).to.equal(undefined);
    });
    it('should be a function', function() {
      expect(list.forEach).to.be.a('function');
    });
  });
//++++ Reduce +++++
  describe('testing reduce method', function() {
    let list = new List(0,1,2,3,4);
    let testReduce = list.reduce(function(acc, val) {
      return acc + val;
    });

    it('should be a function', function() {
      expect(list.forEach).to.be.a('function');
    });
    it('should reduce each element in the array to a single value', function() {
      expect(testReduce).to.be.a('number');
    });
    it('should return the sum of the array items', function() {
      expect(testReduce).to.equal(10);
    });
  });

//++++ Pop +++++
  describe('test pop method', function() {
    let testPop = list.pop();

    it('should return the last item of the list', function() {
      expect(testPop.value).to.equal(4);
    });
    it('should shorten the length of the list', function() {
      expect(testPop.list.length).to.equal(3);
    });
    it('should remove the last item from the list', function() {
      expect(testPop[5]).to.not.equal(4);
    });
  });
//++++ Push +++++
  describe('test push method', function() {
    let testPush = list.push(12);

    it('should add the pushed item to the end of the array', function() {
      expect(testPush[4]).to.equal(12);
    });
    it('should increase the length of the list', function() {
      expect(testPush.length).to.equal(5);
    });
    it('should return the length of the list', function() {
      expect(testPush.length).to.equal(5);
    });
  });
//++++ Copy +++++
  describe('test copy method', function() {
    let testCopy = list.copy();

    it('should return a object', function() {
      expect(testCopy).to.be.a('object');
    });
    it('should have the same list length as the original list', function() {
      expect(testCopy.length).to.equal(4);
    });
    it('should have the same list values as original list', function() {
      expect(testCopy[0]).to.equal(1);
    });
  });
});
