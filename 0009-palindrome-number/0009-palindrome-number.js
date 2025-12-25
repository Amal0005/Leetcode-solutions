/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

    b = x.toString().split("").reverse().join("")
    if (x == b) {
        return true
    } else {
        return false
    }
}
