/*
 * @lc app=leetcode id=506 lang=java
 *
 * [506] Relative Ranks
 */

// @lc code=start
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

class Athlete{
    public int index;
    public int score;

    Athlete(int _index, int _score){
        index = _index;
        score = _score;
    }
}

public class Solution {
    public String[] findRelativeRanks(int[] nums) {
        List<Athlete> athletes = new ArrayList<>();
        for(int i = 0; i < nums.length; i++){
            athletes.add(new Athlete(i, nums[i]));
        }

        athletes.sort(new Comparator<Athlete>() {
            @Override
            public int compare(Athlete a1, Athlete a2) {
                return a2.score - a1.score;
            }
        });

        String[] result = new String[nums.length];
        for(int i = 0; i < nums.length; i++){
            int index = athletes.get(i).index;
            if(i == 0){
                result[index] = "Gold Medal";
            } else if(i == 1){
                result[index] = "Silver Medal";
            } else if(i == 2){
                result[index] = "Bronze Medal";
            } else {
                result[index] = String.valueOf(i + 1);
            }
        }
        return result;
    }
}
// @lc code=end

