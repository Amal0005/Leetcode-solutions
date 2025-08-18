/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
     let a = nums[0]; 
  for (let num of nums) {
    if (Math.abs(num) < Math.abs(a)) {
      a = num;
    }
    else if (Math.abs(num) === Math.abs(a) && num > a) {
      a = num;
    }
  }
  return a;
};
