/*
 * @lc app=leetcode id=210 lang=javascript
 *
 * [210] Course Schedule II
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
let findOrder = function(numCourses, prerequisites) {
    let map = new Array(numCourses).fill(0).map(_ => new Array())
    prerequisites.forEach(([i, j]) => {
        map[i].push(j)
    })

    let visited = []
    let stack = []
    let result = []
    function find(index){
        if (visited[index]) return true
        if (stack[index]) return false
        stack[index] = true
        if (map[index].some(j => !find(j))){
            return false
        }
        stack[index] = false
        result.push(index)
        visited[index] = true
        return true
    }

    for (let i = 0; i < numCourses; i++){
        if (visited[i]) continue
        if (!find(i)) return []
    }
    return result
}

// console.log(findOrder(2, [[1, 0]]))
// console.log(findOrder(2, [[1, 0], [0, 1]]))
// console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]))

