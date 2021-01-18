public class LogFact {
    public static double logFact(int n) {
        // base case
        if (n == 1) return 0;
        return Math.log(n) + logFact(n - 1);

    }

    public static void main(String[] args) {
        StdOut.println(logFact(5));
    }
}