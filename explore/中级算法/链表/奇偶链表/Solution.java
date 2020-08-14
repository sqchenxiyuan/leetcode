class Solution {
    public ListNode oddEvenList(ListNode head) {
        ListNode oddHead = new ListNode(0);
        ListNode oddCur = oddHead;
        ListNode evenHead = new ListNode(0);
        ListNode evenCur = evenHead;

        while(head != null){
            oddCur.next = head;
            oddCur = head;
            head = head.next;
            evenCur.next = head;
            evenCur = head;
            if(head == null) break;
            head = head.next;
        }
        oddCur.next = evenHead.next;
        return oddHead.next;
    }
}