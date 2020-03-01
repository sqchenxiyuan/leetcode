/*
 * @lc app=leetcode id=502 lang=java
 *
 * [502] IPO
 */

// @lc code=start
import java.util.Comparator;
import java.util.PriorityQueue;

class Project{
    public int profit;
    public int capital;

    Project(int _profit, int _capital){
        profit = _profit; //利润
        capital = _capital; //启动资金
    }
}


public class Solution {
    public int findMaximizedCapital(int k, int w, int[] profits, int[] capitals) {
        PriorityQueue<Project> capitalQuene = new PriorityQueue<>(new Comparator<Project>() {
            @Override
            public int compare(Project p1, Project p2) {
                return p1.capital - p2.capital;
            }
        });

        for(int i = 0; i < profits.length; i++){
            capitalQuene.offer(new Project(profits[i], capitals[i]));
        }


        PriorityQueue<Project> profitQuene = new PriorityQueue<>(new Comparator<Project>() {
            @Override
            public int compare(Project p1, Project p2) {
                return p2.profit - p1.profit;
            }
        });

        while (k > 0){
            k--;
            while (capitalQuene.size() > 0){
                if(capitalQuene.peek().capital <= w){
                    profitQuene.offer(capitalQuene.poll());
                } else {
                    break;
                }
            }

            if(profitQuene.size() == 0)  break;;

            w += profitQuene.poll().profit;
        }

        return w;
    }
}
// @lc code=end

