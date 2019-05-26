/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
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
 * @param {number} x
 * @return {ListNode}
 */
let partition = function(head, x) {
    let top = new ListNode()
    top.next = head
    let before = top

    //找到比x大的第一个元素
    while (before.next){
        if (before.next.val >= x) break
        before = before.next
    }
    let big = before.next
    let now = big

    if (now){
        //移动比x小的元素
        while (now.next){
            if (now.next.val < x){
                before.next = now.next
                before = now.next
                now.next = now.next.next
            } else {
                now = now.next
            }
        }
    }

    before.next = big
    
    return top.next
}

// let { buildArrayFromLink, buildLinkFormArray, ListNode } = require("../../../utils/link")

// let x = buildArrayFromLink(
//     partition(
//         buildLinkFormArray([1, 4, 3, 2, 5, 2]),
//         3
//     )
// )

// let x1 = buildArrayFromLink(
//     partition(
//         buildLinkFormArray([1, 4, 3, 2, 5, 2]),
//         1
//     )
// )

// let x2 = buildArrayFromLink(
//     partition(
//         buildLinkFormArray([1, 4, 3, 2, 5, 2]),
//         5
//     )
// )

// let x3 = buildArrayFromLink(
//     partition(
//         buildLinkFormArray([1, 2, 3, 4, 5, 6]),
//         7
//     )
// )
// console.log(x)
