public class Average {
    public static void main(String[] args) {
        // Average the numbers on StdIn.
        double sum = 0.0; // Assume initial sum is 0
        int cnt = 0; // initial count is 0
        while (!StdIn.isEmpty()) {
            sum += StdIn.readDouble();
            cnt++;
        }
        double avg = sum / cnt;
        StdOut.printf("Average is %.5f\n", avg);

    }
}
