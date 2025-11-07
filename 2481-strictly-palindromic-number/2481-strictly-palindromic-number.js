/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
    for (let i = 2; i <= n - 2; i++) {
        let base = n.toString(i)
        if (base !== (base.split("").reverse().join(""))) {
            console.log(base)
            return false
        }
    }
    return true
};