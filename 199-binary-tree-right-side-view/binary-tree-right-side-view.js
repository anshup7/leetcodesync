/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return [];
    let treeQueue = [root];
    let rightView = [root.val];
    while(treeQueue.length > 0) {
        let nextQueue = [];
        for(let i = 0; i < treeQueue.length; i++) {
            const node = treeQueue[i];
            if(node && node.left) nextQueue.push(node.left);
            if(node && node.right) nextQueue.push(node.right);
        }

        const rightMost = nextQueue[nextQueue.length - 1];
        if(rightMost) rightView.push(rightMost.val);
        treeQueue = [...nextQueue];

    }

    return rightView;

};