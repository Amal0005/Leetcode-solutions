/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    let a = title.split(" ");
    let arr = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i].length > 2) {
            let res = a[i].charAt(0).toUpperCase() + a[i].slice(1).toLowerCase();
            arr.push(res);
        } else {
            arr.push(a[i].toLowerCase())
        }
    }

    return arr.join(" ");

};
