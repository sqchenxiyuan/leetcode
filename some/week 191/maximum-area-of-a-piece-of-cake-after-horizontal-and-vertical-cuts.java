public class Solution {
    public int maxArea(int h, int w, int[] horizontalCuts, int[] verticalCuts) {
        Arrays.sort(horizontalCuts);
        Arrays.sort(verticalCuts);
        int pre = 0;
        long maxh = 0;
        for(int num : horizontalCuts){
            maxh = Math.max(num - pre, maxh);
            pre = num;
        }
        maxh = Math.max(h - pre, maxh);

        pre = 0;
        long maxv = 0;
        for(int num : verticalCuts){
            maxv = Math.max(num - pre, maxv);
            pre = num;
        }
        maxv = Math.max(w - pre, maxv);
        return (int)((maxh * maxv) % (1e9+7));
    }
}
