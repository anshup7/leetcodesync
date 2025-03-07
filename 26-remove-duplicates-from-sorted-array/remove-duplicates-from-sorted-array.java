class Solution {
    public int removeDuplicates(int[] nums) {
        int seen;
        int i = 0;
        int start = 0;
        seen = nums[0];
        while (i < nums.length) {
            if(nums[i] != seen) {
                seen = nums[i];
                nums[++start] = nums[i];
            }
            i++;
        }
        return start+1;
    }
}