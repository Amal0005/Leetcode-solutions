/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
    let pivot = nums[0];
    nums.shift()
    nums.sort((a, b) => a - b)
    return pivot + nums[0] + nums[1];
};