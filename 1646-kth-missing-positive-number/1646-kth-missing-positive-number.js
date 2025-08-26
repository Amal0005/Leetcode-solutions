/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let nums = []
    for (let i = 1; i <= arr.length + k; i++) {
        if (!arr.includes(i)) {
            nums.push(i)
        }
    }
    console.log(nums)
    return nums[k - 1]
};