/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
    let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    let arr = s.split("")
    let vowArr = []
    for (i of s) {
        if (vowels.has(i)) {
            vowArr.push(i)
        }
    }
    vowArr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    let index = 0
    for (let i = 0; i < arr.length; i++) {
        if (vowels.has(arr[i])) {
            arr[i] = vowArr[index]
            index++
        }
    }
    return arr.join("")
};