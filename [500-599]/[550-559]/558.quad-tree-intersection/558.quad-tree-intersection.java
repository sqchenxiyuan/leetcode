public class Solution {
    public Node intersect(Node quadTree1, Node quadTree2) {
        if(quadTree1.isLeaf && quadTree2.isLeaf){
            return new Node(quadTree1.val || quadTree2.val, true, null, null, null, null);
        } else if(quadTree1.isLeaf) {
            if(quadTree1.val){
                return quadTree1;
            } else {
                return quadTree2;
            }
        } else if(quadTree2.isLeaf) {
            if(quadTree2.val){
                return quadTree2;
            } else {
                return quadTree1;
            }
        } else {
            Node tl = intersect(quadTree1.topLeft, quadTree2.topLeft);
            Node tr = intersect(quadTree1.topRight, quadTree2.topRight);
            Node bl = intersect(quadTree1.bottomLeft, quadTree2.bottomLeft);
            Node br = intersect(quadTree1.bottomRight, quadTree2.bottomRight);
            if(tl.val && tr.val && bl.val && br.val
             && tl.isLeaf && tr.isLeaf && bl.isLeaf && br.isLeaf){
                return new Node(
                        true,
                        true,
                        null,
                        null,
                        null,
                        null);
            }
            return new Node(
                    true,
                    false,
                    tl,
                    tr,
                    bl,
                    br);
        }
    }
}
