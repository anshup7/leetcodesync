/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if(citations.length == 1) {
        return citations[0] == 0 ? 0 : 1;
    }
    citations.sort((a,b) => a - b);
    let low =0;
    let high = citations.length - 1;
   
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        if(citations[mid] == ((citations.length) - mid)) {
            return (citations.length - mid);
        } else if(citations[mid] > ((citations.length) - mid)) {
            high = mid - 1;
        } else {
            low = mid+1;
        }
    }
    return citations.length - low;
};