/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */
/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
let cloneGraph = function(node) {
    let nodeMap = new Map()

    function generateGraphNode(node){
        if (nodeMap.has(node)) return nodeMap.get(node)
        let newNode = new Node(node.val, [])
        nodeMap.set(node, newNode)
        newNode.neighbors = node.neighbors.map(n => generateGraphNode(n))
        return newNode
    }

    return generateGraphNode(node)
}

