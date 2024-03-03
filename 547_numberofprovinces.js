/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let graph = new Map();
    let nodesLen = isConnected.length;
    // Create the hashmap
    for(let i=0; i<nodesLen; i++) {
        graph.set(i, []);
    }

    // add all the neighbors to the hashmap

    for(let i=0; i<nodesLen; i++) {
        // j = i+1 so that the same node is not added.
        for(let j=i+1; j < nodesLen; j++) {
            if(isConnected[i][j]) {
                graph.get(i).push(j);
                graph.get(j).push(i);
            }
        }
    }

    // create the seen array
    let seen = new Array(nodesLen).fill(false);
    let ans = 0; // number of provinces = number of hashes, each hash and their neighbors will form the connected component
    for(let i=0; i< nodesLen; i++) {
        if(!seen[i]) { // 1 to 2 has marked 2 as seen. hence 2 Must not calculate a province when hash takes it as a next node.
            seen[i] = true;
            ans++;
            dfs(i);
        }
    }

    function dfs(node) {
        let neighbors = graph.get(node);
            for(let each of neighbors) {
                if(!seen[each]) {
                    seen[each] = true;
                    dfs(each);
                }
            }
    }

    return ans;
};
