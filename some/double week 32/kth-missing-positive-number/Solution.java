public class Solution {
	
	public int findKthPositive(int[] arr, int k) {
		for(int x : arr) {
			if(x <= k) {
				k++;
			} else {
				return k;
			}
		}
		return k;
    }
}
