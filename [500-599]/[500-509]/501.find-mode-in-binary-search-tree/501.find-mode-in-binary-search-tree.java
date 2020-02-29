/*
 * @lc app=leetcode id=501 lang=java
 *
 * [501] Find Mode in Binary Search Tree
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
import java.util.List;

public class Solution {
    interface SequentialTraversal {
        void run(TreeNode root);
    }

    public int[] findMode(TreeNode root) { //中序遍历，既是有序的列表
        List<Integer> arr = new ArrayList<>();
        SequentialTraversal sequentialTraversal = new SequentialTraversal() {
            public int max = 0;
            public int count = 0;
            public int preNum = Integer.MIN_VALUE;

            @Override
            public void run(TreeNode root) {
                if(root == null) return;

                this.run(root.left);
//                System.out.println(root.val + "|" +preNum);
                if(root.val == preNum){
                    count++;
                } else {
                    count = 1;
                }
                if(count >= max){
                    if(count > max){
                        max = count;
                        arr.clear();
                    }
                    arr.add(root.val);
                }

                preNum = root.val;
                this.run(root.right);
            }
        };
        sequentialTraversal.run(root);
        int[] result = new int[arr.size()];
        for(int i = 0; i < arr.size(); i++){
            result[i] = arr.get(i);
        }
        return result;
    }
}

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}
// @lc code=end

