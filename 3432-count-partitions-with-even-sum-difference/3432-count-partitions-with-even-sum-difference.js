/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
    let sum = 0
    let count = 0
    for (let i = 1; i < nums.length; i++) {
        let sum2 = nums.slice(i).reduce((acc, curr) => acc + curr, 0)
        sum += nums[i - 1]
        if (Math.abs(sum - sum2) % 2 == 0) {
            count++
        }
    }
    return count
};