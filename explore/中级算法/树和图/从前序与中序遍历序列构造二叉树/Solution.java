class Solution {
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        return helper(preorder, 0, preorder.length, inorder, 0, inorder.length);
    }

    private TreeNode helper(int[] preorder, int preLeft, int preRight, int[] inorder, int inLeft, int inRight){
        if(preLeft >= preRight) return null;
        TreeNode root = new TreeNode(preorder[preLeft]);
        
        int leftLength = 0;
        while(inLeft + leftLength < inRight && preorder[preLeft] != inorder[inLeft + leftLength]) leftLength++;

        root.left = helper(preorder, preLeft + 1, preLeft + 1 + leftLength, inorder, inLeft, inLeft + leftLength);
        root.right = helper(preorder, preLeft + 1 + leftLength, preRight, inorder, inLeft + leftLength + 1, inRight);
        return root;
    }
}