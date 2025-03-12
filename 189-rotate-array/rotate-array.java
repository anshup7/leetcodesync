class Solution {
    public void rotate(int[] nums, int k) {
         int start = 0;
        int end = nums.length - 1;
        k = k % (nums.length);
        while(start < end) {
            int sum = nums[start] + nums[end];
            nums[start] = sum - nums[start];
            nums[end] = sum - nums[end];
            start++;
            end--;
        }

        // First part reverse
        start = 0;
        end = k - 1;
        while(start < end) {
            int sum = nums[start] + nums[end];
            nums[start] = sum - nums[start];
            nums[end] = sum - nums[end];
            start++;
            end--;
        }

        // Second part reverse

        start = k;
        end = nums.length - 1;

        while(start < end) {
            int sum = nums[start] + nums[end];
            nums[start] = sum - nums[start];
            nums[end] = sum - nums[end];
            start++;
            end--;
        }
    }
}