/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */
let removeElements = function(head, val) {
    let top = new ListNode()
    top.next = head
    let current = top
    while (current && current.next){
        let next = current.next
        if (next.val === val){
            current.next = next.next
        } else {
            current = next
        }
    }
    return top.next
}

