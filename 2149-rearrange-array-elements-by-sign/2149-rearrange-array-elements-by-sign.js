/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let arr1 = nums.filter((item) => item < 0)
    let arr2 = nums.filter((item) => item >= 0)
    let res = []
    for (let i = 0; i < nums.length; i++) {
        res.push(arr2[i])
        res.push(arr1[i])
    }
    return res.filter((item) => item !== undefined)
};