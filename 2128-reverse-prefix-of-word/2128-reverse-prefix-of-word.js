/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    let words = word.split("")
    let arr = []
    let arr2 = []
    let index = words.indexOf(ch)
    for (i = 0; i <= index; i++) {
        arr.push(words[i])
    }
    for (let i = index + 1; i < words.length; i++) {
        arr2.push(words[i])
    }
    final = [arr.reverse(), ...arr2]
    return (final.flat().join(""))
};