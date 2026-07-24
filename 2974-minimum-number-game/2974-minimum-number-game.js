/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    let arr = []
    nums.sort((a, b) => a - b)
    for (i = 0; i < nums.length; i++) {
        if (i == 0 || i % 2 == 0) {
            arr.push(nums[i + 1])
        } else {
            arr.push(nums[i - 1])
        }
    }
    return arr
};