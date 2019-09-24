/*
 * @lc app=leetcode id=295 lang=javascript
 *
 * [295] Find Median from Data Stream
 */

function Heap(cmp = (a, b) => a - b){
    this.cmp = cmp

    this.data = [0]
    

    Object.defineProperty(this, "size", {
        get(){
            return this.data.length - 1
        }
    })

    Object.defineProperty(this, "top", {
        get(){
            return this.data[1]
        }
    })
}

Heap.prototype.push = function(num){
    let data = this.data
    let i = data.length
    data.push(num)
    while (i > 1){
        let pre = Math.floor(i / 2)
        if (this.cmp(data[i], data[pre]) > 0){
            [data[i], data[pre]] = [data[pre], data[i]]
            i = pre
        } else {
            break
        }
    }
}

Heap.prototype.pop = function(num){
    let data = this.data
    let popdata = data[1]
    
    data[1] = data[data.length - 1]
    data.length = data.length - 1

    let i = 1
    while (true){
        let left = i * 2
        let right = left + 1

        if (left >= data.length) break
        if (right >= data.length) right = left

        let max = left
        if (this.cmp(data[right], data[left]) > 0){
            max = right
        }

        if (this.cmp(data[max], data[i]) > 0){
            [data[i], data[max]] = [data[max], data[i]]
            i = max
        } else {
            break
        }
    }

    return popdata
}

/**
 * initialize your data structure here.
 */
let MedianFinder = function() {
    this.small = new Heap((a, b) => a - b) //最大堆， 中位数做堆顶，里面的都比中位数小
    this.big = new Heap((a, b) => b - a) //最小堆， 中位数做堆顶，里面的都比中位数大
}

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.small.push(num)
    this.big.push(this.small.pop())

    if (this.small.size < this.big.size){
        this.small.push(this.big.pop())
    }
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.small.size === this.big.size){
        return (this.small.top + this.big.top) / 2
    } else {
        return this.small.top
    }
}

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

// let x = new MedianFinder()
// x.addNum(6)
// console.log(x.findMedian())
// x.addNum(10)
// console.log(x.findMedian())
// x.addNum(2)
// console.log(x.findMedian())
// x.addNum(6)
// console.log(x.findMedian())
// x.addNum(5)
// console.log(x.findMedian())
// x.addNum(0)
// console.log(x.findMedian())
// x.addNum(6)
// console.log(x.findMedian())
// x.addNum(3)
// console.log(x.findMedian())
// x.addNum(1)
// console.log(x.findMedian())
// x.addNum(0)
// console.log(x.findMedian())
// x.addNum(0)
// console.log(x.findMedian())

// let x = new MedianFinder()
// x.addNum(1)
// console.log(x.findMedian())
// x.addNum(2)
// console.log(x.findMedian())
// x.addNum(3)
// console.log(x.findMedian())
// x.addNum(4)
// console.log(x.findMedian())
// x.addNum(5)
// console.log(x.findMedian())
// x.addNum(6)
// console.log(x.findMedian())
// x.addNum(7)
// console.log(x.findMedian())
// x.addNum(8)
// console.log(x.findMedian())
// x.addNum(9)
// console.log(x.findMedian())
// x.addNum(10)
// console.log(x.findMedian())


