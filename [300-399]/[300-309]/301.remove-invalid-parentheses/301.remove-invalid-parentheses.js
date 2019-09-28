/*
 * @lc app=leetcode id=301 lang=javascript
 *
 * [301] Remove Invalid Parentheses
 */
/**
 * @param {string} s
 * @return {string[]}
 */
let removeInvalidParentheses = function(s) {
    let set = new Set()
    set.add(s)

    //从左到右去除)
    let len = s.length
    let left = 0
    let rmNum = 0
    for (let i = 0; i < len; i++){
        if (s[i] === "("){
            left++
        } else if (s[i] === ")"){
            left--
        } else {
            continue
        }

        if (left < 0){ //多了个) 对已存在的数据进行修复
            let arr = [...set]
            let newSet = new Set()
            arr.forEach(str => {
                for (let j = 0; j <= i - rmNum; j++){
                    if (str[j] === ")"){
                        newSet.add(str.substring(0, j) + str.substring(j + 1))
                    }
                }
            })
            set = newSet
            rmNum++
            left = 0
        }
    }

    //从右到左去除(
    s = [...set][0]
    len = s.length
    let right = 0
    rmNum = 0
    for (let i = len - 1; i >= 0; i--){
        if (s[i] === "("){
            right--
        } else if (s[i] === ")"){
            right++
        } else {
            continue
        }

        if (right < 0){ //多了个) 对已存在的数据进行修复
            let arr = [...set]
            let newSet = new Set()
            arr.forEach(str => {
                for (let j = len - 1 - rmNum; j >= i; j--){
                    if (str[j] === "("){
                        newSet.add(str.substring(0, j) + str.substring(j + 1))
                    }
                }
            })
            set = newSet
            rmNum++
            right = 0
        }
    }

    return [...set]
}


// let x1 = removeInvalidParentheses("()())()")
// let x2 = removeInvalidParentheses("(a)())()")
// let x3 = removeInvalidParentheses(")(")
// let x4 = removeInvalidParentheses("(a)())()(()")
// console.log(123)

