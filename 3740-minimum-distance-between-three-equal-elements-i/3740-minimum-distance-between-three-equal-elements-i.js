/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    let min=Infinity
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(k=j+1;k<nums.length;k++){
                if(nums[i] == nums[j]&&nums[j] == nums[k]){
                    let a=Math.abs(i - j) + Math.abs(j - k) + Math.abs(k - i)
                   min=Math.min(min,a)
                }

            }
        }
    }
    return min === Infinity ? -1 : min;
};