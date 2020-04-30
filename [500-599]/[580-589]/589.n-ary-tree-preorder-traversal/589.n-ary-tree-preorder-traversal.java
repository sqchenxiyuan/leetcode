/*
 * @lc app=leetcode.cn id=589 lang=java
 *
 * [589] N叉树的前序遍历
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
import java.util.ArrayList;
import java.util.List;


public class Solution {
    public List<Integer> preorder(Node root) {
        List<Integer> res = new ArrayList<>();
        preorder(res, root);
        return res;
    }

    public void preorder(List<Integer> list, Node root) {
        if(root == null) return;
        list.add(root.val);
        for(Node child : root.children){
            preorder(list, child);
        }
    }
}
// @lc code=end

