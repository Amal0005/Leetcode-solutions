/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let arrr = []
    let minSum = Infinity;
    arr = [...list1, ...list2]
    for (i = 0; i <= arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j] && i + j) {
                let sum = i + j;
                if (sum < minSum) {
                    minSum = sum;
                    arrr = [list1[i]];
                } else if (sum === minSum) {
                    arrr.push(list1[i]);
                }
            }
        }
    }
    console.log(arrr)
    return arrr
};
