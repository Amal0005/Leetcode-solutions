/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    const uniqueEmails = new Set();
    for (let email of emails) {
        let [local, domain] = email.split('@');
        local = local.split('+')[0]; // Ignore everything after the first '+'
        local = local.replace(/\./g, ''); // Remove all '.'
        const uniqueEmail = local + '@' + domain;
        uniqueEmails.add(uniqueEmail);
    }
    return uniqueEmails.size;
};