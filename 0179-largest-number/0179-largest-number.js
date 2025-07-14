/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    num = nums.map(String)
    num.sort((a, b) => (b + a) - (a + b));
    if (num[0] == "0") return "0"
    return num.join("")
};