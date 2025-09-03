/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let vowels = ["a", "e", "i", "o", "u"]
    let arr = []
    let arr2 = []
    for (i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            arr.push(s[i])
        } else {
            arr2.push(s[i])
        }
    }
    let freq1 = arr.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr]++
        } else {
            acc[curr] = 1
        }
        return acc
    }, {})
    let freq2 = arr2.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr]++
        } else {
            acc[curr] = 1
        }
        return acc
    }, {})
    let a = Math.max(...Object.values(freq2)) == -Infinity ? 0 : Math.max(...Object.values(freq2))
    let b = Math.max(...Object.values(freq1)) == -Infinity ? 0 : Math.max(...Object.values(freq1))
    return a + b
};