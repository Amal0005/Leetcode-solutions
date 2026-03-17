/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let arr = []
    for (let i = 0; i < words.length; i++) {
        let count = 0
        let char = chars.split("")
        for (let j = 0; j < words[i].length; j++) {
            if (char.includes(words[i][j])) {
                let index = char.indexOf(words[i][j])
                count++
                char.splice(index, 1)
            }
            if (count == words[i].length) {
                arr.push(words[i])
            }
        }
    }
    return arr.join("").length
};