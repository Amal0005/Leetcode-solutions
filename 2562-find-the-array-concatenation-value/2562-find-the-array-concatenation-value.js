/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
    let arr = []
    while (nums.length) {
        if (nums.length == 1) {
            arr.push(nums[0])
            break
        }
        arr.push(nums[0].toString() + nums[nums.length - 1].toString())
        nums.shift()
        nums.pop()
    }
    console.log(arr)
    return arr.reduce((acc, curr) => acc + (parseInt(curr)), 0)
};