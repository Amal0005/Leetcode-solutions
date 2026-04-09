/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let final = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            final.push(0)
        }
        final.push(arr[i])
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = final[i]
    }
    return final
};