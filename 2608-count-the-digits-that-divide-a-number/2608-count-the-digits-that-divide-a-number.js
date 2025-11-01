/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
    let nums = num.toString().split("")
    let count = 0
    console.log(nums)
    for (let i = 0; i < nums.length; i++) {
        if (num % parseInt(nums[i]) == 0) {
            count++
        }
    }
    return count
};