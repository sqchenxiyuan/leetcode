public class Solution {
    private int base = 1000000007;

    public int ways(String[] pizza, int k) {
        int m = pizza.length;
        if(m == 0) return 0;
        int n = pizza[0].length();
        if(n == 0) return 0;

        int[][] pizzaM = new int[m][n]; //有多少个
        for(int i = m - 1; i >= 0; i--){
            for(int j = n - 1; j >= 0; j--){
                int count = 0;
                if(pizza[i].charAt(j) == 'A'){
                    count++;
                }

                if(i == m - 1 && j == n - 1) {

                } else if(i == m - 1){
                    count += pizzaM[i][j + 1];
                } else if(j == n - 1){
                    count += pizzaM[i + 1][j];
                } else {
                    count +=  pizzaM[i + 1][j] + pizzaM[i][j + 1] - pizzaM[i + 1][j + 1];
                }

                pizzaM[i][j] = count;
            }
        }

        long[][] dp = new long[m][n];
        //k==0 最后一块必须有苹果
        for(int i = m - 1; i >= 0; i--){
            for(int j = n - 1; j >= 0; j--){
                if(i < m - 1 && dp[i + 1][j] == 1
                    || j < n - 1 && dp[i][j + 1] == 1
                    || pizzaM[i][j] > 0){
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = 0;
                }
            }
        }

        for(int x = 1; x < k; x++){
            long[][] next = new long[m][n];

            for(int i = m - 1; i >= 0; i--){
                for(int j = n - 1; j >= 0; j--){
                    long count = 0;

                    //横切
                    for(int y = i + 1; y < m; y++){
                        if(pizzaM[i][j] - pizzaM[y][j] > 0){
                            count = (count + dp[y][j]) % base;
                        }
                    }

                    //竖切
                    for(int y = j + 1; y < n; y++){
                        if(pizzaM[i][j] - pizzaM[i][y] > 0){
                            count = (count + dp[i][y]) % base;
                        }
                    }

                    next[i][j] = count;
                }
            }

            dp = next;
        }

        return (int)dp[0][0];
    }

    public static void main(String[] args) {
        new Solution().ways(new String[]{"A..","AAA","..."}, 3);
    }
}