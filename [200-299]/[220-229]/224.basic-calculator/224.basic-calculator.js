/*
 * @lc app=leetcode id=224 lang=javascript
 *
 * [224] Basic Calculator
 */
/**
 * @param {string} s
 * @return {number}
 */
let calculate = function(s) {
    s = s.replace(/ /g, "")
    let stack = []

    function isNumber(c){
        return c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57
    }

    for (let i = 0; i < s.length;){
        let c = s[i]
        
        if (c === "+" || c === "-"){
            stack.push(c)
            i++
            continue
        }

        let cnum
        if (c === "("){
            let left = 1
            let right = 0

            let n = i + 1
            while (left !== right){
                if (s[n] === "(") left++
                if (s[n] === ")") right++
                n++
            }
            let numStr = s.slice(i + 1, n - 1)
            cnum = calculate(numStr)
            i = n
        } else if (isNumber(c)){
            let n = i + 1
            while (n < s.length && isNumber(s[n]))n++
            let numStr = s.slice(i, n)
            cnum = parseInt(numStr)
            i = n
        }

        if (stack.length > 0){
            let preAction = stack.pop()
            let prenum = stack.pop() || 0
            switch (preAction){
                case "+": cnum = prenum + cnum; break
                case "-": cnum = prenum - cnum; break
            }
        }

        stack.push(cnum)
    }

    return stack[0] || 0
}


// console.log(calculate("-1"))
// console.log(calculate("1 + 1"))
// console.log(calculate(" 2-1 + 2 "))
// console.log(calculate("(1+(4+5+2)-3)+(6+8)"))

