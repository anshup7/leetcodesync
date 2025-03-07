class Solution {
    public int removeElement(int[] nums, int val) {
        int f = 0;
        int start = 0;
        while(f < nums.length) {
            if(nums[f] != val) {
                nums[start++] = nums[f++];
            } else {
                f++;
            }
        }

        return start;
    }
}