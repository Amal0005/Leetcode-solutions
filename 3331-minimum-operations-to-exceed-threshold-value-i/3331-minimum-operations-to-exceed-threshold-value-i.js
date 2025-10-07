/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    let num = nums.sort((a, b) => a - b)
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (num[i] < k) {
            num.shift()
            count++
            i--
        }
    }
    return count
};