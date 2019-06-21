/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
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
let sumNumbers = function(root) {
    if (!root) return 0
    let sum = 0
    function sumTreeNumberAndLevel(before, root){
        let next = before + root.val
        if (root.left == null && root.right == null){
            sum += next
        } else {
            next = next * 10
            root.left && sumTreeNumberAndLevel(next, root.left)
            root.right && sumTreeNumberAndLevel(next, root.right)
        }
    }
    sumTreeNumberAndLevel(0, root)

    return sum
}


