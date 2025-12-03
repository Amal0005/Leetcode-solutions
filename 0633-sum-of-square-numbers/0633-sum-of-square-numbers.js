/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    let left = 0
    let right = Math.floor(Math.sqrt(c))
    while (left <= right) {
        if ((left * left) + (right * right) == c) {
            return true
        } else if ((left * left) + (right * right) > c) {
            right--
        } else {
            left++
        }
    }
    return false
};
