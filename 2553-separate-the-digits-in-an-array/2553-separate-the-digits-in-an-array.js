/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
    let res = []
    let num = nums.toString().split("")
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== ",") {
            res.push(parseInt(num[i]))
        }
    }
    return res
};