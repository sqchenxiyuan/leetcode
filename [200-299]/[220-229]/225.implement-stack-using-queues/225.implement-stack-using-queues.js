/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 */
/**
 * Initialize your data structure here.
 */
let MyStack = function() {
    this.current = null
    this.queue = []
}

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.current = x
    this.queue.push(x)
}

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let queue = this.queue
    let c
    for (let i = 0; i < queue.length - 1; i++){
        c = queue.shift()
        queue.push(c)
    }
    this.current = c
    return queue.shift()
}

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.current
}

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0
}

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

