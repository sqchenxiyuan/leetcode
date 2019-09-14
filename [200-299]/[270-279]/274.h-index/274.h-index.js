/*
 * @lc app=leetcode id=274 lang=javascript
 *
 * [274] H-Index
 */
/**
 * @param {number[]} citations
 * @return {number}
 */
//排序的方法
// let hIndex = function(citations) {
//     citations.sort((a, b) => a - b)
//     let h = citations.length
//     for (let i = 0; i < citations.length; i++){
//         if (citations[i] >= h) break
//         h--
//     }

//     return h
// }


//计数
let hIndex = function(citations) {
    let n = citations.length
    let arr = new Array(n + 1).fill(0) //存储数值的数量，最后一个存储为大于等于的数目

    for (let i = 0; i < n; i++){
        let num = Math.min(citations[i], n)
        arr[num]++
    }

    let h = 0
    let count = 0 //比当前大的数目
    for (let i = n; i >= 0; i--){
        count += arr[i]
        h = Math.max(h, Math.min(count, i))
    }

    return h
}


// console.log(hIndex([3, 0, 6, 1, 5]))
// console.log(hIndex([0]))
// console.log(hIndex([2]))

