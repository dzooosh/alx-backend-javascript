const sinon = require("sinon");
const {describe, it} = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const Utils = require("./utils.js");
const sendPaymentRequestToApi = require('./3-payment.js');

describe("sendPaymentRequestToApi", function() {
    it("check that Utils.calculateNumber was called once", function() {
        const spy = sinon.spy(Utils, "calculateNumber");

        sendPaymentRequestToApi(100, 20);

        assert(spy.calledOnce);
        spy.restore();
    });
});
