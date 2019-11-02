/*
 * @lc app=leetcode id=352 lang=javascript
 *
 * [352] Data Stream as Disjoint Intervals
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
let SummaryRanges = function() {
    this.intervals = []
}

/** 
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(val) {
    //结合二分查找可以实现logn
    let intervals = this.intervals
    let outArr = []
    let inArr = []

    for (let i = 0; i < intervals.length; i++){
        let [left, right] = intervals[i]
        if (val < left - 1 || right + 1 < val){ //不在当中
            outArr.push([left, right])
        } else if (val === left - 1){
            inArr.push([left - 1, right])
        } else if (val === right + 1){
            inArr.push([left, right + 1])
        } else {
            inArr.push([left, right])
        }
    }

    if (inArr.length === 0){
        outArr.push([val, val])
    } else {
        let nleft = Infinity, nright = -Infinity
        inArr.forEach(([left, right]) => {
            nleft = Math.min(nleft, left)
            nright = Math.max(nright, right)
        })
        outArr.push([nleft, nright])
    }
    outArr.sort((a, b) => a[0] - b[0])
    this.intervals = outArr
}

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
    return this.intervals
}

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */
// @lc code=end

// let x = new SummaryRanges()
// x.addNum(1)
// x.addNum(3)
// x.addNum(7)
// x.addNum(2)
// x.addNum(6)
// console.log(123)