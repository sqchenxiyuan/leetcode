/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
let reorderList = function(head) {
    let arr = []
    let now = head
    while (now){
        arr.push(now)
        now = now.next
    }

    for (let i = 0; i < parseInt(arr.length / 2); i++){
        arr[i].next = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i].next = arr[i + 1]
        arr[i + 1].next = null
    }

    return head
}

