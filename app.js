const LinkedList = require('./linkedlist')

const fibList = function(n) {

    if (n < 2) return n;
    let dp = [...Array(n + 1).keys()];
    for (let i = 2; i < dp.length; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return [...dp];
}

const linked = new LinkedList.fromValues(fibList(8));

console.log(linked.printList());

