/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    let arr = []
    let nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    for (let i = 0; i < s.length; i++) {
        if (nums.includes(s[i])) {
            arr.push(parseInt(s[i]))
        }
    }
    let unique = [...new Set(arr)];
    unique.sort((a, b) => a - b);
    console.log(unique)
    while (unique.length >= 2) {
        return unique[unique.length - 2]
    }
    return -1
};