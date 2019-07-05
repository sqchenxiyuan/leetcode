/*
 * @lc app=leetcode id=149 lang=javascript
 *
 * [149] Max Points on a Line
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
let maxPoints = function(points) {
    //最大公约数
    function gdc(a, b){
        if (a % b === 0) return b
        return gdc(b, a % b)
    }

    let map = new Map()

    for (let i = 0; i < points.length; i++){
        for (let j = i + 1; j < points.length; j++){
            let pa = points[i]
            let pb = points[j]
            let dx = (pa[0] - pb[0])
            let dy = (pa[1] - pb[1])
            let k = dy / dx
        }
    }

}

maxPoints([[1, 1], [2, 2], [3, 3]])

