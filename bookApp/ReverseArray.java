public class ReverseArray {
    public static void main(String[] args) {
        // create a new array
        int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        int ele = arr.length;
        for (int i = 0; i < ele / 2; i++) {
            int temp = arr[i]; // 1 2 3 4
            arr[i] = arr[ele - i - 1]; // 9 8 7 6
            arr[ele - 1 - i] = temp;
        }
        for (int k = 0; k < ele; k++) {
            System.out.println(arr[k]);
        }

    }
}
