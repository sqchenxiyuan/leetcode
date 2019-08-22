/*
 * @lc app=leetcode id=227 lang=javascript
 *
 * [227] Basic Calculator II
 */
/**
 * @param {string} s
 * @return {number}
 */
let calculate = function(s) {
    s = s.replace(/ /g, "")
    let preOperation = "+"
    let stack = []

    function isNumber(c){
        return c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57
    }

    for (let i = 0; i < s.length; i++){
        let c = s[i]

        if (isNumber(c)){
            let n = i + 1
            while (n < s.length && isNumber(s[n])) n++
            let num = parseInt(s.slice(i, n))
            if (preOperation === "+") stack.push(num)            
            else if (preOperation === "-") stack.push(-num)
            else {
                let num1 = stack.pop()
                if (preOperation === "*") stack.push(num1 * num)
                else if (preOperation === "/") stack.push(parseInt(num1 / num))
            }            
            i = n - 1
        } else {
            preOperation = c
        }
    }
    // console.log(stack)
    return stack.reduce((sum, num) => sum + num, 0)
}

// console.log(calculate("3+2*2"))
// console.log(calculate(" 3/2 "))
// console.log(calculate(" 3+5 / 2 "))

