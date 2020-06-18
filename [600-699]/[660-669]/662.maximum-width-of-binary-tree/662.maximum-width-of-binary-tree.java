/*
 * @lc app=leetcode.cn id=662 lang=java
 *
 * [662] 二叉树最大宽度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
import java.util.HashMap;
import java.util.Map;

public class Solution {
    int max = 0;
    Map<Integer, Integer> leftMap = new HashMap<>();

    public int widthOfBinaryTree(TreeNode root) {
        help(root, 0, 1);
        return max;
    }

    private void help(TreeNode root, int deep, int num){
        if(root == null) return;
        if(!leftMap.containsKey(deep)){
            leftMap.put(deep, num);
        }
        int left = leftMap.get(deep);
        max = Math.max(num - left + 1, max);
        help(root.left, deep + 1, num * 2);
        help(root.right, deep + 1, num * 2 + 1);
    }
}
// @lc code=end

