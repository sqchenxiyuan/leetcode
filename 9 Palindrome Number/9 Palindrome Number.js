let isPalindrome = function(x) {
    if (x < 0) return false;//负数不是回文数字
    if (x < 10) return true;//个位数必定为回文数字

    let l = 0;
    let data = x;
    while (data){
        data = Math.floor(data / 10);
        l++;
    }

    let head = l;
    let end = 1;

    while (head > end){
        if (getNumberPdata(x, head) !== getNumberPdata(x, end)){
            return false;
        }
        head--;
        end++;
    }

    return true;
};

function getNumberPdata(num, p){
    if (p !== 1){
        num = Math.floor(num / Math.pow(10, p - 1));
    }
    return num % 10;
}

console.log(isPalindrome(1021201));
// console.log(getNumberPdata(12345, 5));
