function findMaxConsecutiveOnes(nums: number[]): number {
    let i: number = 0;
    let j: number = -1;
    let max: number = -Infinity;
    let count: number = 0;
    while(j < nums.length) {
        if(nums[++j] === 1) {
            count++;
            continue;
        }

        if(count > max) max = count;
        while(i <= j) {
            if(nums[i] === 1) {
                count--;
            }
            i++;
        }
    }

    return max;
};