var shortestToChar = function (s, c) {
    let result = [];
    for (let i = 0; i < s.length; i++) {
        let min = Infinity;
        let j = 0;
        while (j < s.length) {
            if (s[j] === c) {
                let distance = Math.abs(i - j);
                distance < min ? min = distance : min = min
            }
            j++;
        }
        result.push(min);
    }
    return result;
};