/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let mapper = {
       
    };

    let answer = Array(score.length).fill("");
    let sorted = [...score];
    let counter = 4;
    sorted.sort((a,b) => b - a);

    for(let i=0; i<sorted.length; i++) {
        if(i==0) {
            mapper[sorted[i]] = "Gold Medal";
        } else if(i==1) {
            mapper[sorted[i]] = "Silver Medal";
        } else if(i==2) {
            mapper[sorted[i]] = "Bronze Medal";
        } else {
            mapper[sorted[i]] = `${counter}`;
            counter++;
        }
    }

    for(let i=0; i<score.length; i++) {
        answer[i] = mapper[score[i]];
        
    }

    return answer;
};