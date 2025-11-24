/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
    let res = []
    let x = 0
    for (let i of nums) {
        x = (x * 2 + i) % 5
        res.push(x == 0)
    }
    return res
};