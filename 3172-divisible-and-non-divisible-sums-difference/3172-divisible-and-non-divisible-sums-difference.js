/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
    let a = 0
    let b = 0
    for (let i = 1; i <= n; i++) {
        if (i % m == 0) {
            a = a + i
        } else {
            b = b + i
        }
    }
    return b - a
};