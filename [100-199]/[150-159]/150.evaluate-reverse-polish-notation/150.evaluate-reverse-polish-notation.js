/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
let evalRPN = function(tokens) {
    let stack = []
    for (let i = 0; i < tokens.length; i++){
        let token = tokens[i]
        if (token === "+"
            || token === "-"
            || token === "*"
            || token === "/"){
            let a = stack.pop()
            let b = stack.pop()
            let c
            switch (token){
                case "+":c = b + a; break 
                case "-":c = b - a; break
                case "*":c = b * a; break
                case "/":c = parseInt(b / a); break
            }
            stack.push(c)
        } else {
            stack.push(parseInt(token))
        }
    }
    return stack.pop()
}

// console.log(evalRPN(["2", "1", "+", "3", "*"]))
// console.log(evalRPN(["4", "13", "5", "/", "+"]))
// console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))

