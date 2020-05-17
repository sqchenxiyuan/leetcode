import java.util.Arrays;
import java.util.Comparator;

class Stu{
    String str;
    int index;

    Stu(String _str, int _index){
        str = _str;
        index = _index;
    }
}

public class Solution {
    public String arrangeWords(String text) {
        String[] arr = text.split(" ");
        Stu[] stuarr = new Stu[arr.length];

        for(int i = 0; i < arr.length; i++){
            stuarr[i] = new Stu(arr[i].toLowerCase(), i);
        }

        Arrays.sort(stuarr, new Comparator<Stu>() {
            @Override
            public int compare(Stu s1, Stu s2) {
                if(s1.str.length() == s2.str.length()) return s1.index - s2.index;
                return s1.str.length() - s2.str.length();
            }
        });

        for(int i = 0; i < arr.length; i++){
            if(i == 0){
                String str = stuarr[i].str;
                arr[i] = str.substring(0, 1).toUpperCase() + str.substring(1);
            } else {
                arr[i] = stuarr[i].str;
            }
        }

        return String.join(" ", arr);
    }
}
