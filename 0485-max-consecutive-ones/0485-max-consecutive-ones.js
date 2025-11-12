/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let current = 0;
    for (let num of nums) {
        if (num === 1) {
            current++;
            max = Math.max(max, current);
        } else {
            current = 0;
        }
    }
    return max;
};