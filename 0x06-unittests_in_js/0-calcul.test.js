const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', function() {
  it('should return the sum of the variables', function() {
    const result = calculateNumber(1,3);
    assert.equal(result, 4);
    });
});