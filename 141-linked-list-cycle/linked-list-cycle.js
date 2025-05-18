/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head || head == null) return false;
    let slow = head;
    let fast = head;
    while(slow != null && fast != null) {
        if(slow != null) slow = slow.next;
        if(fast != null) fast = fast.next;
        if(fast != null) fast = fast.next;
        if(slow == fast && slow  != null && fast != null) return true;
    }

    return false;
};