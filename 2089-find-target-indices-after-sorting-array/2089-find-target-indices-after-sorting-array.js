/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
    let num = nums.sort((a, b) => a - b)
    let arr = []
    console.log(num)
    for (let i = 0; i < num.length; i++) {
        if (num[i] == target) {
            arr.push(i)
        }
    }
    return arr
};