/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let a = nums.sort((a, b) => b - a)
    return a[k - 1]
};