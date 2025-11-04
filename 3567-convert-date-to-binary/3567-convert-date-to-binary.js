/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
    let newDate = new Date(date)
    let year = newDate.getFullYear()
    let month = newDate.getMonth() + 1
    let day = newDate.getDate()
    return year.toString(2) + "-" + month.toString(2) + "-" + day.toString(2)

};