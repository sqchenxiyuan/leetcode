/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
let insert = function(intervals, newInterval) {
    if (intervals.length === 0) return [newInterval]
    //两个二分查找能找到的地方

    function findIndex(intervals, num){
        if (intervals[0][0] > num) return -1
        if (intervals[intervals.length - 1][1] < num) return intervals.length

        let index = -1 //右边的包含区间
        let left = 0
        let right = intervals.length - 1

        while (left <= right){
            let mid = parseInt((left + right) / 2)

            if (intervals[mid][0] <= num
                && intervals[mid][1] >= num){
                index = mid
                break
            }

            if (intervals[mid][0] > num){
                right = mid - 1
            } else if (mid < intervals.length - 1){
                if (intervals[mid][1] < num
                    && intervals[mid + 1][0] > num){
                    index = mid + 0.5
                    break
                } else if (intervals[mid + 1][0] <= num){
                    left = mid + 1
                }
            }
        }

        return index
    }

    let leftIndex = findIndex(intervals, newInterval[0])
    let rightIndex = findIndex(intervals, newInterval[1])
    let left = newInterval[0]
    let right = newInterval[1]
    if (leftIndex >= 0 && leftIndex < intervals.length){
        if (parseInt(leftIndex) === leftIndex){
            left = Math.min(left, intervals[leftIndex][0])
        } else {
            leftIndex += 0.5
        }
    }

    if (rightIndex >= 0 && rightIndex < intervals.length){
        if (parseInt(rightIndex) === rightIndex){
            right = Math.max(left, intervals[rightIndex][1])
        } else {
            rightIndex -= 0.5
        }
    }


    let results = intervals.slice()
    if (leftIndex === -1 && rightIndex === -1){
        results.unshift([left, right])
    } else if (leftIndex === intervals.length && rightIndex === intervals.length){
        results.push([left, right])
    } else {
        if (leftIndex === -1) leftIndex = 0
        if (rightIndex === -1) rightIndex = 0
        if (leftIndex === intervals.length) leftIndex = intervals.length - 1
        if (rightIndex === intervals.length) rightIndex = intervals.length - 1
        results.splice(leftIndex, parseInt(rightIndex - leftIndex + 1), [left, right])
    }

    return results
}

// let x = insert([[1, 3], [6, 9]], [2, 5])
// let x = insert([], [5, 7])
// let x1 = insert([[5, 7]], [4, 8])
// let x1 = insert([[4, 8]], [5, 7])
// let x1 = insert([[1, 3], [6, 9]], [4, 5])
// let x2 = insert([[1, 3], [6, 9]], [0, 0])
// let x3 = insert([[1, 3], [6, 9]], [10, 11])
// let x4 = insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])

// console.log(123)
