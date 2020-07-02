import java.util.Arrays;

public class Solution {
    public int[] plusOne(int[] digits) {
        int[] res = new int[digits.length + 1];
        int pre = 1;
        for(int i = digits.length - 1; i >= 0; i--){
            int sum = digits[i] + pre;
            pre = sum / 10;
            res[i + 1] = sum % 10;
        }
        res[0] = pre;
        if(res[0] == 0) res = Arrays.copyOfRange(res, 1, res.length);
        return res;
    }
}
