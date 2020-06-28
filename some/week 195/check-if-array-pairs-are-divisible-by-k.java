public class Solution {
    public boolean canArrange(int[] arr, int k) {
        int[] map = new int[k];

        for(int i = 0; i < arr.length; i++){
            arr[i] =  arr[i] >= 0 ? arr[i] % k : (arr[i] % k + k) % k;
            map[arr[i]]++;
        }

        for(int i = 0; i <= k / 2; i++){
            if(i == 0){
                if(map[i] % 2 != 0) return false;
            } else if(i * 2 == k){
                if(map[i] % 2 != 0) return false;
            } else {
                if(map[i] != map[k - i]) return false;
            }
        }

        return true;
    }
}
