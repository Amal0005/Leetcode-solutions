/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    let obj = new Set();
    let count = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        count++;
        if (nums[i] >= 1 && nums[i] <= k) {
            obj.add(nums[i]);
        }
        if (obj.size === k) {
            return count;
        }
    }
};