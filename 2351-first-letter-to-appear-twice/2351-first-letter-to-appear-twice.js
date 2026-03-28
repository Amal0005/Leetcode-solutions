/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
    let freq = {}
    for (val of s) {
        if (freq[val]) {
            return val
        }
        freq[val] = 1
    }
};