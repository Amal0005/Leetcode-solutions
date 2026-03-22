/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function (n) {
    let turn = 0;
    for (let remove = 10; remove >= 1; remove--) {
        if (n < remove) {
            return turn === 1;
        }
        n -= remove;
        turn ^= 1;
    }
    return turn === 1;
};