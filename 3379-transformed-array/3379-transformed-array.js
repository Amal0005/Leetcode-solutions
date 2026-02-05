/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function (nums) {
    const n = nums.length;
    const result = []
    for (let i = 0; i < n; i++) {
        let ind = ((i + nums[i]) % n + n) % n;
        result.push(nums[ind])
    }
    return result;
};