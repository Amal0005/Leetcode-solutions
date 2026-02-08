/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let arr = []
    let freq = nums.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc
    }, {})
    console.log(freq)
    for (i in freq) {
        if (freq[i] > 1) {
            arr.push(parseInt(i))
        }
    }
    return arr
};