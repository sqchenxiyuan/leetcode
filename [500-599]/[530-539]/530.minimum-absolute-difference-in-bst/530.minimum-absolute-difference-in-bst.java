/*
 * @lc app=leetcode id=530 lang=java
 *
 * [530] Minimum Absolute Difference in BST
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
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

interface Traversal{
    void run(TreeNode root);
}

public class Solution {
    public int getMinimumDifference(TreeNode root) {
        final int[] preNum = new int[]{Integer.MAX_VALUE};
        final int[] min = new int[]{Integer.MAX_VALUE};
        new Traversal() {
            @Override
            public void run(TreeNode root) {
                if(root == null) return;
                this.run(root.left);

                if(preNum[0] > root.val){
                } else {
                    min[0] = Math.min(min[0], root.val - preNum[0]);
                }
                preNum[0] = root.val;


                this.run(root.right);
            }
        }.run(root);

        return min[0];
    }
}
// @lc code=end

