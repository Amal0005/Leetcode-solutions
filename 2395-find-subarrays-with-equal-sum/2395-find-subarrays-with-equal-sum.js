/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
    let arr=[]
        for(let i=0;i<nums.length-1;i++){
           arr.push(nums[i]+nums[i+1])
    }
    let res=arr.filter((item,index,arr)=>arr.indexOf(item)!==arr.lastIndexOf(item))
    return res.length!==0
};