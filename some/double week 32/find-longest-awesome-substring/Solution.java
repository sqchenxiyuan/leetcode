public class Solution {
	
	Map<Integer, Map<Integer, Integer>> cache = new HashMap<>();
	Set<Character>[] dp;
	
	public int longestAwesome(String s) {
		char[] chars = s.toCharArray();
		int n = chars.length;
		Map<String, Integer> map = new HashMap<>();
		char[] arr = new char[10];
		Arrays.fill(arr, '0');
		map.put(String.valueOf(arr), -1);

		int max = 1;
		for(int i = 0; i < n; i++) {
			int x = chars[i] - '0';
			arr[x] = arr[x] == '0' ? '1' : '0';
			
			for(int j = 0; j < 10; j++) {
                arr[j] = arr[j] == '0' ? '1' : '0';
                if(map.containsKey(String.valueOf(arr))) {
                    max = Math.max(max, i -map.get(String.valueOf(arr)));
                }
                arr[j] = arr[j] == '0' ? '1' : '0';
			}
			if(map.containsKey(String.valueOf(arr))) {
				max = Math.max(max, i - map.get(String.valueOf(arr)));
                
			} else {
				map.put(String.valueOf(arr), i);
			}
			
		}
		
		return max;
    }
	
}
