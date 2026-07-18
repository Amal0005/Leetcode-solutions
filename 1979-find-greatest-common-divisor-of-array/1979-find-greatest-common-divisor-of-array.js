/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    gcd = 1
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    for (let i = 1; i <= min; i++) {
        if (min % i == 0 && max % i == 0) {
            gcd = i
        }
    }
    return gcd
};