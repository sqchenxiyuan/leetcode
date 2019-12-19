/*
 * @lc app=leetcode id=413 lang=java
 *
 * [413] Arithmetic Slices
 */

// @lc code=start
public class Solution {
    public int numberOfArithmeticSlices(int[] A) {
        if(A.length < 3) return 0;
        int[] D = new int[A.length - 1];

        for(int i = 0; i < D.length; i++){
            D[i] = A[i + 1] - A[i];
        }

        int[] X = new int[D.length + 1]; //每个差距之间的变化 0表示 两个距离相等
        X[0] = -1;
        X[D.length] = -1;
        for(int i = 1; i < D.length; i++){
            X[i] = D[i] - D[i - 1];
        }

        int num = 0;
        for(int i = 0; i < X.length;){
            if(X[i] == 0){
                int count = 1;
                i++;
                while (X[i] == 0 && i < X.length) {
                    i++;
                    count++;
                }
                num += count * (count + 1) / 2;
            } else{
                i++;
            }
        }

        return num;
    }

    public static void main(String[] args) {
        System.out.println(new Solution().numberOfArithmeticSlices(new int[]{1, 2, 3, 4}));
    }
}
// @lc code=end

