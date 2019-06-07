/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
 * @return {number[][]}
 */
let zigzagLevelOrder = function(root) {
    let result = []
    function setLevelData(root, level){
        if (root === null) return
        if (result[level] == undefined) result[level] = []
        result[level].push(root.val)
        setLevelData(root.left, level + 1)
        setLevelData(root.right, level + 1)
    }
    setLevelData(root, 0)

    for (let i = 0; i < result.length; i++){
        if (i % 2 === 1){
            result[i].reverse()
        }
    }
    
    return result
}

