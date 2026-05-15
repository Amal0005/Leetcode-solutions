/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let start = 0
    let end = nums.length - 1
    while (start < end) {
        let mid = Math.floor((start + end) / 2)
        nums[mid] > nums[end] ? start = mid + 1 : end = mid
    }
    return nums[end]
};
