function Node(url) {
    this.value = url;
    this.next = null;
    this.back = null;
}
/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.head = new Node(homepage);
    this.currentNode = this.head;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    const node = new Node(url);
    node.back = this.currentNode;
    this.currentNode.next = node;
    this.currentNode = node;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while(this.currentNode && this.currentNode.back && steps > 0) {
        this.currentNode = this.currentNode.back;
        steps--;
    }
    return this.currentNode.value;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    let currentStep = 1;
    while(this.currentNode && this.currentNode.next && currentStep <= steps) {
        this.currentNode = this.currentNode.next;
        currentStep++;
    }
    return this.currentNode.value;
};



/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */