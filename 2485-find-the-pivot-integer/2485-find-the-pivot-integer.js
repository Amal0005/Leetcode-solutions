/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    const a = Math.sqrt(n * (n + 1) / 2)
    return a === Math.floor(a) ? a : -1
};