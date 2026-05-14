/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    arr = [
        ...arr.slice(0, left - 1),
        ...arr.slice(left - 1, right).reverse(),
        ...arr.slice(right)
    ];
    head = new ListNode(arr[0])
    let current = head
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i])
        current = current.next
    }
    return head
};