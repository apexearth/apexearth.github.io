const {expect}     = require('chai')
const rx           = require('rxjs')
const {Observable} = rx

describe('rxjs', function () {

    let result
    let addToResult = value => result.push(value)
    beforeEach(() => result = [])

    it('Observable.create.subscribe', function (done) {
        Observable.create(observer => {
            observer.next(1)
            observer.next(3)
            setImmediate(() => observer.next(2))
        })
                  .subscribe(addToResult)

        expect(result).to.deep.equal([1, 3])

        setImmediate(() => {
            expect(result).to.deep.equal([1, 3, 2])
            done()
        })
    })

    it('Observable.from.takeWhile', function () {
        Observable.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
                  .takeWhile(value => value < 5)
                  .subscribe(addToResult)

        expect(result).to.deep.equal([0, 1, 2, 3, 4])
    })

    it('Observable.from.takeUntil', function (done) {
        let source = Observable.interval(10)
        let five   = source.filter(value => value > 4)

        source.takeUntil(five)
              .subscribe(addToResult)

        five.subscribe(value => {
            expect(result).to.deep.equal([0, 1, 2, 3, 4])
            done()
        })
    })

    it('Observable.from.filter', function () {
        let even = value => value % 2 === 0

        Observable.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
                  .filter(even)
                  .subscribe(addToResult)
        expect(result).to.deep.equal([0, 2, 4, 6, 8])
    })

    it('Observable.from.filter.last', function () {
        let even = value => value % 2 === 0

        Observable.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
                  .filter(even)
                  .last()
                  .subscribe(addToResult)
        expect(result).to.deep.equal([8])
    })

    it('Observable.from.filter.last.delay', function (done) {
        let even = value => value % 2 === 0

        Observable.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
                  .filter(even)
                  .last()
                  .delay(0)
                  .subscribe(
                      addToResult,
                      undefined,
                      () => {
                          expect(result).to.deep.equal([8])
                          done()
                      }
                  )

        expect(result).to.deep.equal([])
        setImmediate(() => {
            expect(result).to.deep.equal([])
        })
    })

})