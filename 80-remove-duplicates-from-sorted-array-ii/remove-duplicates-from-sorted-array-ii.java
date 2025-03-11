class Solution {
    public int removeDuplicates(int[] nums) {
         int i = 1; // First Element is always valid
    int rep = i;
    int count = 1;
    while(i < nums.length) {
        if(nums[i] == nums[i - 1]) { // The element is seen again.
            count++;
        } else {
            nums[rep] = nums[i];
            count = 1;
        }

        if(count <= 2) {
            nums[rep++] = nums[i++];
        } else {
            i++;
        }
    }

    // nums[++rep] = nums[i - 1];

    return rep;
    }
    
}