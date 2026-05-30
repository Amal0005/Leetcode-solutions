/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let arr = []
    for (const i of s) {
        (arr[arr.length - 1] == i) ? arr.pop() : arr.push(i)
    }
    return arr.join("")
};