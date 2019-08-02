/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
let reverseList = function(head) {
    if (head === null) return head
    let current = head
    let pre = null
    while (current.next){
        let next = current.next
        current.next = pre
        pre = current
        current = next
    }
    current.next = pre

    return current
}

