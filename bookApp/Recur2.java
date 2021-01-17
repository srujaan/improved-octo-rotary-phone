public class Recur2 {
    public static int mystery(int a, int b) {
        // base case
        if (b == 0) return 0;
        if (b % 2 == 0) return mystery(a + a, b / 2);
        return mystery(a + a, b / 2) + a;
    }

    public static void main(String[] args) {
        System.out.println(mystery(5, 13));
    }
}
