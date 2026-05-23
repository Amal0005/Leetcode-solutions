/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let arr = [...nums].sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (arr.toString() == nums.toString()) {
            return true
        }
        nums.unshift(nums.pop())
    }
    return false
};