/*
 * @lc app=leetcode id=109 lang=javascript
 *
 * [109] Convert Sorted List to Binary Search Tree
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
let sortedListToBST = function(head) {
    let copy = new ListNode()
    let copynow = copy
    while (head){
        copynow.next = new ListNode(head.val)
        copynow = copynow.next
        head = head.next
    }
    copy = copy.next

    function listToBST(list){
        if (list === null) return null

        //寻找中点
        let now = list
        let mid = list
        let lastMid = null
        while (now && now.next){
            lastMid = mid
            mid = mid.next
            now = now.next.next
        }
        if (lastMid) lastMid.next = null

        let root = new TreeNode(mid.val)
        root.left = listToBST(lastMid ? list : null)
        root.right = listToBST(mid.next)
        return root
    }

    return listToBST(copy)
}

