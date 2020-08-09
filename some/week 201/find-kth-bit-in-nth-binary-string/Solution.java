public class Solution {
    int[] nc = new int[30];

    public char findKthBit(int n, int k) {
        if(n == 1) return '0';
        int x = len(n - 1);
        if(k <= x){
            return findKthBit(n - 1, k);
        } else if(k == x + 1){
            return '1';
        } else {
            return findKthBit(n - 1, x - (k - x - 1) + 1) == '0' ? '1' : '0';
        }
    }

    private int len(int n){
        if(n == 1) return 1;
        return len(n - 1) * 2 + 1;
    }
}