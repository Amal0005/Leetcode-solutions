/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let count = 0
    let count2 = 0
    for (i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            count++
        } else if (nums[i] > 0) {
            count2++
        }
    }
    if (count > count2) {
        return count
    } else {
        return count2
    }
};