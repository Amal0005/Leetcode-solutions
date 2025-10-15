/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
    let index = Infinity
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i].toString().split("").reduce((acc, curr) => acc + parseInt(curr), 0)
        if (sum == i && index > sum) {
            index = i
        }
    }
    return index == Infinity ? -1 : index
};