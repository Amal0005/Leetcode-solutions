/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function (batteryPercentages) {
    return batteryPercentages.reduce((acc, curr) => curr > acc ? acc + 1 : acc, 0)
};