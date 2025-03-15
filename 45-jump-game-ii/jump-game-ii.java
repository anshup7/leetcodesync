class Solution {
    public int jump(int[] nums) {
        if(nums.length <= 1) return 0;
        int farthest = nums[0];
        int delimittedIndex = 0;
        int jumps = 0;
        int currentIndex = 0;
        while(currentIndex < nums.length - 1) {
           if((currentIndex + nums[currentIndex]) > farthest) {
            farthest = currentIndex + nums[currentIndex];
           }

           if(currentIndex == delimittedIndex) {
            jumps += 1;
            delimittedIndex = farthest;
           }

           currentIndex += 1;
        }

        return jumps;
    }
}