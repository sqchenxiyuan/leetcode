function ListNode(val) {
    this.val = val
    this.next = null
}

// /**
//  * @param {ListNode} head
//  * @param {number} k
//  * @return {ListNode}
//  */
// let reverseKGroup = function(head, k) {
//     let start = new ListNode(0)
//     start.next = head
//     let now = start
    
//     while (1){
//         let arr = []

//         let n = now
//         let next
//         for (let i = 0; i < k; i++){
//             n = n.next
//             if (n){
//                 arr.push(n)
//             } else {
//                 break
//             }
//         }
//         n && (n = n.next)

//         if (arr.length === k){
//             while (arr.length){
//                 now.next = arr.pop()
//                 now = now.next
//             }
//             now.next = n
//         } else {
//             break
//         }
//     }

//     return start.next
// }

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
let reverseKGroup = function(head, k) {
    let start = new ListNode(0)
    start.next = head
    
    let n = 0
    let now = start
    let arr = []
    while (now.next && n < k){
        n++
        now = now.next
        arr.push(now)
    }
    let end = now.next

    if (n === k){
        let i = k
        while (i-- > 1){
            arr[i].next = arr[i - 1]
        }
        start.next = arr[k - 1]
        arr[0].next = reverseKGroup(end, k)
    }

    return start.next
}


let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(4)
let node5 = new ListNode(5)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

reverseKGroup(node1, 2)