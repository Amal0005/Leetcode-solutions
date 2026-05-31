/**
 * @param {string} s
 * @return {boolean}
 */
var isAdjacentDiffAtMostTwo = function (s) {
    let count = 0
    for (let i = 1; i < s.length; i++) {
        if (Math.abs(s[i] - s[i - 1]) <= 2) count++
    }
    return count == s.length - 1
};