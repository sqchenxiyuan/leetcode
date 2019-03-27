/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val
    this.next = null
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd = function(head, n) {
    let arr = []
    while (1){
        arr.push(head)
        head = head.next
        if (!head) break
    }

    if (arr.length === n){
        return arr[1] || null
    } else {
        arr[arr.length - n - 1].next = arr[arr.length - n].next
        return arr[0]
    }
}

//测试一
let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(4)
let node5 = new ListNode(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

let out = removeNthFromEnd(node1, 2)