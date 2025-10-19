/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let val = 1
    count = 1
    sum = 0
    for (let i = 1; i <= n; i++) {
        sum += val
        val++
        if (i % 7 == 0) {
            count++
            val = count
        }
    }
    return sum
};