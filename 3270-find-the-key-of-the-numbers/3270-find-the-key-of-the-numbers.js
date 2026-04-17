/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function (num1, num2, num3) {
    const length = Math.max(
        num1.toString().length,
        num2.toString().length,
        num3.toString().length
    );
    const s1 = num1.toString().padStart(length, '0');
    const s2 = num2.toString().padStart(length, '0');
    const s3 = num3.toString().padStart(length, '0');

    let result = '';
    for (let i = 0; i < length; i++) {
        const minDigit = Math.min(
            parseInt(s1[i]),
            parseInt(s2[i]),
            parseInt(s3[i])
        );
        result += minDigit;
    }
    return parseInt(result);
};