/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
    let arr = []
    for (let i = left; i <= right; i++) {
        let bits = i.toString(2).split("").filter((item) => item == "1")
        arr.push(bits.length)
    }
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        let flag = 0
        for (let j = 2; j < arr[i]; j++) {
            if (arr[i] % j == 0) flag = 1
        }
        if (flag === 0 && arr[i] !== 1) count++
    }
    return count
};