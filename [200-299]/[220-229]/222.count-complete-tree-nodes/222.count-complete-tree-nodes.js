/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let countNodes = function(root, leftCount, rightCount) {
    if (!root) return 0
    
    if (leftCount == null){
        leftCount = 0
        let current = root
        while (current) {
            current = current.left
            leftCount++
        }
    }

    if (leftCount == null){
        rightCount = 0
        let current = root
        while (current) {
            current = current.right
            rightCount++
        }
    }

    if (leftCount === rightCount) return Math.pow(2, leftCount) - 1
    else return countNodes(root.left, leftCount - 1) 
        + countNodes(root.right, null, rightCount - 1) 
        + 1
}

