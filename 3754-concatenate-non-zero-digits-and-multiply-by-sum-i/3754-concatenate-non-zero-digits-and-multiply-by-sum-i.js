/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function (n) {
    if (n == 0) return 0
    let nonZero = n.toString().split("").filter((item) => item !== "0")
    let sum = nonZero.reduce((acc, curr) => acc += parseInt(curr), 0)
    return parseInt(nonZero.join("")) * sum
};