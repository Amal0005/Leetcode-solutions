/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    let max = Math.max(...nums)
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        result += max - nums[i]
    }
    return result
};