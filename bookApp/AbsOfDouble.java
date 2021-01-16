public class AbsOfDouble {
    public static double abs(double y) {
        if (y < 0.0) return -y;
        else return y;
    }

    public static void main(String[] args) {
        System.out.println(abs(-5.5));
    }

}
