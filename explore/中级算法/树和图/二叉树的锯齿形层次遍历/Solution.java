class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> res = new ArrayList<>();
        help(res, root, 0);
        return res;
    }

    private void help(List<List<Integer>> res, TreeNode root, int deep){
        if(root == null) return; 
        if(res.size() == deep){
            res.add(new ArrayList<>());
        }
        if(deep % 2 == 0){
            res.get(deep).add(root.val);
        } else{
            res.get(deep).add(0, root.val);
        }
        help(res, root.left, deep + 1);
        help(res, root.right, deep + 1);
    }
}