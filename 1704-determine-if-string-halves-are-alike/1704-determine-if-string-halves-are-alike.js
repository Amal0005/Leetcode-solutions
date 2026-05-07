/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    let a = []
    let b = []
    let vowels = ["a", "e", "i", "o", "u","A","E","I","O","U"]
    let count1 = 0
    let count2 = 0
    for (let i = 0; i < s.length; i++) {
        i < s.length / 2 ? a.push(s[i]) : b.push(s[i])
    }
    for (let i = 0; i < a.length; i++) {
        if (vowels.includes(a[i])) count1++
        if (vowels.includes(b[i])) count2++
    }
    return count1 == count2
};