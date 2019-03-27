/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let swapPairs = function(head) {
    let now = head
    while (now && now.next){
        let n1 = now
        let n2 = now.next

        let v = n1.val
        n1.val = n2.val
        n2.val = v

        now = n2.next
    }

    return head
}