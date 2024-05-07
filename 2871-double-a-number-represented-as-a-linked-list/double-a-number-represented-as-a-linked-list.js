
//   Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
  }
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function(head) {

    function reverse() {
        let prev = null;
        let cur = head;
        while(cur) {
            let nextNode = cur.next;
            cur.next = prev;
            prev = cur;
            cur = nextNode;
        }

        return prev;
    }

    head = reverse();

    let cur = head;
    let carryOver = 0;
    let prev; // added prev to get the last node after while.
    // Letting cur to become null to that all nodes are taken care.
    while(cur) {
        let num = (cur.val * 2) + carryOver;
        carryOver = 0;
        if(num > 9) {
            const currentNode = num % 10;
            carryOver = Math.floor(num / 10);
            cur.val = currentNode;
            prev = cur;
            cur = cur.next;
            continue;
        } else {
            cur.val = num;
            prev = cur;
            cur = cur.next;
        }
    }

    if(carryOver) {
        const node = new ListNode(carryOver);
        prev.next = node;
        carryOver = 0;
    }

    head = reverse();

    return head;
};