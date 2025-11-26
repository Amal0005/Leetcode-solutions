/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let missing = -1;
    let n = nums.length;
    for(let i=1;i<=nums.length;i++) {
        if(!nums.includes(i)) {
            missing = i;
            break;
        }
    }
    let s = Math.floor((n*(n+1))/2);
    let arrSum = 0;
    for(let i=0;i<nums.length;i++) {
        arrSum += nums[i];
    }

    arrSum += missing;

    let duplicate = arrSum - s;
    return [duplicate,missing];
};