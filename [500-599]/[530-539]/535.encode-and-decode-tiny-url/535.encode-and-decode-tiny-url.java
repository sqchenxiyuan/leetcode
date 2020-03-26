/*
 * @lc app=leetcode id=535 lang=java
 *
 * [535] Encode and Decode TinyURL
 */

// @lc code=start
import java.util.HashMap;
import java.util.Map;

public class Codec {

    private int count = 0;
    private Map<String, String> map = new HashMap<>();

    // Encodes a URL to a shortened URL.
    public String encode(String longUrl) {
        String key = Integer.valueOf(count++).toString();
        map.put(key, longUrl);
        return key;
    }

    // Decodes a shortened URL to its original URL.
    public String decode(String shortUrl) {
        if(map.containsKey(shortUrl)){
            return map.get(shortUrl);
        }
        return "";
    }
}
// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.decode(codec.encode(url));
// @lc code=end

