/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let current = head
    let arr = []
    while (current) {
        arr.push(current.val)
        current = current.next
    }
    return arr.join("") == arr.reverse().join("")

};