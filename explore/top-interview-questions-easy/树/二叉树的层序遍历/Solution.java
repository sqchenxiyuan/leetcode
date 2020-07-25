class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> res = new ArrayList<>();
        helper(root, res, 0);
        return res;
    }

    private void helper(TreeNode root, List<List<Integer>> res, int deep){
        if(root == null) return;
        if(res.size() == deep) res.add(new ArrayList<>());
        res.get(deep).add(root.val);
        helper(root.left, res, deep + 1);
        helper(root.right, res, deep + 1);
    }
}