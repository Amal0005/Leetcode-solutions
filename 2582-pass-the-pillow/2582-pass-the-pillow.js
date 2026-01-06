/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
    const loop = n * 2 - 2;
    time = time % loop;
    return time + 1 <= n ? time + 1 : loop + 1 - time;
};