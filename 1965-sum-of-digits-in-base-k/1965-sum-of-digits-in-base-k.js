/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
    let num = n.toString(k).split("").reduce((acc, curr) => acc + parseInt(curr), 0)
    return num
};