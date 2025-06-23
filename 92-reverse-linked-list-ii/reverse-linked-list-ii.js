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
var reverseBetween = function(head, left, right) {
    let nodeCopy = head;
    let currentPointer = 1;
    
    while(currentPointer < left && nodeCopy != null) {
        nodeCopy = nodeCopy.next;
        currentPointer++;
    }
    let revStartNode = nodeCopy;
    let ar = [];

    while(currentPointer <= right && nodeCopy != null) {
        ar.push(nodeCopy.val);
        nodeCopy = nodeCopy.next;
        currentPointer++;
    }

    ar = ar.reverse();

    let i = 0;
    while(i < ar.length) {
        revStartNode.val = ar[i];
        revStartNode = revStartNode.next;
        i++;
    }

    return head;

};