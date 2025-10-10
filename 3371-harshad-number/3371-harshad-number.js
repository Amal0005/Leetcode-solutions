/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
    let sum = x.toString().split("").reduce((acc, curr) => acc + parseInt(curr), 0)
    console.log(sum)
    if (x % sum == 0) {
        return sum
    } else {
        return -1
    }
};