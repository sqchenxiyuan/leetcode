/*
 * @lc app=leetcode id=147 lang=javascript
 *
 * [147] Insertion Sort List
 */
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
let insertionSortList = function(head) {
    if(!head)return head
    let top = new ListNode()
    top.next = head
    let now = head
    while (now.next){
        if (now.next.val < now.val){
            let one = now.next
            now.next = now.next.next
            let ttt = top
            while (ttt.next.val < one.val){
                ttt = ttt.next
            }
            one.next = ttt.next
            ttt.next = one
        } else {
            now = now.next
        }
    }
    return top.next
}

