/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    while (k !== 0) {
        nums.sort((a, b) => a - b)
        nums[0] = nums[0] * -1
        k--
    }
    return nums.reduce((acc, curr) => acc += curr, 0)
};