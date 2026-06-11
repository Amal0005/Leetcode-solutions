/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    if (num == 0) return num
    return num > 0 && num % 9 == 0 ? 9 : num % 9
};