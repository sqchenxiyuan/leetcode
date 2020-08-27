import java.util.*;

public class Codec {

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        List<String> arr = new ArrayList<>();
        serialize(root, arr);
        return String.join(",", arr);
    }

    private void serialize(TreeNode root, List<String> arr){
        if(root == null){
            arr.add("#");
            return;
        }
        arr.add(String.valueOf(root.val));
        serialize(root.left, arr);
        serialize(root.right, arr);
    }

    private int i = 0;
    private String[] arr;

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        i = 0;
        arr = data.split(",");
        return deserializeHelp();
    }


    private TreeNode deserializeHelp() {
        String v = arr[i++];
        if(v.equals("#")) return null;
        TreeNode node = new TreeNode(Integer.valueOf(v));
        node.left = deserializeHelp();
        node.right = deserializeHelp();
        return node;
    }
}