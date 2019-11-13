// Forward declaration of guess API.
// @param num, your guess
// @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
int guess(int num);

class Solution {
public:
    int guessNumber(int n) {
        long start = 1;
        long end = (long)n;
            
        while(1){
            long mid = (start + end) / 2;
            long g = guess(mid);
            if(g == 0) return mid;
            if(g == -1){
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        
    }
};