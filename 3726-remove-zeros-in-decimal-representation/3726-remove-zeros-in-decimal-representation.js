/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function (n) {
    return parseInt(n.toString().split("").filter((item) => item != "0").join(""))
};