/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function (n, t) {
    while (true) {
        let res = 1
        let str = n.toString()
        for (let i of str) {
            res *= parseInt(i)
        }
        if (res % t == 0) return n
        n++
    }
};