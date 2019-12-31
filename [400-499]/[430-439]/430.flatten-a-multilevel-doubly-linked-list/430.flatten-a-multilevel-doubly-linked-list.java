/*
 * @lc app=leetcode id=430 lang=java
 *
 * [430] Flatten a Multilevel Doubly Linked List
 */

// @lc code=start
/*
// Definition for a Node.
class Node {
    public int val;
    public Node prev;
    public Node next;
    public Node child;
};
*/
class Node {
    public int val;
    public Node prev;
    public Node next;
    public Node child;
}

public class Solution {
    public Node flatten(Node head) {
        Node cur = head;
        while (cur != null){
            Node next = cur.next;

            //无子节点之间进入下一个
            if(cur.child == null){
                cur = next;
                continue;
            }

            //有子节点
            Node childStart = flatten(cur.child);
            Node childEnd = childStart;
            while (childEnd.next != null) childEnd = childEnd.next;
            if(next != null){
                childEnd.next = next;
                next.prev = childEnd;
            }
            cur.next = childStart;
            childStart.prev = cur;
            cur.child = null;
        }
        return head;
    }
}
// @lc code=end

