/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    for(i=0;i<nums.length;i++){
        if(target===nums[i]){
            return i
        }
        
        }
    return -1
};