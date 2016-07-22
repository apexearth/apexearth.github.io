require('should')
var binarySearch = require('./binarySearch.js')

describe("binarySearch.js", function () {
    it("returns the correct responses", function () {
        console.time("binarySearch.js -> returns the correct responses")
        var array   = [1, 2, 3, 4, 5, 7, 8, 9, 10]
        var missing = [6, -10, 0]

        array.forEach((key) => {
            console.log("Testing: " + key)
            binarySearch(array, key).should.equal(true)
        })

        missing.forEach((key) => {
            console.log("Testing: " + key)
            binarySearch(array, key).should.equal(false)
        })
        console.timeEnd("binarySearch.js -> returns the correct responses")
    })
})
