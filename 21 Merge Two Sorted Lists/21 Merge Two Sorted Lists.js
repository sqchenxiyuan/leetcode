/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let mergeTwoLists = function(l1, l2) {
    let l3 = null
    let l3end = null
    while (l1 || l2){
        let node
        if (l1 && l2 && l1.val < l2.val || !l2){
            node = l1
            l1 = l1.next
        } else {
            node = l2
            l2 = l2.next
        }

        if (l3end){
            l3end.next = node
        } else {
            l3 = node
        }
        l3end = node
    }

    return l3
}