/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
let mergeKLists = function(lists) {
    if (lists.length === 0) return null
    if (lists.length === 1) return lists[0]

    let arr = []
    for (let i = 0; i < lists.length; i = i + 2){
        if (i === lists.length - 1){
            arr.push(lists[i])
        } else {
            let head = new ListNode(0)
            let current = head
            let listA = lists[i]
            let listB = lists[i + 1]

            while (listA && listB){
                if (listA.val > listB.val){
                    current.next = listB
                    current = listB
                    listB = listB.next
                } else {
                    current.next = listA
                    current = listA
                    listA = listA.next
                }
            }

            if (listA){
                current.next = listA
            } else {
                current.next = listB
            }

            arr.push(head.next)
        }
    }

    return mergeKLists(arr)
}

// let mergeKLists = function(lists) {
//     let l3 = null
//     let l3end = null
//     lists = lists.filter(list => list)

//     while (lists.length > 0){
//         let min = Infinity
//         let minIndex = null
//         lists.forEach((list, index) => {
//             if (list.val < min){
//                 min = list.val
//                 minIndex = index
//             }
//         })

//         let node = lists[minIndex]

//         if (l3end){
//             l3end.next = node
//         } else {
//             l3 = node
//         }
//         l3end = node

//         if (lists.length === 1) break

//         lists[minIndex] = node.next
//         if (!lists[minIndex]){
//             lists.splice(minIndex, 1)
//         }
//     }

//     return l3
// }
