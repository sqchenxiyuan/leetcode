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
* @param {number[]} pre
* @param {number[]} post
* @return {TreeNode}
*/
let constructFromPrePost = function(pre, post) {
    if (pre.length === 0) return null
    let head = new TreeNode(pre[0])
    let left = null
    let leftlength = 0

    for (let i = 0; i < post.length; i++){
        if (post[i] === pre[1]){
            leftlength = i + 1
            left = constructFromPrePost(pre.slice(1, 1 + leftlength), post.slice(0, leftlength))
            break
        }
    }
    let right = constructFromPrePost(pre.slice(1 + leftlength), post.slice(leftlength, -1))

    head.left = left
    head.right = right

    return head
}

let x = constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1])
console.log(x)