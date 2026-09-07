/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    sum = 0
    ss = s.split("")
    arr = []
    for (let char of ss) {
        arr.push(char.charCodeAt(0))
    }
    for (i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            sum += (Math.abs(arr[i] - arr[j]))
            i++
        }
    }
    return sum
};