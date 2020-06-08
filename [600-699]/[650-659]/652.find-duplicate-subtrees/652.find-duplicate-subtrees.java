/*
 * @lc app=leetcode.cn id=652 lang=java
 *
 * [652] 寻找重复的子树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
import java.util.*;

class TreeNode {
  int val;
  TreeNode left;
  TreeNode right;
  TreeNode() {}
  TreeNode(int val) { this.val = val; }
  TreeNode(int val, TreeNode left, TreeNode right) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

public class Solution {
    private Map<String, TreeNode> map = new HashMap<>();
    private Set<TreeNode> viewed = new HashSet<>();

    public List<TreeNode> findDuplicateSubtrees(TreeNode root) {
        help(root);

        return new ArrayList<>(viewed);
    }

    public String help(TreeNode node){
        if(node == null) return "";
        String x = node.val + "|" + help(node.left) + "|" + help(node.right);

        if(map.containsKey(x)){
            viewed.add(map.get(x));
        } else {
            map.put(x, node);
        }
        return x;
    }

}
// @lc code=end

