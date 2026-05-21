/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        let binary = i.toString(2).split("").filter((item) => item == "1")
        if (binary.length == k) {
            sum += nums[i]
        }
    }
    return sum
};