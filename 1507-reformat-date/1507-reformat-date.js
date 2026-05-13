/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
    let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let arr = date.split(" ")
    let res = ""
    res += arr[2]
    res += "-"
    res += (month.indexOf(arr[1]) + 1).toString().padStart(2, "0")
    res += "-"
    res += arr[0].slice(0, -2).padStart(2, "0");
    return res
};