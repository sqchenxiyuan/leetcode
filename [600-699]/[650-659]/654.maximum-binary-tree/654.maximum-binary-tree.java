/*
 * @lc app=leetcode.cn id=654 lang=java
 *
 * [654] 最大二叉树
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
public class Solution {
    public TreeNode constructMaximumBinaryTree(int[] nums) {
        return help(nums, 0, nums.length - 1);
    }

    private TreeNode help(int[] nums, int left, int right){
        if(left > right) return null;
        if(left == right) return new TreeNode(nums[left]);
        int maxI = left;
        for(int i = left + 1; i <= right; i++){
            if(nums[i] > nums[maxI]){
                maxI = i;
            }
        }

        TreeNode node = new TreeNode(nums[maxI]);
        node.left = help(nums, left, maxI - 1);
        node.right = help(nums, maxI + 1, right);

        return node;
    }
}

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}
// @lc code=end

