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
var addTwoNumbers = function(l1, l2) {
    function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
    let newHead = null;
    let currentNode = null;
    let sum = 0;
    while(l1 != null || l2 != null) {
        sum += (l1 == null ? 0 : l1.val) + (l2 == null ? 0 : l2.val);
        let result = sum;
        if(sum > 9) {
            result = sum % 10;
            sum = Math.floor(sum / 10);
        } else {
            sum = 0;
        }

        let node = new ListNode(result);
        node.val = result;
        if(newHead == null) {
            newHead = node;
            currentNode = node;
        } else {
            currentNode.next = node;
            currentNode = node;
        }

        if(l1 != null) l1 = l1.next;
        if(l2 != null) l2 = l2.next;
    }

    if(sum > 0) {
        let residualNode = new ListNode(sum);
        currentNode.next = residualNode;
    }

    return newHead;
};