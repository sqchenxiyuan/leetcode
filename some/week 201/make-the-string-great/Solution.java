public class Solution {
    int d = 'a' - 'A';

    public String makeGood(String s) {
        char[] chars = s.toCharArray();
        char[] res = new char[chars.length];
        int n = 0;
        for(int i = 0; i < chars.length; i++){
            if(n == 0 || Math.abs(res[n - 1] - chars[i]) != d){
                res[n++] = chars[i];
            } else {
                n--;
            }
        }
        return String.valueOf(Arrays.copyOf(res, n));
    }

    public static void main(String[] args) {
        new Solution().makeGood("abBAcC");
    }
}