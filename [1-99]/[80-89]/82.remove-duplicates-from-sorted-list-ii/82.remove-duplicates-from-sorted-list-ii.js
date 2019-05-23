/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
let deleteDuplicates = function(head) {
    let first = new ListNode()
    let fnow = first
    let now = head
    while (now){
        if (!now.next || now.next && now.val !== now.next.val){
            fnow.next = now
            fnow = now
        }

        while (now.next && now.next.val == now.val){
            now = now.next
        }
        now = now.next
    }
    fnow.next = null
    return first.next
}

// function buildLink(arr){
//     let nodes = arr.map(_ => new ListNode(_))
//     for (let i = 0; i < nodes.length - 1; i++){
//         nodes[i].next = nodes[i + 1]
//     }
//     return nodes[0]
// }

// let x = deleteDuplicates(buildLink([1, 2, 3, 3, 4, 4, 5]))
// let x = deleteDuplicates(buildLink([1, 2, 2]))
// console.log(123)
