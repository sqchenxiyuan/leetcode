/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 */
/**
 * @param {number} n
 * @return {number}
 */
let numTrees = function(n) {
    let cache = []
    cache[0] = 1
    cache[1] = 1

    for (let i = 2; i <= n; i++){
        let count = 0
        for (let j = 1; j <= i; j++){
            let leftcount = cache[j - 1]
            let rightcount = cache[i - j]
            count += leftcount * rightcount
        }
        cache[i] = count
    }

    return cache[n]
}

// console.log(numTrees(1))
// console.log(numTrees(2))
// console.log(numTrees(3))
// console.log(numTrees(4))
// console.log(numTrees(5))

