/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
let rotateRight = function(head, k) {
    if (head === null || head.next === null) return head
    let len = 1
    let now = head
    while (now.next){
        now = now.next
        len++
    }
    now.next = head

    let x = len - k % len - 1
    now = head
    while (x){
        x--
        now = now.next
    }
    let result = now.next
    now.next = null

    return result
}

