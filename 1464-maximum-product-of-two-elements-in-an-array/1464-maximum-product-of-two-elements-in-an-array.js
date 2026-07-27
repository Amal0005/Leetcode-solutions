/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let max = []
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            max.push((nums[i] - 1) * (nums[j] - 1))
        }
    }
    return Math.max(...max)
};