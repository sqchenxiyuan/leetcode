/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */
let hasCycle = function(head) {
    let set = new Set()
    let now = head
    while (now){
        if (set.has(now)) return true
        set.add(now)
        now = now.next
    }
    return false
}

