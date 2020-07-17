class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode h = new ListNode(0);
        h.next = head;
        ListNode cur = h;
        ListNode[] arr = new ListNode[n + 1];
        int i = 0;
        while(cur != null){
            arr[i] = cur;
            i = (i + 1) % (n + 1);
            cur = cur.next;
        }

        arr[i].next = arr[i].next.next;
        
        return h.next;
    }
}