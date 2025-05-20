/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let newListHead;
    let prev;
    if(!list1 && !list2) return list1;
    if(!list1) return list2;
    if(!list2) return list1;

    while(list1 && list2) {
        const node = new ListNode();
        if(list1.val <= list2.val) {
            node.val = list1.val;
            list1 = list1.next;
        } else {
            node.val = list2.val;
            list2 = list2.next;
        }

        if(!newListHead) {
            newListHead = node;
        } else {
            prev.next = node;
        }

        prev = node;
    }

    let leftOver = list1 || list2;

    while(leftOver) {
        const node = new ListNode(leftOver.val);
        if(prev) prev.next = node;
        prev = node;
        leftOver = leftOver.next;
    }

    return newListHead;
};