/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
    let count = 0
    let arr = []
    let arr2 = []
    let a = nums.indexOf(1)
    console.log(a)
    for (let i = a; i < nums.length; i++) {
        count++
        if (nums[i] == 1) {
            count = 0
        }
        arr.push(count)
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == 0 && i != 0) {
            arr2.push(arr[i - 1])
        }
    }
    console.log(arr)
    console.log(arr2)
    return arr2.every((item) => item >= k)
};