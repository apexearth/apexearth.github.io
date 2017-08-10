const {expect}     = require('chai')
const rx           = require('rxjs')
const {Observable} = rx

describe('rxjs', function () {
    it('Observable.create.subscribe', function (done) {
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

    it('Observable.from.takeWhile', function () {
        let result = []

        Observable.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
                  .takeWhile(value => value < 5)
                  .subscribe(value => result.push(value))

        expect(result).to.deep.equal([0, 1, 2, 3, 4])
    })

    it('Observable.from.takeUntil', function (done) {
        let result = []

        let source = Observable.interval(10)
        let five   = source.filter(value => value > 4)

        source.takeUntil(five)
              .subscribe(value => result.push(value))

        five.subscribe(value => {
            expect(result).to.deep.equal([0, 1, 2, 3, 4])
            done()
        })
    })
})