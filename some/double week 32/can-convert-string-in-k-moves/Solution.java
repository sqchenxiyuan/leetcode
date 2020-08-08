public class Solution {
	public boolean canConvertString(String s, String t, int k) {
		if(s.length() != t.length()) return false;
		int[] arr = new int[26];
		char[] sChars = s.toCharArray();
		char[] tChars = t.toCharArray();
		for(int i = 0; i < sChars.length; i++) {
			int x = (tChars[i] - sChars[i] + 26) % 26;
			if(x == 0) continue;
			x = x + arr[x] * 26;
			if(x > k) return false;
			arr[x % 26]++;
		}

		return true;
    }

}
