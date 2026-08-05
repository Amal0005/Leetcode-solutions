/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let arr = []
    sum = 0
    for (i = 0; i < nums.length; i++) {
        flag = 0
        for (j = 0; j < nums.length; j++) {
            if (i != j && nums[i] == nums[j]) {

                flag = 1
                break;
            }
        }
        if (flag == 0) {
            sum = sum + nums[i]
        }
    }
    return sum
}