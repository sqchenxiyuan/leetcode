/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
let isPalindrome = function(head) {
    if (!head) return true

    let pre = null
    let mid = head
    let end = head
    while (end.next && end.next.next){
        end = end.next.next
        let midNext = mid.next
        mid.next = pre
        pre = mid
        mid = midNext
    }

    let left
    let right 
    if (end.next){ // 偶数个
        right = mid.next 
        left = mid
        mid.next = pre
    } else { //奇数个
        right = pre
        left = mid.next
    }

    while (true){
        if (!left && !right) return true
        if (!left || !right) return false
        if (left.val === right.val){
            left = left.next   
            right = right.next   
        } else {
            return false
        }
    }
}

