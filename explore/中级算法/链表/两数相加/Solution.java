class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode pre = new ListNode(0);
        ListNode cur = pre;
        int sum = 0;
        while(l1 != null || l2 != null){
            int x = 0;
            int y = 0;
            if(l1 != null){
                x = l1.val;
                l1 = l1.next;
            }
            if(l2 != null){
                y = l2.val;
                l2 = l2.next;
            }
            sum = sum + x + y;
            ListNode n = new ListNode(sum % 10);
            sum = sum / 10;
            cur.next = n;
            cur = n;
        }
        if(sum > 0){
            cur.next = new ListNode(sum);
        }
        return pre.next;
    }
}