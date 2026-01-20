/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let set = new Set(nums);
    let missingNumbers = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {
            missingNumbers.push(i);
        }
    }
    return missingNumbers;
};