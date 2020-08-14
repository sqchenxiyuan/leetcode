public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        int l1 = getListLength(headA);
        int l2 = getListLength(headB);
        
        while(l1 > l2){
            headA = headA.next;
            l1--;
        }

        while(l1 < l2){
            headB = headB.next;
            l2--;
        }

        while(headA != null){
            if(headA == headB){
                return headA;
            }
            headA = headA.next;
            headB = headB.next;
        }

        return null;
    }

    private int getListLength(ListNode head){
        int l = 0;
        while(head != null) {
            l++;
            head = head.next;
        }
        return l;
    }
}