/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let num = nums.filter((value, index, arr) => arr.indexOf(value) == arr.lastIndexOf(value)).join("")
    return parseInt(num)
};