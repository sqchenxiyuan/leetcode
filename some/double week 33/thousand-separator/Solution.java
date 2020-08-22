class Solution {
    public String thousandSeparator(int n) {
        String res = "";
        int count = 0;
        while(n > 0){
            if(count == 3) {
                res = "." + res;
                count = 0;
            }
            res = String.valueOf(n % 10) + res;
            count++;
            n = n / 10;
        }
        if(res.length() == 0){
            res = "0";
        }
        return res;
    }
}