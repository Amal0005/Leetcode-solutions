/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
        if(nums.length==1)return nums[0]
    sum=0
    let arr=[]
    for(i=0;i<nums.length;i++){
        if(nums[i]<0){
            arr.push(nums[i])
        }
        flag=0
        for(j=i+1;j<nums.length;j++){
            if(nums[i]==nums[j]){
                flag=1
            }
        }
        if(flag==0&&nums[i]>0){
            sum+=nums[i]
        }
    }
    if(arr.length==nums.length){
        // let max=
        return Math.max(...arr)
    }else{

    return sum
    }
};