const assert = require('assert');
const { it,describe } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('Checking for valid SUM', () => {
    const res = calculateNumber('SUM', 1.4, 4.5);
    assert.strictEqual(res, 6);
    });
  it('Checking for SUBTRACT', () => {
    const res = calculateNumber('SUBTRACT', 1.4, 4.5);
    assert.strictEqual(res, -4);
  });
  it('Checking for valid DIVIDE', () => {
    const res = calculateNumber('DIVIDE', 1.4, 4.5);
    assert.strictEqual(res, 0.2);
  });
  it('Checking for 0 DENOMINATOR WHILE DIVIDING', () => {
    const res = calculateNumber('DIVIDE', 1.4, 0);
    assert.strictEqual(res, 'Error');
  });
  it('Checking for valid type', () => {
    const res = calculateNumber('SM', 1.4, 4.5);
    assert.strictEqual(res, "This is not a valid type");
  });
});