/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */
/**
 * initialize your data structure here.
 */
let MinStack = function() {
    this.stack = []
    this.min = Infinity
}

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (x <= this.min){
        this.stack.push(this.min)
        this.min = x
    }
    this.stack.push(x)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let x = this.stack.pop()
    if (x === this.min){
        this.min = this.stack.pop()
    }
    return x
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

