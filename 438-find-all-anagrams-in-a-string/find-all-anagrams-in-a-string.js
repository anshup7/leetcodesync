/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if(s.length < p.length) return []; // no point in further checking.
    let charsMap = new Map();
    (p.split("")).forEach(val => {
        if(charsMap.has(val)) {
            charsMap.set(val, charsMap.get(val) + 1);
        } else {
            charsMap.set(val, 1);
        }
     });

    let start = 0;
    let end = p.length - 1;
    let result = [];
    let counter = start;
    let localMap = {};
    while(counter <= end) {
        if(localMap[s[counter]]) {
            localMap[s[counter]] += 1;
        } else {
            localMap[s[counter]] = 1;
        }

        counter++;
    }
    while(end < s.length) {
        let isAnswer = false;

        for(let key in localMap) {
            if(!charsMap.has(key) && localMap[key] != 0) {
                isAnswer = false;
                break;
            }

            const count = charsMap.get(key);

            if(count !== localMap[key] && localMap[key] != 0) {
                isAnswer = false;
                break;
            }

            isAnswer = true;

        }

        if(isAnswer) result.push(start);

        start++;
        end++;

        if(localMap[s[end]]) {
            localMap[s[end]] += 1;
        } else {
            localMap[s[end]] = 1;
        }

        localMap[s[start - 1]] -= 1;
    }

    return result;
};