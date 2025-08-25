/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let final = []
    for (let i = 0; i < arr.length; i++) {
        final.push(fn(arr[i], i))
    }
    return final
};