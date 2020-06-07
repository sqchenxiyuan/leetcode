import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

class BrowserHistory {

    private List<String> history = new ArrayList<>();;
    private int current = 0;

    public BrowserHistory(String homepage) {
        history.add(homepage);
    }

    public void visit(String url) {
        history = history.subList(0, current++);
        history.add(url);
    }

    public String back(int steps) {
        current = current - steps;
        if(current < 0) current = 0;
        return history.get(current);
    }

    public String forward(int steps) {
        current = current + steps;
        if(current >= history.size()) current = history.size() - 1;
        return history.get(current);
    }
}
