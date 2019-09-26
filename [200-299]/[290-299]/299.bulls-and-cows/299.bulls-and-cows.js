/*
 * @lc app=leetcode id=299 lang=javascript
 *
 * [299] Bulls and Cows
 */
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
let getHint = function(secret, guess) {
    let bulls = 0
    let cows = 0

    let cache = new Array(10).fill(0)
    for (let i = 0; i < secret.length; i++){
        let secretC = secret.charCodeAt(i) - 48
        let guessC = guess.charCodeAt(i) - 48

        if (secretC === guessC){
            bulls++
        } else {
            if (cache[guessC] > 0) cows++
            if (cache[secretC] < 0) cows++

            cache[secretC]++
            cache[guessC]--
        }
    }

    return `${bulls}A${cows}B`
}

