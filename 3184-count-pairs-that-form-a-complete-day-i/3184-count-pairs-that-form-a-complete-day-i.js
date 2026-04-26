/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
    count = 0
    for (i = 0; i < hours.length; i++) {
        for (j = i + 1; j < hours.length; j++) {
            let a = hours[i] + hours[j]
            if (a % 24 == 0) {
                count++
            }
        }
    }
    return count

};