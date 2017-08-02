class CustomArray extends Array {
    insert(index, value) {
        if (index > this.length) throw new Error('Insert index out of bounds.')
        for (let i = this.length; i > index; i--) {
            this[i] = this[i - 1]
        }
        this[index] = value
    }

    add(value) {
        this[this.length] = value
    }

    delete(index) {
        if (index > this.length) throw new Error('Delete index out of bounds.')
        for (let i = index; i < this.length - 1; i++) {
            this[i] = this[i + 1]
        }
        this.length--
    }

    indexOf(value) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === value) return i
        }
        return -1
    }
}

module.exports = CustomArray