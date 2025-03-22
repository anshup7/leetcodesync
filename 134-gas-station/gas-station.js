/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
   let start = 0;
   let carStartPosition = 0;
   let tank = 0;
   let totalGain = 0;
   for (let i=0; i<gas.length; i++) {
        tank += (gas[i] - cost[i]);
        totalGain += (gas[i] - cost[i]);
        if(tank < 0) {
            carStartPosition = i + 1;
            tank = 0;
        }
   }

   return totalGain >= 0 ? carStartPosition : -1;
   
};