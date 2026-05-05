/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
    function reverse(head) {
        let prev = null
        while (head) {
            let next = head.next
            head.next = prev
            prev = head
            head = next
        }
        return prev
    }
    head = reverse(head)

    let max = head.val
    let current = head
    while (current && current.next) {
        if (current.next.val < max) {
            current.next = current.next.next
        } else {
            current = current.next
            max = current.val
        }
    }
    return reverse(head)
};