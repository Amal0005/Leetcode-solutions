/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    let out = ""
    for (let i = 0; i < command.length; i++) {
        if (command[i] == "(" && command[i + 1] == ")") {
            out += "o"
        } else if (command[i] == "(" || command[i] == ")") {
            continue
        } else {
            out += command[i]
        }
    }
    return out
};