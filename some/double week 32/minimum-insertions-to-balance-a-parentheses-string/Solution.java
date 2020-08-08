public class Solution {
	public int minInsertions(String s) {
		char[] chars = s.toCharArray();
		
		int x = 0;
		int count = 0;
		for(int i = 0; i < chars.length; i++) {
			if(chars[i] == '(') {
				x++;
			} else { //")"
				if(x <= 0) { //))) => ()))
					x++;
					count++;
				}
				if(i < chars.length - 1 && chars[i + 1] == ')') {
					i++;
				} else {
					count++;
				}
				x--;
			}
		}
		return count + x * 2;
    }
}