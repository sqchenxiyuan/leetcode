public class Solution {
    private boolean isNumber(char c) {
        return '0' <= c && c <= '9';
    }
    
    public String decodeString(String s) {
       StringBuilder sb = new StringBuilder();
       
       for(int i = 0; i < s.length(); i++) {
           char c = s.charAt(i);
           
           if (isNumber(c)) {
               int b = i + 1;
               while (isNumber(s.charAt(b)))b++;
               int count = Integer.valueOf(s.substring(i, b));
               
               int closeCount = 0;
               int closeIndex = b;
               for(;;closeIndex++) {
                   char fc = s.charAt(closeIndex);
                   if(fc == '[') closeCount++;
                   else if(fc == ']') {
                       closeCount--;
                       if(closeCount == 0) {
                           break;
                       }
                   }
               }
               String reString = decodeString(s.substring(b + 1, closeIndex));
               while (count > 0) {
                   count--;
                   sb.append(reString);
               }
               i = closeIndex;
           } else {
               sb.append(c);
           }
       }
       
       return sb.toString();
    }
}