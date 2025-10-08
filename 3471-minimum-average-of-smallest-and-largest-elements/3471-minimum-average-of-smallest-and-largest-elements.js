/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
    let arr = nums.sort((a, b) => a - b)
    let avg = []
    for (let i = 0; i < arr.length; i++) {
        avg.push((arr[i] + arr[arr.length - 1]) / 2)
        arr.length--
    }
    return Math.min(...avg)
};