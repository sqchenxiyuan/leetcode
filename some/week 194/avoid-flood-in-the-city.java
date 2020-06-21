import java.util.*;

public class Solution {
    public int[] avoidFlood(int[] rains) {
        int l = rains.length;
        int[] res = new int[l];
        Map<Integer, Integer> full = new HashMap<>();
        Queue<Integer> queue = new ArrayDeque<>();

        for(int i = 0; i < l; i++){
            int x = rains[i]; //水库编号
            if(x > 0){ //下雨
                res[i] = -1;
                if(full.containsKey(x)){ //水库有水
                    if(queue.isEmpty()){
                        return new int[0]; //哦吼
                    } else {
                        int pre = full.get(x);
                        boolean ok =false;
                        for(int z : queue){
                            if(z > pre){
                                res[z] = x; //利用签名的机会清空
                                ok = true;
                                queue.remove(z);
                                break;
                            }
                        }

                        if(!ok)return new int[0];
                    }

                }
                full.put(x, i);
            } else { //不下雨
                res[i] = 1;
                queue.add(i);
            }
        }
        return res;
    }

    public static void main(String[] args) {
        new Solution().avoidFlood(new int[]{1,2,0,0,2,1});
    }
}
