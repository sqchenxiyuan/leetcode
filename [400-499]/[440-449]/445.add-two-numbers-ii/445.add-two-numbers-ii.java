/*
 * @lc app=leetcode id=445 lang=java
 *
 * [445] Add Two Numbers II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
import java.util.Stack;

public class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        Stack<Integer> s1 = new Stack<>();
        Stack<Integer> s2 = new Stack<>();

        ListNode head1 = l1;
        while (head1 != null){
            s1.push(head1.val);
            head1 = head1.next;
        }

        ListNode head2 = l2;
        while (head2 != null){
            s2.push(head2.val);
            head2 = head2.next;
        }

        int up = 0;
        ListNode last = null;
        while (s1.size() > 0 || s2.size() > 0){
            int x1 = s1.size() > 0 ? s1.pop() : 0;
            int x2 = s2.size() > 0 ? s2.pop() : 0;

            int sum = x1 + x2 + up;
            ListNode node = new ListNode(sum % 10);
            node.next = last;
            last = node;
            up = sum / 10;
        }
        if(up > 0){
            ListNode node = new ListNode(up);
            node.next = last;
            last = node;
        }

        return last;
    }
}

class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
}
// @lc code=end

