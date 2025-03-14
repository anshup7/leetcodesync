class Solution {
    public int maxProfit(int[] prices) {
        if(prices.length <= 1) return 0;
        int min = 10000;
        int minIndex = 0;
        int max = 0;
        int maxIndex = 0;
        int maxProfit = 0;
        for(int i=0; i<prices.length; i++) {
            if(prices[i] < min) {
                min = prices[i];
                minIndex = i;
                max = min;
                maxIndex = i;
            } else if(prices[i] > max) {
                max = prices[i];
                maxIndex = i;
            }

            if(maxIndex > minIndex) {
                int diff = max - min;
                if(diff > maxProfit) {
                    maxProfit = max - min;
                }
            }
        }

        return maxProfit;
    }
}