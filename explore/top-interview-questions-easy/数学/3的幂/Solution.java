class Solution {
    public boolean isPowerOfThree(int n) {
        if(n <= 0) return false;
        // int max = (int)Math.pow(3, (int)(Math.log(Integer.MAX_VALUE)/Math.log(3)));
        return 1162261467 % n == 0;
    }
}