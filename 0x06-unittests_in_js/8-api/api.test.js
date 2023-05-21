const expect = require("chai").expect;
const request = require("request");

describe("Index Page", function() {
    const options = {
        url: "http://localhost:7865/",
        method: "GET",
    }
    it("should return Welcome to the payment system", function(done) {
        request(options, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
    it("should check for correct result", function(done) {
        request(options, (err, res, body) => {
            expect(body).to.contain('Welcome to the payment system');
            done();
        });
    });
    it("should check the content length", function(done) {
        request(options, (err, res, body) => {
            expect(res.headers['content-length']).to.equal('29');
            done();
        });
    });
    it("should check the content-type", function(done) {
        request(options, (err, res, body) => {
            expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
            done();
        });
    });
});