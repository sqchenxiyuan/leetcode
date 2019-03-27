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
let middleNode = function(head) {
    let center = head
    let now = head.next
    let count = 1
    while (now){
        if (Math.floor(count / 2) !== Math.floor((count + 1) / 2)){
            center = center.next
        }
        now = now.next
        count++
    }

    return center
}