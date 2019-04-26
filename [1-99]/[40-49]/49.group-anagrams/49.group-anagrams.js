/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function(strs) {
    let arr = []
    let paths = {}

    strs.forEach(str => {
        let features = getFeatures(str)
        let path = paths
        features.forEach(num => {
            if (!path[num]) path[num] = {}
            path = path[num]
        })

        if (!path.arr){
            path.arr = []
            arr.push(path.arr)
        }

        path.arr.push(str)
    })

    function getFeatures(str){
        let len = str.length
        let arr = new Array(26).fill(0)
        for (let i = 0; i < len; i++){
            let code = str.charCodeAt(i) - 97
            arr[code]++
        }
        return arr
    }

    return arr
}

// let x = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
// console.log(123)
