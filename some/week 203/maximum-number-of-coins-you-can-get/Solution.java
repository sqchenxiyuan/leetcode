
class Solution {
    public int maxCoins(int[] piles) {
        Arrays.sort(piles);
        int sum = 0;
        for(int i = 0; i * 3 < piles.length; i++){
            sum += piles[piles.length - (i + 1) * 2];
        }
        return sum;
    }
}