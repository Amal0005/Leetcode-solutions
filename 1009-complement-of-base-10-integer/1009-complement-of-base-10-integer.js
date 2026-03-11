/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
    let a = n.toString(2).split("").map((item) => item == "1" ? "0" : "1").join("")
    return parseInt(a, 2)
};