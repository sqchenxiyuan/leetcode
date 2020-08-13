class Solution {
    public int lengthOfLongestSubstring(String s) {
        int[] map = new int[256];
        Arrays.fill(map, -1);
        char[] chars = s.toCharArray();

        int max = 0;
        int left = 0;
        for(int right = 0; right < chars.length; right++){
            char c = chars[right];
            if(map[c] >= left){
                left = map[c] + 1;
            }
            map[c] = right;
            max = Math.max(max, right - left + 1 );
        }
        return max;
    }
}