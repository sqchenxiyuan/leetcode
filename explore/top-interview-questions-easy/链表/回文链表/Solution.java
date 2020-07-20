class Solution {
    public boolean isPalindrome(ListNode head) {
        if(head == null || head.next == null) return true;
        int l = 0;
        ListNode one = head;

        while(one != null){
            l++;
            one = one.next;
        }

        int i = 1;
        one = head;
        while(i < l / 2) {
            i++;
            one = one.next;
        };
        ListNode l2 = one.next;
        if(l % 2 == 1) l2 = l2.next;
        one.next = null;
        ListNode l1 = reverse(head);

        while(l1 != null){
            if(l1.val != l2.val) return false;
            l1 = l1.next;
            l2 = l2.next;
        }
        return true;
    }

    private ListNode reverse(ListNode head){
        ListNode pre = null;
        while(head != null){
            ListNode next = head.next;
            head.next = pre;
            pre = head;
            head = next;
        }
        return pre;
    }
}