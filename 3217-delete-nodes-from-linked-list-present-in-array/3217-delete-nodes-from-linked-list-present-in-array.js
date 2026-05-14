/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
    let prev = null
    let slow = head
    nums = new Set(nums);
    while (head && nums.has(head.val)) {
        head = head.next;
    }
    slow = head
    while (slow) {
        if (nums.has(slow.val)) {
            prev.next = slow.next
        } else {
            prev = slow
        }
        slow = slow.next
    }
    return head
};