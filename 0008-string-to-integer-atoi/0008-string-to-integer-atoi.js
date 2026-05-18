/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const n = parseInt(s);
    if (isNaN(n)) return 0;
    if (n < -2147483648) return -2147483648;
    if (n > 2147483647) return 2147483647;
    return n;
};