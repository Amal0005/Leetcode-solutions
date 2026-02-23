/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
    let result = new Set()
    for (let i = 0; i <= s.length - k; i++) {
        result.add(s.slice(i, i + k))
    }
    return result.size == 2 ** k
};