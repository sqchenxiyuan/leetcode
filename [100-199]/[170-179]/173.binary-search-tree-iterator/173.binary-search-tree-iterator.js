/*
 * @lc app=leetcode id=173 lang=javascript
 *
 * [173] Binary Search Tree Iterator
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
 */
let BSTIterator = function(root) {
    let path = [] //存储以后可以作为自身的，也就是如果已经进入它的右边则出现
    let current = root

    this.root = root
    this.path = path
    if (current){
        while (current && current.left){
            this.path.push(current)
            current = current.left
        }
    }
    this.current = current
}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let current = this.current
    if (current === null) return null
    
    let currentVal = current.val
    let path = this.path

    if (current.right){ //自身为中间节点,下一个为左边最小
        //这个节点已经过去不在放入
        // path.push(current)
        current = current.right
        while (current.left){
            this.path.push(current)
            current = current.left
        }
        this.current = current
        return currentVal
    }

    let parent = path.pop()
    // let child = current
    //已经是最左边，向上找到不是最左的地方，父节点一定是可以作为后续内容的
    // while (parent && child === parent.right){
    //     child = parent
    //     parent = path.pop()
    // }

    if (parent){
        this.current = parent
    } else {
        this.current = null
    }

    return currentVal
}

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return !!this.current
}

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

