/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function (nums, k) {
    let sum = 0
    let freq = nums.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr] += 1
        } else {
            acc[curr] = 1
        }
        return acc
    }, {})
    for (i in freq) {
        if (freq[i] % k == 0) {
            sum += (freq[i] * i)
        }
    }
    return sum
};