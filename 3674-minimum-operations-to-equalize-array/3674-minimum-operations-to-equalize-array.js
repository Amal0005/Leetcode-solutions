/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let res = [...new Set(nums)]
    return (res.length === 1) ? 0 : 1
};