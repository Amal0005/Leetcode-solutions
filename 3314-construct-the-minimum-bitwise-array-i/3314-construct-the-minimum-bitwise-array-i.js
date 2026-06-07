/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function (nums) {
    const res = []
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        if (n != 2) res[i] = n - ((n + 1) & (-n - 1)) / 2
        else res[i] = -1
    }
    return res
};