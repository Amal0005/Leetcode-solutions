/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
    let num1 = [...new Set(nums1)]
    let num2 = [...new Set(nums2)]
    let num3 = [...new Set(nums3)]
    let newArr = [...num1, ...num2, ...num3]
    let arr = newArr.filter((val, index, arr) => arr.indexOf(val) !== arr.lastIndexOf(val))
    return [...new Set(arr)]
};