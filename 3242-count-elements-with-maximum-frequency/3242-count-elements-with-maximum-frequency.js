/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    let freq = nums.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr]++
        } else {
            acc[curr] = 1
        }
        return acc
    }, {})
    let final = Object.values(freq).sort((a, b) => b - a)
    let sum = final[0]
    for (let i = 1; i < final.length; i++) {
        if (final[0] == final[i]) {
            sum += final[i]
        }
    }
    return sum
};