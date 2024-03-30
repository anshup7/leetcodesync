/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let buyPriceIndex = 0;
   let sellPriceIndex = buyPriceIndex + 1;
   let profit = 0;
   let n = prices.length;
   while(sellPriceIndex < n) {
    if(prices[buyPriceIndex] <= prices[sellPriceIndex]) {
        let diff = prices[sellPriceIndex] - prices[buyPriceIndex];
        if(diff > profit) profit = diff; // maximizing profit
        // buyPriceIndex++;
        sellPriceIndex++;
    } else if(prices[buyPriceIndex] > prices[sellPriceIndex]) {
        buyPriceIndex = sellPriceIndex;
        sellPriceIndex++;
    } // using if , elseif as buy and sell are happening only when buy happens not before that.
   }

   return profit;
};