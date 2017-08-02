module.exports = {
    lomuto: quickSort.bind(null, lomutoPartition, 1),
    hoare : quickSort.bind(null, hoarePartition, 0),
}

function quickSort(partition, topSortOffset, arr, low, high) {
    low  = low === undefined ? 0 : low
    high = high === undefined ? arr.length - 1 : high
    if (low < high) {
        const p = partition(arr, low, high)
        arr     = quickSort(partition, topSortOffset, arr, low, p - topSortOffset)
        arr     = quickSort(partition, topSortOffset, arr, p + 1, high)
    }
    return arr
}

function lomutoPartition(arr, low, high) {
    const pivot = arr[high]
    let i       = low;
    for (let k = low; k < high; k++) {
        if (arr[k] <= pivot) {
            swap(arr, i, k)
            i++
        }
    }
    swap(arr, i, high)
    return i
}

function hoarePartition(arr, low, high) {
    const pivot = arr[low]
    let i       = low - 1
    let j       = high + 1
    while (true) {
        while (arr[++i] < pivot) {
        }
        while (arr[--j] > pivot) {
        }
        if (i >= j)
            return j
        swap(arr, i, j)
    }
}

function swap(arr, i, j) {
    const temp = arr[i]
    arr[i]     = arr[j]
    arr[j]     = temp
}