class Solution {
    public int[][] merge(int[][] intervals) {
        if((intervals.length | 1) == 1) return intervals;
        int[][] res = new int[intervals.length][2];
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
        res[0] = intervals[0];
        int j = 1;
        for(int i = 1; i < intervals.length; i++){
            int[] pre = res[j - 1];
            int[] cur = intervals[i];
            if(cur[0] > pre[1]){
                res[j] = cur;
                j++;
            } else {
                pre[1] = Math.max(pre[1], cur[1]);
            }
        }
        return Arrays.copyOf(res, j);
    }
}