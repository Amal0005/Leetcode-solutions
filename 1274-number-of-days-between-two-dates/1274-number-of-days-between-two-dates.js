/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
    const first = new Date(date1);
    const second = new Date(date2);
    const msPerDay = 1000 * 60 * 60 * 24;
    return Math.abs((first - second) / msPerDay);
};