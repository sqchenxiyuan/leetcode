/*
 * @lc app=leetcode id=451 lang=java
 *
 * [451] Sort Characters By Frequency
 */

// @lc code=start
import java.util.*;

public class Solution {

    class Helper{
        char a;
        int b;

        Helper(char a, int b){
            this.a = a;
            this.b = b;
        }
    }

    public String frequencySort(String s) {
        int[] map = new int[Character.MAX_VALUE + 1];
        Arrays.fill(map, 0);

        for(char c : s.toCharArray()){
            map[c]++;
        }

        List<Helper> list = new ArrayList<Helper>();
        for(int i = 0; i <= Character.MAX_VALUE; i++){
            if(map[i] > 0){
                list.add(new Helper((char)i, map[i]));
            }
        }

        list.sort(new Comparator<Helper>() {
            @Override
            public int compare(Helper o1, Helper o2) {
                return o2.b - o1.b;
            }
        });

        StringBuilder sb = new StringBuilder();
        for(Helper t : list){
            char[] arr = new char[t.b];
            Arrays.fill(arr, t.a);
            sb.append(arr);
        }
        return sb.toString();
    }
}
// @lc code=end

