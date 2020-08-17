class Solution {
    private int num = 1;
    private int data = 0;

    public int kthSmallest(TreeNode root, int k) {
        help(root, k);
        return data;
    }

    private boolean help(TreeNode root, int k){
        if(root == null) return false;
        if(help(root.left, k)) return true;
        if(num == k){
            data = root.val;
            return true;
        }
        num++;
        if(help(root.right, k)) return true;
        return false;
    }
}