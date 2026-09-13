/**
 * @param {number[]} nums
 * @return {number}
 */
var maxDigitRange = function (nums) {
    let large = 0;
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        let digits = nums[i].toString().split("");
        let max = Math.max(...digits);
        let min = Math.min(...digits);
        let range = max - min;

        if (range > large) {
            large = range;
            total = nums[i];
        } else if (range === large) {
            total += nums[i];
        }
    }
    return total;
};