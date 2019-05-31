/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
let reverseBetween = function(head, m, n) {
    //找到目标串
    let top = new ListNode() //最顶端
    top.next = head
    let topP = top //子链的上部分
    let bottomP = top //子链的下部分
    let childBottom

    let x = 1
    while (x < m){
        topP = topP.next
        x++
    }
    childBottom = topP

    let stack = []
    while (x <= n){
        childBottom = childBottom.next
        stack.push(childBottom)
        x++
    }
    bottomP = childBottom.next

    //翻转
    let l = stack.length
    for (let i = 0; i < l; i++){
        topP.next = stack.pop()
        topP = topP.next
    }
    topP.next = bottomP

    return top.next
}

// let { buildArrayFromLink, buildLinkFormArray, ListNode } = require("../../../utils/link")

// let x = buildArrayFromLink(
//     reverseBetween(
//         buildLinkFormArray([1, 2, 3, 4, 5]),
//         2,
//         4
//     )
// )

// let x1 = buildArrayFromLink(
//     reverseBetween(
//         buildLinkFormArray([1, 2, 3, 4, 5]),
//         1,
//         5
//     )
// )

// let x2 = buildArrayFromLink(
//     reverseBetween(
//         buildLinkFormArray([1, 2, 3, 4, 5]),
//         1,
//         2
//     )
// )

// console.log(x)
