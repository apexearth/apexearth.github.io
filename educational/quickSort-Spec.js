require('should')
const qs = require('./quickSort.js')

describe("quickSort.js", function () {
    it("lomuto sorts!", test(qs.lomuto))
    it("hoare sorts!", test(qs.hoare))

    function test(sort) {
        return function () {
            console.time(this.test.fullTitle())
            const count = 10000
            const array = []
            for (let i = 0; i < count; i++) array[i] = Math.random() * (i % 3)
            sort(array)

            array.length.should.equal(count)
            for (let i = 0; i < count - 1; i++) array[i].should.be.lessThanOrEqual(array[i + 1])
            console.timeEnd(this.test.fullTitle())
        }
    }
})
