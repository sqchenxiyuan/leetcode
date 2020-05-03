import java.util.*;

public class Solution {
    public int kthSmallest(int[][] mat, int k) {
        //维持前K个即可
        Map<Integer, Integer> pre = new HashMap<>();
        pre.put(0, 1);

        for(int i = 0; i < mat.length; i++){
            Map<Integer, Integer> next = new HashMap<>();
            //加入下一行计数
            for(int j = 0; j < mat[i].length; j++){
                for(int key : pre.keySet()){
                    next.put(key + mat[i][j], next.getOrDefault(key + mat[i][j], 0) + pre.get(key));
                }
            }

            //清楚K个之后的
            List<int[]> arr = new ArrayList<>();
            for(int key : next.keySet()){
                arr.add(new int[]{key, next.get(key)});
            }
            arr.sort(new Comparator<int[]>() {
                @Override
                public int compare(int[] a1, int[] a2) {
                    return a1[0] - a2[0];
                }
            });
            int count = 0;
            for(int[] cc : arr){
                if(count > k){
                    next.remove(cc[0]);
                }
                count += cc[1];
            }
            pre = next;
        }

        List<int[]> arr = new ArrayList<>();
        for(int key : pre.keySet()){
            arr.add(new int[]{key, pre.get(key)});
        }
        arr.sort(new Comparator<int[]>() {
            @Override
            public int compare(int[] a1, int[] a2) {
                return a1[0] - a2[0];
            }
        });
        int count = 0;
        for(int[] cc : arr){
            count += cc[1];
            if(count >= k){
                return cc[0];
            }
        }

        return 0;
    }

    public static void main(String[] args) {
        new Solution().kthSmallest(new int[][]{{1,3,11},{2,4,6}}, 5);
    }
}