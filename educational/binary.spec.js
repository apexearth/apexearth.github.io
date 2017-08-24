const {expect} = require('chai')

describe("binary", function () {
    it("n to bit string", function () {
        let n = 13
        let s = (n % 2 === 1 ? "1" : "0")
        while(n > 1) {
            n = Math.floor(n/2)
            s = (n % 2 === 1 ? "1" : "0") + s
        }
        expect(s).to.equal("1101")
    })
})