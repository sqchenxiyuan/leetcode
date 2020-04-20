
import java.util.Arrays;

public class Solution {
    private static int mod = 1000000007;

    public int numOfArrays(int n, int m, int k) {
        long[][][] cache = new long[n + 1][m + 1][k + 1];
        for(int i = 0; i <= n; i++){
            for(int j = 0; j <= m; j++){
                Arrays.fill(cache[i][j], -1);
            }
        }


        long res = 0;
        for(int i = 1; i <= m ; i++){
            res += help (n, i, k, cache);
            res = res % mod;
        }
        return (int)res;
    }


    private long help(int n, int m, int k, long[][][] cache){//n个数字  最大值为m 查找K次
        if(cache[n][m][k] != -1) return cache[n][m][k];

        long result = 0;

        if(n == 0 || m == 0 || k == 0){
            result = 0;
        } else if(n == 1 && k == 1){
            result = 1;
        } else{
            //最后一个为最大值m
            for(int i = 1; i < m; i++){
                result += help (n - 1, i, k - 1, cache);
                result = result % mod;
            }
            result += m * help (n - 1, m, k, cache); //最后一个不为最大值
            result = result % mod;

        }

        cache[n][m][k] = result;

        return result;
    }
}