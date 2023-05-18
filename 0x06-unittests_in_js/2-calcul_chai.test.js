const assert = require('assert');
const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('Checking for valid SUM', () => {
    const res = calculateNumber('SUM', 1.4, 4.5);
    expect(res).to.equal(6);
    });
  it('Checking for SUBTRACT', () => {
    const res = calculateNumber('SUBTRACT', 1.4, 4.5);
    expect(res).to.equal(-4);
  });
  it('Checking for valid DIVIDE', () => {
    const res = calculateNumber('DIVIDE', 1.4, 4.5);
    expect(res).to.equal(0.2);
  });
  it('Checking for 0 DENOMINATOR WHILE DIVIDING', () => {
    const res = calculateNumber('DIVIDE', 1.4, 0);
    expect(res).to.equal('Error');
  });
  it('Checking for valid type', () => {
    const res = calculateNumber('SM', 1.4, 4.5);
    expect(res).to.equal("This is not a valid type");
  });
});