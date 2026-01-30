/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
    nums.sort((a, b) => a - b)
    let max = 0
    while (nums.length) {
        if (nums[0] + nums[nums.length - 1] > max) max = nums[0] + nums[nums.length - 1]
        nums.shift()
        nums.pop()
    }
    return max
};