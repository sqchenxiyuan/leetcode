/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
let serialize = function(root) {
    //深度遍历
    let arr = []
    function dft(node){
        if (node){
            arr.push(node.val)
            dft(node.left)
            dft(node.right)
        } else {
            arr.push("N")
        }
    }
    dft(root)

    return arr.join(",")
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
let deserialize = function(data) {
    let arr = data.split(",")

    let i = 0
    function dtfBuild(){
        if (arr[i] === "N"){
            return null
        }

        let node = new TreeNode(parseInt(arr[i]))
        i++
        node.left = dtfBuild()
        i++
        node.right = dtfBuild()

        return node
    }

    return dtfBuild()
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// function TreeNode(val) {
//     this.val = val
//     this.left = this.right = null
// }
// let treeBuilder = function(data) {
//     let nodes = data.map(val => {
//         return val != null ? new TreeNode(val) : null
//     })
//     nodes.unshift(0)

//     for (let i = 1; i < nodes.length; i++){
//         let node = nodes[i]
//         if (!node) continue
//         node.left = nodes[i * 2] || null
//         node.right = nodes[i * 2 + 1] || null
//     }

//     return nodes[1]
// }
// let tree = treeBuilder([1, 2, 3, null, null, 4, 5])
// let data = serialize(tree)
// let ntree = deserialize(data)
// console.log(123)

