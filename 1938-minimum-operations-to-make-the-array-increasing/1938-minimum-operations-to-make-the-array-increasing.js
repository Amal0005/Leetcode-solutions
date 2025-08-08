/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    count = 0
    for (let i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] >= nums[j]) {
                nums[j] = nums[j] + 1
                count++
                j--
            } else {
                i++
            }
        }
    }
    return count
};