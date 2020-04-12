/*
 * @lc app=leetcode id=559 lang=java
 *
 * [559] Maximum Depth of N-ary Tree
 */

// @lc code=start
/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/

import java.util.List;

public class Solution {

    public int maxDepth(Node root) {
        if(root == null) return 0;
        int deep = 0;
        for(Node node : root.children){
            deep = Math.max(deep, maxDepth(node));
        }
        deep++;
        return deep;
    }
}
// @lc code=end

