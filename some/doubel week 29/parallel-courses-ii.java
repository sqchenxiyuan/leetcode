import java.util.*;

public class Solution {
    public int minNumberOfSemesters(int n, int[][] dependencies, int k) {
        Set<Integer> notViewed = new HashSet<>();

        //谁依赖于我
        Map<Integer, Set<Integer>> depMe = new HashMap<>();

        //依赖于谁
        Map<Integer, Set<Integer>> depWho = new HashMap<>();

        Set<Integer> couldViewed = new HashSet<>();

        for(int i = 1; i <= n; i++){
            notViewed.add(i);
            couldViewed.add(i);
            depMe.put(i, new HashSet<>());
            depWho.put(i, new HashSet<>());
        }

        for(int[] dependent : dependencies){
            depMe.get(dependent[0]).add(dependent[1]);
            depWho.get(dependent[1]).add(dependent[0]);
            couldViewed.remove(dependent[1]);
        }

        int count = 0;
        while (!notViewed.isEmpty()){
            List<Integer> x = new ArrayList<>(couldViewed);
            x.sort((a, b) -> depMe.get(b).size() - depMe.get(a).size());

            for(int i = 0; i < k && i < x.size(); i++){
                int c = x.get(i);//学习这门课
                notViewed.remove(c);
                couldViewed.remove(c); //学会了
                for(int d : depMe.get(c)){ //依赖的课程减少
                    depWho.get(d).remove(c);
                    if(depWho.get(d).size() == 0){
                        couldViewed.add(d);
                    }
                }
            }
            count++;
        }

        return count;
    }
}