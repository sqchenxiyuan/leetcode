/*
 * @lc app=leetcode id=332 lang=javascript
 *
 * [332] Reconstruct Itinerary
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
let findItinerary = function(tickets) {
    let nodeMap = {}
    tickets.forEach(([from, to]) => {
        if (!nodeMap[from]) nodeMap[from] = []
        if (!nodeMap[to]) nodeMap[to] = []
        nodeMap[from].push(to)
    })

    for (let key in nodeMap){
        nodeMap[key].sort((a, b) => { return a < b ? -1 : 1 })
    }

    let result = []

    function visit(airport){
        let node = nodeMap[airport]
        while (node.length > 0){
            let next = node.shift()
            visit(next)
        }
        result.push(airport)
    }
    visit("JFK")
    return result.reverse()
}
// @lc code=end

// console.log(findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]))
// console.log(findItinerary([["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]]))
