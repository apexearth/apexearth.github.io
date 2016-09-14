var should = require('should')
var fibonacci = require('./fibonacci.js')

describe("fibonacci.js", function () {
    it("returns the correct responses", function () {
        should.throws(fibonacci.bind(null, 0));
        fibonacci(1).should.equal(0);
        fibonacci(2).should.equal(1);
        fibonacci(3).should.equal(1);
        fibonacci(4).should.equal(2);
        fibonacci(5).should.equal(3);
        fibonacci(6).should.equal(5);
        fibonacci(7).should.equal(8);
        fibonacci(8).should.equal(13);
    })
})
;