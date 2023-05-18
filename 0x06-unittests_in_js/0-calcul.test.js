const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', function() {
  it('should return the sum of the variables', function() {
    const result = calculateNumber(1,3);
    assert.equal(result, 4);
    });
});

describe('calculateNumber', function() {
    it('should return the sum of the variables', function() {
      const result = calculateNumber(1, 3.7);
      assert.equal(result, 5);
      });
  });

  describe('calculateNumber', function() {
    it('should return the 5', function() {
      const result = calculateNumber(1.2, 3.7);
      assert.equal(result, 5);
      });
  });

  describe('calculateNumber', function() {
    it('should return 6', function() {
      const result = calculateNumber(1.5, 3.7);
      assert.equal(result, 6);
      });
  });