/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
    const arr = s.split("").sort().reverse()
    arr[arr.lastIndexOf("1")] = "0"
    arr[arr.length - 1] = "1"
    return arr.join('')
};