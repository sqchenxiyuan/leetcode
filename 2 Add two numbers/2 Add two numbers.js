/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
    let result = null;
    let now;
    let newNode;
    let i = l1, 
        j = l2, 
        x, 
        y = 0;

    while (true){
        x = i.val + j.val + y;
        if (x >= 10){
            y = 1;
        } else {
            y = 0;
        }
        
        newNode = new ListNode(x % 10);
        if (result){
            now.next = newNode;
            now = newNode;
        } else {
            result = newNode;
            now = result;
        }
        
        if (y === 0){
            if (!i.next){
                now.next = j.next
                break
            }
    
            if (!j.next){
                now.next = i.next
                break
            }
        }
        
        
        if (i.next) i = i.next
        else i = new ListNode(0)
        if (j.next) j = j.next
        else j = new ListNode(0)
    }
    
    return result
};