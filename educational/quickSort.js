module.exports = quickSort

function quickSort(arr, low, high) {
    arr  = arr.slice() // copy
    low  = low === undefined ? 0 : low
    high = high === undefined ? arr.length - 1 : high
    if (low < high) {
        var p = lomutoPartition(arr, low, high)
        arr   = quickSort(arr, low, p - 1)
        arr   = quickSort(arr, p + 1, high)
    }
    return arr
}

function lomutoPartition(arr, low, high) {
    var pivot = arr[high]
    var i     = low;
    var temp;
    for (var k = low; k < high; k++) {
        if (arr[k] <= pivot) {
            temp   = arr[i]
            arr[i] = arr[k]
            arr[k] = temp
            i++
        }
    }
    temp      = arr[i]
    arr[i]    = arr[high]
    arr[high] = temp
    return i
}
