'use strict';

const expect = require('chai').expect;
const List = require('../list');

let list = new List(1,2,3,4);

describe('testing list module', function() {
  describe('testing map method', function() {
    let testArr = list.filter(function(a) {
      return a + 1;
    });
    it('should return a new array', function() {
      expect(testArr).to.be.a('array');
    });
    it('should return a new array with same length of original array', function() {
      expect(testArr).to.be.have.length.of(4);
    });
    it('should pass a callback that adds 1 to the index value', function() {
      expect(testArr[0]).to.be.equal(2);
    });
  });
});
