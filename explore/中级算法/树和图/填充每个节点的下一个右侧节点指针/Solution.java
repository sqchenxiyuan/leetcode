class Solution {
    public Node connect(Node root) {
        Map<Integer, Node> map = new HashMap<>();
        help(map, root, 0);
        return root;
    }

    private void help(Map<Integer, Node> map, Node root, int deep){
        Node pre = map.getOrDefault(deep, null);
        if(pre != null){
            pre.next = root;
        }
        if(root == null) return;
        map.put(deep, root);
        help(map, root.left, deep + 1);
        help(map, root.right, deep + 1);
    }
}