/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    let count = 0
    let texts = text.split(" ")
    for (let i = 0; i < texts.length; i++) {
        let flag = 0
        for (let j = 0; j < brokenLetters.length; j++) {
            if (texts[i].includes(brokenLetters[j])) {
                flag = 1
                break
            }
        }
        if (flag == 0) {
            count++
        }
    }
    return count
};