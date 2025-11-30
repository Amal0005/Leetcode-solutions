/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i].toString().split("")
        arr.push(sum.reduce((acc, curr) => acc + parseInt(curr), 0))
    }
    return Math.min(...arr)
};