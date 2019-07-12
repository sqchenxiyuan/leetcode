/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
let getIntersectionNode = function(headA, headB) {
    let al = 0
    let bl = 0
    
    let nowA = headA
    let nowB = headB
    while (nowA){
        nowA = nowA.next
        al++
    }
    while (nowB){
        nowB = nowB.next
        bl++
    }

    nowA = headA
    nowB = headB
    if (al > bl){
        let c = al - bl
        while (c){
            nowA = nowA.next
            c--
        }
    } else if (bl > al){
        let c = bl - al
        while (c){
            nowB = nowB.next
            c--
        }
    }

    while (nowA !== nowB){
        nowA = nowA.next
        nowB = nowB.next
    }

    return nowA
}

