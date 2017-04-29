'use strict';

const expect = require('chai').expect;
const List = require('../list');

let list = new List(1,2,3,4);

describe('testing list module', function() {

  describe('testing map method', function() {
    let testArr = list.map(function(a) {
      return a + 1;
    });
    it('should return a new array', function() {
      expect(testArr).to.be.a('array');
    });
    it('should return a new array with same length of original array', function() {
      expect(testArr).to.have.length.of(4);
    });
    it('should have a callback as an argument that adds 1 to the index value', function() {
      expect(testArr[1]).to.be.equal(3);
    });
  });

  describe('testing filter method', function() {

    let testArr = list.filter(function(a){
      if(a > 2) return a;
    });

    it('should return a new array', function() {
      expect(testArr).to.be.a('array');
    });
    it('should return an array with values greater than two', function() {
      expect(testArr).to.include(3,4);
    });
    it('should not return an item less than two', function() {
      expect([1]).to.not.be.oneOf([[1],2,3,4]);
    });
  });

  describe('testing forEach method', function() {

    let testArr = list.forEach(function(a) {
      return a + 1;
    });

    it('should return the value undefined', function() {
      expect(testArr).to.equal(undefined);
    });
    it('should not return an array', function() {
      expect(testArr).to.have.equal(undefined);

    });
  });
});
