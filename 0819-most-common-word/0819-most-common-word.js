/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {

    let normStr = paragraph.toLowerCase().replace(/[^\w\s]/g, ' ');

    let words = normStr.split(/\s+/);
    let bannedSet = new Set(banned);
    let freq = {};
    for (let word of words) {
        if (!bannedSet.has(word) && word !== '') {
            freq[word] = (freq[word] || 0) + 1;
        }
    }
    let maxCount = 0;
    let mostCommon = '';
    for (let word in freq) {
        if (freq[word] > maxCount) {
            maxCount = freq[word];
            mostCommon = word;
        }
    }
    return mostCommon;
};