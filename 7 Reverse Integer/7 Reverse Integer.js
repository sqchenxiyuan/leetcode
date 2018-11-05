let reverse = function(x) {
    let flag = 1
    x = String(x).split("")
    if (x[0] === "-"){
        flag = -1
        x.shift()
    }
    x = x.reverse().join("")
    x = parseInt(x)
    if (x > Math.pow(2, 31)){
        return 0
    }
    return x * flag
}

console.log(reverse(-123))
