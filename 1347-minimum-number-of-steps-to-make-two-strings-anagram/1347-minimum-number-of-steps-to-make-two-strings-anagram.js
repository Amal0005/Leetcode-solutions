/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    let sum = 0
    const freq = {};
    for (const letter of s) {
        freq[letter] = freq[letter] ? freq[letter] + 1 : 1;
    }
    for (const letter of t) {
        if (freq[letter]) {
            freq[letter]--;
        } else sum++;
    }
    return sum
};