const {expect}     = require('chai')
const rx           = require('rxjs')
const {Observable} = rx

describe("rxjs", function () {
    it("Observable.create basic", function (done) {
        let result = []

        Observable.create(observer => {
            observer.next(1)
            observer.next(3)
            setImmediate(() => observer.next(2))
        }).subscribe(value => result.push(value))

        expect(result).to.deep.equal([1, 3])

        setImmediate(() => {
            expect(result).to.deep.equal([1, 3, 2])
            done()
        })
    })
})