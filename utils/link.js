//链表节点
function ListNode(val) {
    this.val = val
    this.next = null
}

//从树组构造链表
function buildLinkFormArray(arr){
    let nodes = arr.map(_ => new ListNode(_))
    for (let i = 0; i < nodes.length - 1; i++){
        nodes[i].next = nodes[i + 1]
    }
    return nodes[0]
}

//链表构造数值
function buildArrayFromLink(link){
    let arr = []
    let now = link
    while (now) {
        arr.push(now.val)
        now = now.next
    }
    return arr
}

module.exports = {
    ListNode,
    buildLinkFormArray,
    buildArrayFromLink
}

 