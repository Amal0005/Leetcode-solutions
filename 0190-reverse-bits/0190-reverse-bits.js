/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function (n) {
    let value = n.toString(2).padStart(32, "0")
    let reversed = value.split("").reverse().join("")
    return parseInt(reversed, 2)
};