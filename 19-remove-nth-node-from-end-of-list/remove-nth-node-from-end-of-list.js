/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let nodeCopy = head;
    let totalNodes = 0;
    while(nodeCopy != null) {
        totalNodes++;
        nodeCopy = nodeCopy.next;
    }
    let referringNode = totalNodes - n; // Node count that is referring to the node that needs to be deleted.
    if(referringNode === 0) {
        head = head.next;
        return head;
    }

    let nodeToDelete = head;
    while(referringNode > 1) {
        nodeToDelete = nodeToDelete.next;
        referringNode--;
    }
    if(nodeToDelete.next != null) {
        nodeToDelete.next = nodeToDelete.next.next;
    }

    return head;
};