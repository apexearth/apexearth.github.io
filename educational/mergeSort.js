module.exports = mergeSort

function mergeSort(arr) {
    if (arr.length < 2) return arr
    var middle = Math.floor(arr.length / 2)
    return merge(
        mergeSort(arr.slice(0, middle)),
        mergeSort(arr.slice(middle))
    )
}

function merge(left, right) {
    var result = []
    var il     = 0
    var ir     = 0

    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++])
        } else {
            result.push(right[ir++])
        }
    }

    if(left.length !== il)
        return result.concat(left.slice(il))

    if(right.length !== ir)
        return result.concat(right.slice(ir))

    return result
}