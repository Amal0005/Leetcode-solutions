/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let a=0
    for(i=0;i<nums.length;i++){
        if(nums[i]%2==0){
            [nums[i],nums[a]]=[nums[a],nums[i]]
            a++
        }
    }
    return nums
};