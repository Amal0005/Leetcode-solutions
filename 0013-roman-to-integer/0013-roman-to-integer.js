/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const symbol = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    value = 0;
    for (i=0;i<s.length;i+=1) {
        symbol[s[i]]<symbol[s[i+1]]?value-=symbol[s[i]]:value+=symbol[s[i]]
    }
    return value
};