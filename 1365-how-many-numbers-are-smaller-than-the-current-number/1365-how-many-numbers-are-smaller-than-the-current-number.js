/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let result = [];
    for (i = 0; i < nums.length; i++) {
        let count = 0;
        for (j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                count++;
            }
        }
        result.push(count);
    }
    return result;
};