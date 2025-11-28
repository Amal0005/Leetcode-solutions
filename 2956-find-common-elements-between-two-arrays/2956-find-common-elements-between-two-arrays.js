/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
    let num1 = 0
    let num2 = 0
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) num1++
    }
    for (let i = 0; i < nums2.length; i++) {
        if (nums1.includes(nums2[i])) num2++
    }
    return [num1, num2]
};