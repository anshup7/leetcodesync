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
var removeNodes = function(head) {
    function reverse() {
        let prev = null;
        let current = head
        while(current) {
            let nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }

        head = prev;
    }

    reverse();
    let prev = head;
    let cur = head && head.next;
    while(cur) {
        if(cur.val < prev.val) {
            prev.next = cur.next;
            cur.next = null;
            cur = prev.next;
        } else {
            prev = prev.next;
            cur = cur.next;
        }
    }
    
    reverse();
    return head;
};