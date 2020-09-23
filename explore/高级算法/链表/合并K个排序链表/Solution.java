public class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        if(lists.length == 0) return null;
        if(lists.length == 1) return lists[0];
        int n = lists.length;
        ListNode[] next = new ListNode[(lists.length + 1) / 2];
        for(int i = 0; i < lists.length; i+=2){
            int j = i + 1;
            if(j >= n){
                next[i / 2] = lists[i];
            } else {
                next[i / 2] = mergeList(lists[i], lists[j]);
            }
        }
        return mergeKLists(next);
    }

    private ListNode mergeList(ListNode a, ListNode b){
        ListNode head = new ListNode();
        ListNode cur = head;
        while(a != null || b != null){
            if(a == null){
                cur.next = b;
                break;
            } else if(b == null){
                cur.next = a;
                break;
            } else if(a.val < b.val) {
                cur.next = a;
                a = a.next;
                cur = cur.next;
            } else {
                cur.next = b;
                b = b.next;
                cur = cur.next;
            }
        }
        return head.next;
    }
}