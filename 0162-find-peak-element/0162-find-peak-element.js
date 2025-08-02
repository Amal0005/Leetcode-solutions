/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let max = Math.max(...nums)
    for (i = 0; i < nums.length; i++) {
        if (max == nums[i]) {
            return i
        }
    }
};