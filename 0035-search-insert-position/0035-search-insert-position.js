/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
   let low = 0, high = nums.length;
    while(low<high) { 
        let mid=low+Math.floor((high-low)/2);
        if (target>nums[mid]) {
            low=mid+1
        } else {
            high=mid
        }
    }
    return low;
};