/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
    let seat = seats.sort((a, b) => a - b)
    let student = students.sort((a, b) => a - b)
    let arr = []
    for (let i = 0; i < seats.length; i++) {
        arr.push(Math.abs(seat[i] - student[i]))
    }
    return arr.reduce((acc, curr) => acc += curr, 0)
};