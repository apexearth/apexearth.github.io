const {expect}    = require('chai')
const CustomArray = require('./CustomArray')

describe('CustomArray', function () {
    let array;

    beforeEach(() => {
        array = new CustomArray()
        expect(array.length).to.equal(0)
    })

    it('.insert()', function () {

        expect(() => array.insert(1, 1)).to.throw()
        array.insert(0, 0)
        array.insert(0, 1)
        array.insert(2, 2)
        array.insert(0, 3)
        expect(array[0]).to.equal(3)
        expect(array[1]).to.equal(1)
        expect(array[2]).to.equal(0)
        expect(array[3]).to.equal(2)
        expect(array.length).to.equal(4)
    })

    it('.add()', () => {
        array.add(1)
        array.add(2)
        array.add(3)
        expect(array[0]).to.equal(1)
        expect(array[1]).to.equal(2)
        expect(array[2]).to.equal(3)
        expect(array.length).to.equal(3)
    })

    it('.delete()', () => {
        array.add(1)
        array.add(2)
        array.add(3)
        array.delete(1)
        expect(array[0]).to.equal(1)
        expect(array[1]).to.equal(3)
        expect(array.length).to.equal(2)
    })

    it('.indexOf()', () => {
        array.add(1)
        array.add(2)
        array.add(3)
        array.add(4)
        array.add(3)
        expect(array.indexOf(3)).to.equal(2)
        expect(array.indexOf(4)).to.equal(3)
    })
})
