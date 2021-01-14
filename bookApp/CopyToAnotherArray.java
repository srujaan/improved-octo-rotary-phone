public class CopyToAnotherArray {
    public static void main(String[] args) {
        double[] arr1 = new double[11];
        // Create new array
        double[] arr2 = new double[11];
        for (int i = 1; i < arr1.length; i++) {
            arr1[i] += i;
            arr2[i] = arr1[i];
            System.out.print(i + "   ");
            System.out.print(arr2[i] + "   ");
            System.out.println(arr1[i] + "   ");
        }
    }
}
