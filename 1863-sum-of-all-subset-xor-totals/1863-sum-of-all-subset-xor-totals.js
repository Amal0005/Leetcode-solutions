/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    let sum = 0;
    for (let num of nums) {
        sum |= num;
    }
    return sum * (2 ** (nums.length - 1));
};