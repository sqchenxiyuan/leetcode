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
    function gcd(a, b){
        if (a === 0) return b
        if (b === 0) return a
        a = Math.abs(a)
        b = Math.abs(b)
        return gcd(b, a % b)
    }

    //获取两个数的最小分数
    function getFlag(p1, p2){
        let dx = p1[0] - p2[0]
        let dy = p1[1] - p2[1]

        let gcd = gcd(dy, dx)
        dx /= gcd
        dy /= gcd

        if (dy < 0){
            dx = -dx
            dy = -dy
        }

        if (dx === 0) return "---"

        return `${dx}=${dy}`
    }
    if (points.length < 3) return points.length

    let max = 2
    for (let i = 0; i < points.length; i++){
        let p = points[i]
        let pmax = 0
        let map = new Map()

        for (let j = 0; j < points.length; j++){
            let flag = getFlag(p, points[j])
            if (map.has(flag)){
                map.set(flag, map.get(flag) + 1)
            } else {
                map.set(flag, 2)
            }
            pmax = pmax.get(flag)
            pmax = Math.max(pmax, pmax)
        }
        max = Math.max(max, pmax)
    }

    return max
}

// console.log(maxPoints([[1, 1], [2, 2], [3, 3]]))
// console.log(maxPoints([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]))
// console.log(maxPoints([[1, 1], [1, 1], [2, 2], [2, 2]]))
// console.log(maxPoints([[3, 1], [12, 3], [3, 1], [-6, -1]]))
console.log(94911151 * 94911151)
console.log(maxPoints([[0, 0], [94911151, 94911150], [94911152, 94911151]]))