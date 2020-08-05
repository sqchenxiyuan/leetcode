class Solution {
    public int countPrimes(int n) {
        if(n < 3) return 0;
        boolean[] arr = new boolean[n];
        
        for(int i = 2; i * i < n; i++){
            if(arr[i]) continue;

            for(int j = 2; j * i < n; j++){
                arr[j * i] = true;
            }
        }

        int count = 0;
        for(int i =  2; i < n; i++){
            if(!arr[i]) count++;
        }

        return count;
    }
}