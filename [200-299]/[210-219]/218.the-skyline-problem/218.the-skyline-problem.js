/*
 * @lc app=leetcode id=218 lang=javascript
 *
 * [218] The Skyline Problem
 */
//用平衡二叉树效果更佳
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
let getSkyline = function(buildings) {
    let points = []
    //左右节点取出来
    buildings.forEach(building => {
        points.push([building[0], building[2]])
        points.push([building[1], -building[2]])
    })

    points.sort((a, b) => {
        if (a[0] === b[0]){
            return b[1] - a[1]
        }
        return a[0] - b[0]
    })

    let currentHeight = 0
    let heightStack = [0]
    let results = []

    for (let i = 0; i < points.length; i++){
        let [x, h] = points[i]
        if (h > 0){
            heightStack.push(h)
            if (h > currentHeight){
                currentHeight = h
                results.push([x, h])
            }
        } else {
            h = -h
            heightStack.splice(heightStack.indexOf(h), 1)
            nextMax = heightStack.reduce((max, h) => Math.max(max, h), 0)

            if (h === currentHeight && nextMax < currentHeight){
                currentHeight = nextMax
                results.push([x, nextMax])
            }
        }
    }

    return results
}

// let x1 = getSkyline([[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]])
// let x2 = getSkyline([[0, 2, 3], [2, 5, 3]])
// let x3 = getSkyline([[1, 2, 1], [1, 2, 2], [1, 2, 3]])
// console.log(123)

