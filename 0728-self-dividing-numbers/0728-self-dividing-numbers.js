/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let result = [];

    for (let i = left; i <= right; i++) {
        let flag = 0
        let digits = i.toString().split('');

        for (let digit of digits) {
            let num = parseInt(digit);
            if (num === 0 || i % num !== 0) {
                flag = 1
                break;
            }
        }
        if (flag==0) {
            result.push(i);
        }
    }
    return result;
};