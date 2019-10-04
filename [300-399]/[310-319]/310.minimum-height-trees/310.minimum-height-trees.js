/*
 * @lc app=leetcode id=310 lang=javascript
 *
 * [310] Minimum Height Trees
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
let findMinHeightTrees = function(n, edges) {
    //关系图
    let map = {} 
    
    edges.forEach(([i, j]) => {
        if (!map[i])map[i] = {}
        if (!map[j])map[j] = {}
        map[i][j] = true
        map[j][i] = true
    })
    
    let cache = {}
    function getDirectTreeHeight(i, j){
        if (!cache[i]) cache[i] = {}
        if (cache[i][j]) return cache[i][j]
        let max = 1
        for (let key in map[j]){
            key = parseInt(key)
            if (key === i) continue
            max = Math.max(max, getDirectTreeHeight(j, key) + 1)
        }
        cache[i][j] = max
        return cache[i][j]
    }

    let min = Infinity
    let minArr = []

    for (let i = 0; i < n; i++){
        let max = 1
        for (let j in map[i]){
            j = parseInt(j)
            max = Math.max(getDirectTreeHeight(i, j), max)
        }
        if (max < min){
            min = max
            minArr = [i]
        } else if (max === min) {
            minArr.push(i)
        }
        console.log(i, max)
    }

    return minArr
}


// console.log(findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]]))
// console.log(findMinHeightTrees(6, [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]))
// @lc code=end

