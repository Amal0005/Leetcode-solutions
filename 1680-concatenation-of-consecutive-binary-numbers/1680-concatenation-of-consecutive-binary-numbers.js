/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
    const MOD = 1000000007n;
    let binaryString = "";
    for (let i = 1; i <= n; i++) {
        binaryString += i.toString(2);
    }
    let result = BigInt("0b" + binaryString) % MOD;
    return Number(result);
};