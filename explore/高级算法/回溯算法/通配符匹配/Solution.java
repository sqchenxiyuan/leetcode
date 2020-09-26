class Solution {
    public boolean isMatch(String s, String p) {
        char[] sChars = s.toCharArray();
        char[] pChars = p.toCharArray();
        int sl = s.length();
        int pl = p.length();
        boolean[] tags = new boolean[pl + 1];
        tags[0] = true;
        for(int j = 1; j <= pl; j++){
            char pc = pChars[j - 1];
            if(pc == '*'){
                tags[j] = true;
            } else {
                break;
            }
        }

        for(int i = 1; i <= sl; i++){
            char sc = sChars[i - 1];
            boolean[] newTags = new boolean[pl + 1];
            for(int j = 1; j <= pl; j++){
                char pc = pChars[j - 1];
                if(pc == '*'){
                    newTags[j] = newTags[j - 1] || tags[j] || tags[j - 1];
                } else if(pc == '?'){
                    newTags[j] = tags[j - 1];
                } else {
                    if(sc == pc){
                        newTags[j] = tags[j - 1];
                    }
                }
            }
            tags = newTags; 
        }
        return tags[pl];
    }
}