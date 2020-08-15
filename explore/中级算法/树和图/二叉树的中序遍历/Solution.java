class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        help(res, root);
        return res;
    }

    private void help(List<Integer> res, TreeNode root){
        if(root == null) return;
        help(res, root.left);
        res.add(root.val);
        help(res, root.right);
    }
}