/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
    let size = 0
    let current = head
    while (current) {
        current = current.next
        size++
    }
    let firstNode = head
    for (let i = 1; i < k; i++) {
        firstNode = firstNode.next
    }
    let secondNode = head
    for (let i = 0; i < size - k; i++) {
        secondNode = secondNode.next
    }
    let temp = firstNode.val
    firstNode.val = secondNode.val
    secondNode.val = temp

    return head
};