/*
 * @lc app=leetcode id=381 lang=javascript
 *
 * [381] Insert Delete GetRandom O(1) - Duplicates allowed
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
let RandomizedCollection = function() {
    this.arr = []
    this.map = new Map()
}

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    let arr = this.arr
    let map = this.map
    if (!map.has(val)) map.set(val, new Set())
    let set = map.get(val)
    set.add(arr.length)
    arr.push(val)
    return set.size === 1
}

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    let arr = this.arr
    let map = this.map
    if (!map.has(val) || map.get(val).size === 0) return false
    let set = map.get(val)
    let targetIndex = set[Symbol.iterator]().next().value
    set.delete(targetIndex)

    let last = arr[arr.length - 1]
    arr[targetIndex] = last
    map.get(last).add(targetIndex)
    map.get(last).delete(arr.length - 1)

    arr.length = arr.length - 1
    return true
}

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    let size = this.arr.length
    let r = Math.floor(Math.random() * size) % size
    return this.arr[r]
}

/** 
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

// let x = new RandomizedCollection()
// let arr = [
//     x.insert(4),
//     x.insert(3),
//     x.insert(4),
//     x.insert(2),
//     x.insert(4),
//     x.remove(4),
//     x.remove(3),
//     x.remove(4),
//     x.remove(4),
// ]
// console.log(123)