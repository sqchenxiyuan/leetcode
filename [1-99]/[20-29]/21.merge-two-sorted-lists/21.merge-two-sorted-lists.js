/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (46.17%)
 * Total Accepted:    533.6K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 * 
 * 
 */
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

