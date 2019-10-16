/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
 */

// @lc code=start
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
let oddEvenList = function(head) {
    let pre = new ListNode()
    pre.next = head

    let oddPre = new ListNode()
    let oddEnd = oddPre
    let evenPre = new ListNode()
    let evenEnd = evenPre

    let count = false
    while (pre.next){
        count = !count
        let next = pre.next
        if (count){
            oddEnd.next = next
            oddEnd = next
        } else {
            evenEnd.next = next
            evenEnd = next
        }
        pre = next
    }
    oddEnd.next = evenPre.next
    evenEnd.next = null
    return oddPre.next
}
// @lc code=end

