/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
    if (s.length <= k) {
        return s;
    }
    let newStr = "";
    for (let i = 0; i < s.length; i += k) {
        const sum = s
            .slice(i, i + k)
            .split("")
            .reduce((acc, curr) => acc + parseInt(curr), 0);
        newStr += sum;
    }
    return digitSum(newStr, k);
};

