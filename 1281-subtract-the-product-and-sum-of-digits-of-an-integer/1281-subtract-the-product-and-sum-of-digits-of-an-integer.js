/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let sum = 0
    let mul = 1
    let a = n.toString().split("")
    for (i = 0; i < a.length; i++) {
        let num = parseInt(a[i])
        sum = sum + num
        mul = mul * num
    }
    return mul - sum
};