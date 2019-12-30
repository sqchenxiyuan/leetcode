/*
 * @lc app=leetcode id=427 lang=java
 *
 * [427] Construct Quad Tree
 */

// @lc code=start
/*
// Definition for a QuadTree node.
class Node {
    public boolean val;
    public boolean isLeaf;
    public Node topLeft;
    public Node topRight;
    public Node bottomLeft;
    public Node bottomRight;

    public Node() {}

    public Node(boolean _val,boolean _isLeaf,Node _topLeft,Node _topRight,Node _bottomLeft,Node _bottomRight) {
        val = _val;
        isLeaf = _isLeaf;
        topLeft = _topLeft;
        topRight = _topRight;
        bottomLeft = _bottomLeft;
        bottomRight = _bottomRight;
    }
};
*/
class Node {
    public boolean val;
    public boolean isLeaf;
    public Node topLeft;
    public Node topRight;
    public Node bottomLeft;
    public Node bottomRight;

    public Node() {}

    public Node(boolean _val,boolean _isLeaf,Node _topLeft,Node _topRight,Node _bottomLeft,Node _bottomRight) {
        val = _val;
        isLeaf = _isLeaf;
        topLeft = _topLeft;
        topRight = _topRight;
        bottomLeft = _bottomLeft;
        bottomRight = _bottomRight;
    }
};

public class Solution {
    public Node construct(int[][] grid) {
        int N = grid.length;

        return construct(grid, 0,0, N, N);
    }

    private Node construct(int[][] grid, int top, int left, int bottom, int right){
        if(top + 1 == bottom && left + 1 == right){
            Node node = new Node();
            node.isLeaf = true;
            node.val = (grid[top][left] == 1);
            return node;
        }

        int nextSize = (bottom - top) / 2;
        Node topLeft = construct(grid, top, left, top + nextSize, left + nextSize);
        Node topRight = construct(grid, top, left + nextSize, top + nextSize, right);
        Node bottomLeft = construct(grid, top + nextSize, left, bottom, left + nextSize);
        Node bottomRight = construct(grid, top + nextSize, left + nextSize, bottom, right);

        if(topLeft.isLeaf &&
            topRight.isLeaf &&
            bottomLeft.isLeaf &&
            bottomRight.isLeaf){
            if(topLeft.val == topRight.val &&
                    topRight.val == bottomLeft.val &&
                    bottomRight.val == bottomLeft.val){
                Node node = new Node();
                node.isLeaf = true;
                node.val = topLeft.val;
                return node;
            }
        }
        return new Node(false, false, topLeft, topRight, bottomLeft, bottomRight);
    }
}
// @lc code=end

