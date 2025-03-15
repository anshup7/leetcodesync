class Solution {
    public boolean canJump(int[] nums) {
        int allowedSteps = nums[0];
        int i = 1;
        while(allowedSteps > 0 && i < nums.length) {
            allowedSteps -= 1;
            if(nums[i] > allowedSteps) {
                allowedSteps = nums[i];
            }

            i = i + 1;
        }

        return i >= nums.length;
    }
}