/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
let generateTrees = function(n) {
    if (n === 0) return []

    function generateTreesNode(n, add){
        if (n === 0) return [null]

        let arr = []
        for (let i = 1; i <= n; i++){
            let lefts = generateTreesNode(i - 1, add)
            let rights = generateTreesNode(n - i, add + i)

            for (let x = 0; x < lefts.length; x++){
                for (let y = 0; y < rights.length; y++){
                    let head = new TreeNode(i + add)
                    head.left = lefts[x]
                    head.right = rights[y]
                    arr.push(head)
                }
            }
        }

        return arr
    }

    //生成树
    return generateTreesNode(n, 0)
}

// let x1 = generateTrees(1)
// let x2 = generateTrees(2)
// let x3 = generateTrees(3)
// let x4 = generateTrees(4)

// console.log(123)

