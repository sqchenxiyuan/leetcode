/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
let minWindow = function(s, t) {
    let left = 0
    let right = 0

    let need = {} //需要的数目
    let count = t.length //还需要标记的数目
    for (let i = 0; i < t.length; i++){
        need[t[i]] = (need[t[i]] || 0) + 1
    }

    //找到第一个符合条件的最右端
    while (right < s.length && count > 0){
        let c = s[right]
        if (need[c] != undefined){
            if (need[c] > 0) count--
            need[c]--
        }
        right++
    }

    //找完了也不行
    if (count > 0) return ""

    let min = [left, right]
    while (true){
        let c = s[left]
        if (need[c] === 0){
            count++
            need[c] = 1
            //滚动直到遇到c
            while (right < s.length && count > 0){
                let c2 = s[right]
                if (need[c2] != undefined){
                    if (need[c2] > 0) count--
                    need[c2]--
                }
                right++
            }
            if (count > 0) break
        } else if (need[c] < 0){
            need[c]++
        }
        left++
        if (left < s.length && right <= s.length){
            if (right - left < min[1] - min[0]){
                min = [left, right]
            }
        } else {
            break
        }
    }

    return s.slice(min[0], min[1])
}

// console.log(minWindow("ADOBECODEBANC", "ABC"))
// console.log(minWindow("ADOBECODEBANC", "ABXC"))
// console.log(minWindow("ADOBECODEBANCABC", "A"))

