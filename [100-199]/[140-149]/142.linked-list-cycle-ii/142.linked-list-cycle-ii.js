/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
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
let detectCycle = function(head) {
    let set = new Set()
    let now = head
    while (now){
        if (set.has(now)) return now
        set.add(now)
        now = now.next
    }
    return null
}

