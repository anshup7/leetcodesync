class Solution {
    public void merge(int[] ar1, int m, int[] ar2, int n) {
        int p1 = (ar1.length - ar2.length) - 1;
        int p2 = ar2.length - 1;
        int x = ar1.length - 1;

        while(p1 >= 0 && p2 >= 0) {
            if(ar2[p2] >= ar1[p1]) {
                ar1[x--] = ar2[p2--];
            } else {
                ar1[x--] = ar1[p1--];
            }
        }

        while(p1 >= 0 && x >= 0) {
            ar1[x--] = ar1[p1--];
        }

        while(p2 >= 0 && x >= 0) {
            ar1[x--] = ar2[p2--];
        }
    }
}