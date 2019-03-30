/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (30.73%)
 * Total Accepted:    808.3K
 * Total Submissions: 2.6M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
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
let addTwoNumbers = function(l1, l2) {
    let result = new ListNode(null) //结果
    let now = result //现在的节点
    let i = l1, 
        j = l2, 
        y = 0

    while (true){
        let x = i.val + j.val + y
        if (x >= 10){
            y = 1
        } else {
            y = 0
        }
        
        let newNode = new ListNode(x % 10)
        now.next = newNode
        now = newNode
        
        if (y === 0){
            if (!i.next){
                now.next = j.next
                break
            }
    
            if (!j.next){
                now.next = i.next
                break
            }
        }
        
        if (i.next) i = i.next
        else i = new ListNode(0)
        if (j.next) j = j.next
        else j = new ListNode(0)
    }
    
    return result.next
}

