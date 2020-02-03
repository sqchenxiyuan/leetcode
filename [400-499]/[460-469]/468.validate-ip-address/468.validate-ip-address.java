/*
 * @lc app=leetcode id=468 lang=java
 *
 * [468] Validate IP Address
 */

// @lc code=start
import java.util.regex.Pattern;

public class Solution {
    private static Pattern ip4Pattern = Pattern.compile("^((2(5[0-5]|[0-4][0-9])|1[0-9]{2}|[1-9][0-9]|[0-9])\\.){3}(2(5[0-5]|[0-4][0-9])|1[0-9]{2}|[1-9][0-9]|[0-9])$");
    private static Pattern ip6Pattern = Pattern.compile("^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$");

    public String validIPAddress(String IP) {
        if(validIPV4(IP)){
            return "IPv4";
        } else if(validIPV6(IP)){
            return "IPv6";
        } else {
            return "Neither";
        }
    }

    private boolean validIPV4(String IP){
        return ip4Pattern.matcher(IP).matches();
    }

    private boolean validIPV6(String IP){
        return ip6Pattern.matcher(IP).matches();
    }
}
// @lc code=end

