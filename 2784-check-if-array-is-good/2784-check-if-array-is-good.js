/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
    const n = nums.length - 1;
    nums.sort((a, b) => a - b);
    if (nums.length === 2) {
        return nums[0] === 1 && nums[1] === 1;
    }
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i + 1] - nums[i] !== 1) {
            return false;
        }
    }
    if (nums[nums.length - 1] !== nums[nums.length - 2]) {
        return false;
    }
    if (nums[nums.length - 1] !== n) {
        return false;
    }
    return true;
};