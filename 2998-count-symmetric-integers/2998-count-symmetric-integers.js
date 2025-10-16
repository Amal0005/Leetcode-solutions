/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    let count = 0;
    for (let i = low; i <= high; i++) {
        let str = i.toString()
        if (str.length % 2 !== 0) continue;
        let half = str.length / 2;
        let left = str.slice(0, half);
        let right = str.slice(half);

        let sumLeft = [...left].reduce((a, c) => a + parseInt(c), 0);
        let sumRight = [...right].reduce((a, c) => a + parseInt(c), 0);
        if (sumLeft === sumRight) count++;
    }

    return count;
};