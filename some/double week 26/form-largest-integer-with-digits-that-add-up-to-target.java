import java.util.Arrays;

class Result{
    int[] nums = new int[9];
    int count = 0;

    public Result copy(){
        Result r = new Result();
        r.count = count;
        r.nums = Arrays.copyOf(nums, nums.length);
        return r;
    }

    public boolean bigThan(Result r){
        if(count > r.count) return true;
        else if(count < r.count) return false;

        for(int i = 8; i >= 0; i--){
            if(nums[i] > r.nums[i]) return true;
            else if(nums[i] < r.nums[i]) return false;
        }
        return false;
    }

    public String toString(){
        StringBuilder sb = new StringBuilder();
        for(int i = 8; i >= 0; i--){
            for(int j = 0; j < nums[i]; j++){
                sb.append((char)('1' + i));
            }
        }
        return sb.toString();
    }
}

public class Solution {
    public String largestNumber(int[] cost, int target) {
        //dp[i] =
        Result[] dp = new Result[target + 1];
        dp[0] = new Result();

        for(int i = 1; i <= target; i++){
            Result cur = null;
            for(int j = 0; j < 9; j++){
                if(i - cost[j] < 0) continue;
                if(dp[i - cost[j]] == null) continue;;
                Result pre = dp[i - cost[j]].copy();
                pre.nums[j]++;
                pre.count++;
                if(cur == null || pre.bigThan(cur)){
                    cur = pre;
                }
            }
            dp[i] = cur;
        }

        return dp[target] == null ? "0" : dp[target].toString();
    }

    public static void main(String[] args) {
        new Solution().largestNumber(new int[]{4,3,2,5,6,7,2,5,5}, 9);
    }
}
