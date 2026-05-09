/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let val1 = ""
    let val2 = ""
    let current = l1;
    while (current) {
        val1 += current.val;
        current = current.next;
    }
    current = l2;
    while (current) {
        val2 += current.val;
        current = current.next;
    }
    let value = BigInt(val1.split("").reverse().join("")) + BigInt(val2.split("").reverse().join(""))
    let sum = value.toString().split("").reverse()

    let newList = new ListNode(0);
    let head = newList;

    for (let i of sum) {
        head.next = new ListNode(Number(i));
        head = head.next;
    }
    return newList.next;
};