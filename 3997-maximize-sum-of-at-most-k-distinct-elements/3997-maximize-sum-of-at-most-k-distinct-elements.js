/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function (nums, k) {
    let num = [...new Set(nums.sort((a, b) => b - a))]
    return num.slice(0, k)
};