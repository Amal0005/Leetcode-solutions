/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    let sorted = nums.sort((a, b) => a - b)
    for (i = 0; i < sorted.length; i += 2) {
        if (sorted[i] !== sorted[i + 1]) return false
    }
    return true
};