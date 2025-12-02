/**
 * @param {number[][]} points
 * @return {number}
 */
var countTrapezoids = function(points) {
    const MOD = BigInt(1000000007);

    const ycount = new Map();
    for (const [x, y] of points) {
        ycount.set(y, (ycount.get(y) || BigInt(0)) + BigInt(1));
    }

    const seg = [];
    for (const c of ycount.values()) {
        if (c >= BigInt(2)) {
            seg.push(c * (c - BigInt(1)) / BigInt(2));
        }
    }

    if (seg.length < 2) return 0;

    let ans = BigInt(0);
    let prefix = BigInt(0);

    for (const b of seg) {
        ans = (ans + prefix * b) % MOD;
        prefix = (prefix + b) % MOD;
    }

    return Number(ans);
};
