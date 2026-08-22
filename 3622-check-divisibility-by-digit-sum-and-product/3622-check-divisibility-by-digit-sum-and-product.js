/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function (n) {
    let digitSum = n.toString().split("").reduce((acc, curr) => acc += parseInt(curr), 0)
    let product = n.toString().split("").reduce((acc, curr) => acc *= parseInt(curr), 1)
    let totalSum = digitSum + product
    console.log(digitSum, product)
    return n % totalSum == 0
};