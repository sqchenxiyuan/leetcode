public class Solution {

    private int count = 0;

    public int pseudoPalindromicPaths (TreeNode root) {
        boolean[] arr = new boolean[10];
        help(root, arr, 0);
        return count;
    }

    private void help(TreeNode root, boolean[] arr, int x){
        if(root == null) return;
        if(arr[root.val]){
            x--;
        } else {
            x++;
        }
        arr[root.val] = !arr[root.val];

        if(root.left == null && root.right == null){
            if(x == 0 || x == 1) count++;
        } else {
            if(root.left != null){
                help(root.left, arr, x);
            }
            if(root.right != null){
                help(root.right, arr, x);
            }
        }

        if(arr[root.val]){
            x--;
        } else {
            x++;
        }
        arr[root.val] = !arr[root.val];
    }
}
