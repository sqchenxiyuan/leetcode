let longestPalindrome = function(s) {

    s = '.' + s.split('').join('.') + '.';

    let length = s.length;
    let p = new Array(length);
    let ci = 0;
    let cw = 0;

    p[0] = 0;

    for (let i = 0; i < length ; i++){
        let l = 0;
        if (p[ci] + ci >= i){
            if (i + p[ci * 2 - i] < cw){
                p[i] = p[ci * 2 - i];
                continue;
            }
            l = cw - i;
        }

        for (;
            i - l >= 0 &&
            i + l < length &&
            s[i + l] === s[i - l];
            l++);

        p[i] = l - 1;

        if (p[i] >= p[ci]){
            ci = i;
            cw = p[i] + i;
        }

    }

    return s.substring(ci - p[ci], ci + p[ci] + 1).split('').filter((data, index) => {
        if (1 === index % 2){
            return true;
        } else {
            return false;
        }
    }).join('');
};

console.log(longestPalindrome("cbbd"));