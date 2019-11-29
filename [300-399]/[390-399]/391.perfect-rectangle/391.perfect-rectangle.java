import java.util.HashSet;
import java.util.Set;

public class Solution {
	
	//除了四个角的每个点出现必然被抵消
	//所有面积之和为每个小矩形的面积之和
	public boolean isRectangleCover(int[][] rectangles) {
		int minX = Integer.MAX_VALUE;
		int maxX = Integer.MIN_VALUE;
		int minY = Integer.MAX_VALUE;
		int maxY = Integer.MIN_VALUE;
		
		int sum = 0;
		
		Set<String> set = new HashSet<>();
		
		for(int[] rectangle : rectangles) {
			int x1 = rectangle[0];
			int y1 = rectangle[1];
			int x2 = rectangle[2];
			int y2 = rectangle[3];
			
			sum += (x2 - x1) * (y2 - y1);
			
			minX = Math.min(minX, x1);
			minY = Math.min(minY, y1);
			maxX = Math.max(maxX, x2);
			maxY = Math.max(maxY, y2);
			
			String s1 = x1 + "|" + y1;
			String s2 = x1 + "|" + y2;
			String s3 = x2 + "|" + y1;
			String s4 = x2 + "|" + y2;
			
			if(!set.add(s1)) set.remove(s1);
			if(!set.add(s2)) set.remove(s2);
			if(!set.add(s3)) set.remove(s3);
			if(!set.add(s4)) set.remove(s4);
		}
		
		if(set.contains(minX + "|" + minY)
			&& set.contains(minX + "|" + maxY)
			&& set.contains(maxX + "|" + minY)
			&& set.contains(maxX + "|" + maxY)
			&& set.size() == 4) return (maxX - minX) * (maxY - minY) == sum;
		
		
		return false;
    }

}