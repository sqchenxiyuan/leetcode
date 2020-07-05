public class Solution {
    public int getLastMoment(int n, int[] left, int[] right) {
        int max = 0;
        for(int l : left){
            max = Math.max(l, max);
        }

        for(int r : right){
            max = Math.max(n - r, max);
        }

        return max;
    }
}