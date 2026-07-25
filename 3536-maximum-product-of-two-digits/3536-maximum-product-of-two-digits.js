/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function (n) {
    a = n.toString().split("")
    b = a.sort((a, b) => b - a)
    return parseInt(b[0]) * parseInt(b[1])
};