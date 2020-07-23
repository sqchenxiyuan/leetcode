class Solution {

    private int pre = 0;
    private boolean start = false;

    public boolean isValidBST(TreeNode root) {
        return help(root);
    }

    private boolean help(TreeNode root){
        if(root == null) return true;
        if(!help(root.left)) return false;
        if(start && pre >= root.val) return false;
        start = true;
        pre = root.val;
        return help(root.right);
    }
}