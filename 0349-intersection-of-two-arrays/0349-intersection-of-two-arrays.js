/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let a = []
    let a1 = new Set(nums1)
    let a2 = new Set(nums2)

    let a11 = Array.from(a1)
    let a22 = Array.from(a2)

    let original = a11.concat(a22)
    for (let i = 0; i < original.length; i++) {
        for (let j = i + 1; j < original.length; j++) {
            if (original[i] == original[j]) {
                a.push(original[j])
            }
        }
    }
    return a
};