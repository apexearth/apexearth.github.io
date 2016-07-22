module.exports = binarySearch

function binarySearch(array, key) {
    var low  = 0
    var high = array.length - 1

    while (high >= low) {
        var middle = Math.floor((low + high) / 2)
        console.log(middle + " = " + key + " ?")
        var value = array[middle]
        if (value === key) return true
        if (value < key) low = middle + 1
        if (value > key) high = middle - 1
    }
    return false
}