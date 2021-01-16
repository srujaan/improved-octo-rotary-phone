public class AbsValue {
    public static int abs(int x) {
        if (x < 0) return -x;
        else return x;
    }

    public static void main(String[] args) {
        System.out.println(abs(-3));
    }
}
