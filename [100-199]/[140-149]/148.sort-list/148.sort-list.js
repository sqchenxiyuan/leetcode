/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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
let sortList = function(head) {
    if (!head || !head.next) return head

    let top = new ListNode()
    top.next = head
    let mid = top
    let now = top
    while (now && now.next){
        now = now.next.next
        mid = mid.next
    }

    let one = top.next
    let tow = mid.next
    mid.next = null

    one = sortList(one)
    tow = sortList(tow)

    now = top
    while (one || tow){
        if (one && tow){
            if (one.val < tow.val){
                now.next = one
                now = one
                one = one.next
            } else {
                now.next = tow
                now = tow
                tow = tow.next
            }
        } else if (one){
            now.next = one
            break
        } else {
            now.next = tow
            break
        }
    }
    
    return top.next
}

