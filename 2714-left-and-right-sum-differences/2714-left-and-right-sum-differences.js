/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    let left = []
    let right = []
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        left.push(sum)
        sum += nums[i]

    }
    let length = nums.length
    for (let i = 0; i < length; i++) {
        let a = nums.slice(1)
        right.push(a.reduce((acc, curr) => acc + curr, 0))

        nums = a

    }
    let arr = []
    for (let i = 0; i < left.length; i++) {
        arr.push(Math.abs(left[i] - right[i]))
    }
    return arr
};