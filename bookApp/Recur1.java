public class Recur1 {
    public static String exR1(int n) {
        // base case
        if (n <= 0) return "";
        return n + exR1(n - 2) + n;
    }

    public static void main(String[] args) {
        System.out.println(exR1(5));
    }
}
