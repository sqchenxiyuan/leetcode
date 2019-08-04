/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false
    
    let map = {}
    let rmap = {}

    for (let i = 0; i < s.length; i++){
        let sc = s[i]
        let tc = t[i]
        if (map[sc]){
            if (tc === map[sc]) continue
            return false
        }

        if (rmap[tc]) return false
        map[sc] = tc
        rmap[tc] = sc
    }

    return true
}

// console.log(isIsomorphic("egg", "add"))
// console.log(isIsomorphic("eggbb", "adddd"))
// console.log(isIsomorphic("foo", "bar"))
// console.log(isIsomorphic("paper", "title"))

