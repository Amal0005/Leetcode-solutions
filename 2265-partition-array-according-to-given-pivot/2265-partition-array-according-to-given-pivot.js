/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    let left = []
    let middle = []
    let right = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i])
        } else if (nums[i] == pivot) {
            middle.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    return [...left, ...middle, ...right]
}