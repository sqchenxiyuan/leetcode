class Solution {
    public ListNode sortList(ListNode head) {
        int n = getListLength(head);
        ListNode headPre = new ListNode();
        headPre.next = head;
        int l = 1;
        while(l < n){
            ListNode pre = headPre;
            while(true){
                ListNode l1 = pre.next;
                ListNode cur = l1;
                int i = l;
                while(i > 1 && cur != null){
                    cur = cur.next;
                    i--;
                }
                if(cur == null) break;
                ListNode l2 = cur.next;
                cur.next = null;
                cur = l2;
                i = l;
                while(i > 1 && cur != null){
                    cur = cur.next;
                    i--;
                }

                ListNode next = cur == null ? null : cur.next;
                if(cur != null) cur.next = null;
                
                ListNode newList = mergeList(l1, l2);
                pre.next = newList;
                while(newList.next != null) newList = newList.next;
                newList.next = next;
                pre = newList;
            }
            l = l * 2;
        }
        return headPre.next;
    }

    private int getListLength(ListNode node){
        int n = 0;
        while(node != null){
            n++;
            node = node.next;
        }
        return n;
    }

    private ListNode mergeList(ListNode l1, ListNode l2){
        ListNode head = new ListNode();
        ListNode cur = head;
        while(l1 != null || l2 != null){
            if(l1 == null){
                cur.next = l2;
                l2 = null;
            } else if(l2 == null) {
                cur.next = l1;
                l1 = null;
            } else if(l1.val < l2.val){
                cur.next = l1;
                l1 = l1.next;
            } else {
                cur.next = l2;
                l2 = l2.next;
            }
            cur = cur.next;
        }
        return head.next;
    }
}