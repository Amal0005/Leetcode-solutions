/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    const frequency = arr.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr] += 1;
        } else {
            acc[curr] = 1;
        }
        return acc;
    }, {});
    let max = -1;

    for (let key in frequency) {
        if (parseInt(key) === frequency[key]) {
            max = Math.max(max, parseInt(key));
        }
    }
    return max;
};