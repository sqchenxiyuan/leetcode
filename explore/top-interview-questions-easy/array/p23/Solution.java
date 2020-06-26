
public class Solution {
    public void rotate(int[] nums, int k) {
        int len = nums.length;
        int x = gcd(len, k);

        for(int i = 0; i < x; i++){
            int cur = (i + k) % len;
            int num = nums[i];
            while (true){
                int c = nums[cur];
                nums[cur] = num;
                num = c;
                if(cur == i) break;
                cur = (cur + k) % len;
            }
        }
    }

    private int gcd(int a, int b){
        while (b != 0){
            int x = a % b;
            a = b;
            b = x;
        }
        return a;
    }
}
