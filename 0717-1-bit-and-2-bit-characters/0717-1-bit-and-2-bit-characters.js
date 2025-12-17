/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    let i = 0;
    while (i < bits.length) {
        if (bits[i] == 0) {
            i++;
            res = true;
        }
        else {
            i += 2;
            res = false;
        }
    }
    return res;
};