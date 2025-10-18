/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
    let val = n.toString(k)
    let num = val.split("").reduce((acc, curr) => acc + parseInt(curr), 0)
    return num
};