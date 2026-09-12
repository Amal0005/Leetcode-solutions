/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }
    let result = nums.filter(num => num !== 0);

    for (let i = result.length; i < nums.length; i++) {
        result.push(0);
    }
    return result;
};