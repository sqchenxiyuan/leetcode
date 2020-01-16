/*
 * @lc app=leetcode id=449 lang=java
 *
 * [449] Serialize and Deserialize BST
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
import java.util.Arrays;
import java.util.List;

public class Codec {

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        List<String> operations = new ArrayList<>();
        serializeErgodic(operations, root);
        StringBuilder sb = new StringBuilder();
        for(String str : operations){
            sb.append(str);
            sb.append("|");
        }
        return sb.toString().substring(0, sb.length());
    }

    private void serializeErgodic(List<String> operations, TreeNode node){
        if(node == null) {
            operations.add("N");
            return;
        }

        operations.add(String.valueOf(node.val));
        serializeErgodic(operations, node.left);
        serializeErgodic(operations, node.right);
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        if(data.length() == 0) return null;
        List<String> operations = Arrays.asList(data.split("\\|"));

        return deserializeErgodic(operations, new int[]{0});
    }

    private TreeNode deserializeErgodic(List<String> operations, int[] ids){
        if(operations.size() <= ids[0]) return null;
        String head = operations.get(ids[0]);
        if(head.equals("N")) return null;

        TreeNode node = new TreeNode(Integer.valueOf(head));
        ids[0]++;
        node.left = deserializeErgodic(operations, ids);
        ids[0]++;
        node.right = deserializeErgodic(operations, ids);

        return node;
    }

    public static void main(String[] args) {
        Codec c = new Codec();
        TreeNode node1 = new TreeNode(2);
        TreeNode node2 = new TreeNode(1);
        TreeNode node3 = new TreeNode(3);
        node1.left = node2;
        node1.right = node3;
        String x = c.serialize(node1);
        TreeNode out = c.deserialize(x);
        System.out.println("123");
    }
}

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}
// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
// @lc code=end

