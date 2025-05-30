/**
 * @param {string} homepage
 */

function Node(val, prev, next) {
    this.val = val;
    this.next = (next == undefined) ? null : next;
    this.prev = (prev == undefined) ? null : prev;
}

var BrowserHistory = function(homepage) {
    this.home = new Node(homepage);
    this.currentPage = this.home;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.currentPage.next = new Node(url, this.currentPage); // Clears up all forward history if any were there
    this.currentPage = this.currentPage.next;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while(steps > 0 && this.currentPage.prev != null) {
        this.currentPage = this.currentPage.prev;
        steps--;
    }

    return this.currentPage.val;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while(steps > 0 && this.currentPage.next != null) {
        this.currentPage = this.currentPage.next;
        steps--;
    }
    return this.currentPage.val;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */