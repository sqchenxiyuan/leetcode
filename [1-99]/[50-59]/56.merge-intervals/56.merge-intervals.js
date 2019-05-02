/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
let merge = function(intervals) {
    if (intervals.length === 0) return []
    if (intervals.length === 1) return intervals

    intervals = intervals.slice()
    intervals.sort((a, b) => {
        if (a[0] === b[0]){
            return a[1] - b[1]
        }
        return a[0] - b[0]
    })

    let result = [intervals[0]]
    for (let i = 1; i < intervals.length; i++){
        let last = result[result.length - 1]
        let now = intervals[i]
        if (last[1] >= now[0]){
            last[1] = Math.max(last[1], now[1])
        } else {
            result.push(now)
        }
    }

    return result
}

// let x = merge([[1, 3], [2, 6], [8, 10], [15, 18]])
// let x1 = merge([[1, 4], [4, 5]])
// let x2 = merge([])
// console.log(x)

