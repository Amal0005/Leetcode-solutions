/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    
    while (head && head.val === val) {
        head = head.next;
    }
    let prev = null;
    let current = head;
    while (current) {
        if (current.val === val) {
            prev.next = current.next;
        } else {
            prev = current;
        }
        current = current.next;
    }
    return head
};
