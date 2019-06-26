/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
let copyRandomList = function(head) {
    let map = new Map()

    function clone(node){
        if (node === null) return null
        if (map.has(node)) return map.get(node)
        let newNode = new Node(node.val, null, null)
        map.set(node, newNode)
        newNode.next = clone(node.next)
        newNode.random = clone(node.random)
        return newNode
    }

    return clone(head)
}

