/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
    let count = 0
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = 1; k <= n; k++) {
                if ((k * k) == (i * i) + (j * j)) {
                    count++
                }
            }
        }
    }
    return count
};