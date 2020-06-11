/*
 * @lc app=leetcode.cn id=655 lang=java
 *
 * [655] 输出二叉树
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
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Solution {
    public List<List<String>> printTree(TreeNode root) {
        int m = treeDeep(root);
        int n = (int)Math.pow(2, m) - 1;
        String[][] map = new String[m][n];
        for(int i = 0; i < m; i++){
            Arrays.fill(map[i], "");
        }

        draw(root, map, 0, 0, m);

        List<List<String>> res = new ArrayList<>();
        for(int i = 0; i < m; i++){
            res.add(Arrays.asList(map[i]));
        }

        return res;
    }

    private int treeDeep(TreeNode root){
        if(root == null) return 0;
        return Math.max(treeDeep(root.left), treeDeep(root.right)) + 1;
    }

    private void draw(TreeNode root, String[][] map, int left, int deep, int maxDeep){
        if(root == null) return;
        int len = (int)Math.pow(2, maxDeep - deep) - 1;

        int center = left + len / 2;
        map[deep][center] = String.valueOf(root.val);
        draw(root.left, map, left, deep + 1, maxDeep);
        draw(root.right, map, center + 1, deep + 1, maxDeep);
    }
}

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}
// @lc code=end

