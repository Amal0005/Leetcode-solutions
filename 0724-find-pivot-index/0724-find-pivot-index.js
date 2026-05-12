/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let total = 0
    for (let j = 0; j < nums.length; j++) total += nums[j]
    let left = 0
    for (let i = 0; i < nums.length; i++) {
        if (left === (total - nums[i] - left)) return i
        left += nums[i]
    }
    return -1
};