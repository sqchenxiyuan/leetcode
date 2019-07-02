/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */
/**
 * @param {number} capacity
 */
let LRUCache = function(capacity) {
    this.cache = {}
    this.keys = []
    this.capacity = capacity
}

LRUCache.prototype.updateKey = function(key){
    let index = this.keys.indexOf(key)
    if (index > -1){
        this.keys.splice(index, 1)
        this.keys.push(key)
    } else {
        if (this.capacity === this.keys.length){
            this.cache[this.keys.shift()] = null
        }
        this.keys.push(key)
    }
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache[key] == undefined){
        return -1
    } else {
        this.updateKey(key)
        return this.cache[key]
    }
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.updateKey(key)
    this.cache[key] = value
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// let cache = new LRUCache( 2 /* capacity */ )

// console.log(cache.put(1, 1))
// console.log(cache.put(2, 2))
// console.log(cache.get(1)) // returns 1
// console.log(cache.put(3, 3)) // evicts key 2
// console.log(cache.get(2)) // returns -1 (not found)
// console.log(cache.put(4, 4)) // evicts key 1
// console.log(cache.get(1)) // returns -1 (not found)
// console.log(cache.get(3)) // returns 3
// console.log(cache.get(4)) // returns 4
