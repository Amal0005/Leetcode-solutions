/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    sum=0
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
    }
    let a= sum%k
    return a
};