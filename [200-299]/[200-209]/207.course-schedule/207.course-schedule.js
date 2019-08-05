/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */
//看是否有环
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
let canFinish = function(numCourses, prerequisites) {
    let map = new Array(numCourses).fill(0).map(_ => new Array(numCourses).fill(false))
    prerequisites.forEach(([i, j]) => {
        map[i][j] = true
    })

    let visited = []
    let stack = []
    function hasCircle(index){
        if (visited[index]) return false
        if (stack[index]) return true
        stack[index] = true
        if (map[index].some((j, i) => j && hasCircle(i))){
            return true
        }
        stack[index] = false
        visited[index] = true
        return false
    }

    for (let i = 0; i < numCourses; i++){
        if (hasCircle(i)) return false
    }
    return true
}

// console.log(canFinish(2, [[1, 0]]))
// console.log(canFinish(2, [[1, 0], [0, 1]]))
