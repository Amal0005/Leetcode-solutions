/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    let newArr = arr.filter((value, index, arr) => arr.indexOf(value) === arr.lastIndexOf(value))
    if (newArr.length < k) {
        return ""
    } else {

        return newArr[k - 1]
    }
};