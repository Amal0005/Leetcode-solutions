/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function (n, batteries) {
    let left = 0
    let right = Math.floor(batteries.reduce((acc, curr) => acc + curr, 0) / n)
    function isRunning(value) {
        let total = 0
        for (let item of batteries) {
            let min = Math.min(value, item)
            total += min
        }
        return total >= value * n
    }
    while (left < right) {
        let mid = Math.floor((left + right + 1) / 2)
        if (isRunning(mid)) {
            left = mid
        } else {
            right = mid - 1
        }
    }
    return left
};