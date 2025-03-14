class Solution {
    public int maxProfit(int[] prices) {
        if(prices.length <= 1) return 0;
        int min = 10000;
        int minIndex = 0;
        int max = 0;
        int maxIndex = 0;
        int profitSum = 0;
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
                profitSum += (max - min);
                min = max; // release the stock now and get ready to take the next minimum(=Current max if we want to increase the profit).
                minIndex = maxIndex;
                
            }
        }

        return profitSum;
    }
}