/*
 * @lc app=leetcode id=275 lang=javascript
 *
 * [275] H-Index II
 */
/**
 * @param {number[]} citations
 * @return {number}
 */
// let hIndex = function(citations) {
//     let h = citations.length
//     for (let i = 0; i < citations.length; i++){
//         if (citations[i] >= h) break
//         h--
//     }

//     return h
// }

//二分法
let hIndex = function(citations) {
    let n = citations.length
    let i = 0, j = n - 1
    let h = 0
    while (i <= j){
        let mid = parseInt((i + j) / 2)
        if (n - mid >= citations[mid]){
            h = Math.max(h, citations[mid])
            i = mid + 1
        } else {
            h = Math.max(h, n - mid)
            j = mid - 1
        }
    }

    return h
}

console.log(hIndex([0, 1, 3, 5, 6]))