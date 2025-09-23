/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    let arr=[]
    let freq = nums.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr]++
        } else {
            acc[curr] = 1
        }
        return acc
    }, {})
    return nums.sort((a, b) => 
        freq[a] === freq[b] ? b - a : freq[a] - freq[b]
    );

};