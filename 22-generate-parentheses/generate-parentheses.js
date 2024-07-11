/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n, open=0, close=0, ans=[], str=[]) {
     if((open === close) && (open === n)) {
    // console.log("str", str, open, close);
    if(!ans[n]) {
      ans[n] = [str.join("")];
    } else {
      ans[n].push(str.join(""));
    }

    return ans[n];
  }

  if(open < n) {
    str.push("(");
    open++;
    generateParenthesis(n, open, close, ans, str);
    open--;
    str.pop();
  }

  if(close < open) {
    str.push(")");
    close++;
    generateParenthesis(n, open, close, ans, str);
    close--;
    str.pop();
  }
  return ans[n];
};