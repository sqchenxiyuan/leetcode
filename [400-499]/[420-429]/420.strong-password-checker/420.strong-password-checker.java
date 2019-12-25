/*
 * @lc app=leetcode id=420 lang=java
 *
 * [420] Strong Password Checker
 */

// @lc code=start
public class Solution {
    public int strongPasswordChecker(String s) {
        int res = 0, a = 1, A = 1, d = 1;
        char[] chars = s.toCharArray();
        int[] arr = new int[chars.length];

        for(int i = 0; i < chars.length;){
            if(Character.isLowerCase(chars[i])) a = 0;
            if(Character.isUpperCase(chars[i])) A = 0;
            if(Character.isDigit(chars[i])) d = 0;

            int j = i;
            while (i < chars.length && chars[i] == chars[j]) i++;
            arr[j] = i - j;
        }

        int missing = a + A + d;

        if(chars.length < 6){ //小于6个即使是5个连着相同的也只需要插入一个就可以分割,因此只需要插入即可
            res = missing + Math.max(0, 6 - (chars.length + missing));
        } else {
            int over_len = Math.max(chars.length - 20, 0), left_over = 0;
            res = over_len; //必然执行的删除操作

            //将重复的字符串 删减为 3m+2的形式，这样只需要m次替换就可以完成
            for (int k = 1; k < 3; k++){
                for(int i = 0; i < arr.length && over_len > 0; i++){
                    if(arr[i] < 3 || arr[i] % 3 != (k - 1)) continue;
                    arr[i] -= Math.min(over_len, k);
                    over_len -= k;
                }
            }

            for (int i = 0; i < arr.length; i++) {
                //依然存在过长的情况，就删除重复字符串
                if (arr[i] >= 3 && over_len > 0) {
                    int need = arr[i] - 2;
                    arr[i] -= over_len;
                    over_len -= need;
                }

                if (arr[i] >= 3) left_over += arr[i] / 3;
            }

            res += Math.max(missing, left_over);
        }

        return res;
    }
}
// @lc code=end
