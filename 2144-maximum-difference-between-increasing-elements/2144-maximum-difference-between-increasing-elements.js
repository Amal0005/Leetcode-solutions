/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    let large = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[j] - nums[i]) > large) {
                large = nums[j] - nums[i]
            }
        }
    }
    return large > 0 ? large : -1
};