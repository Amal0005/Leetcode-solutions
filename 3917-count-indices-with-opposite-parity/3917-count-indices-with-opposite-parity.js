/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countOppositeParity = function (nums) {
    let res = new Array(nums.length).fill(0);
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] % 2 == nums[j] % 2 == 0) {
                res[i]++
            }
        }
    }
    return res
};