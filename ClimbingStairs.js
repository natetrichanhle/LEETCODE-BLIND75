// const cache = {
//     '0' : 1,
//     '1' : 1,
// }

// Solve this using the fibonacci sequence

var climbStairs = function(n) {
    // if (n <= 1) return 1;
    // for (let i = 2; i <= n; i++) {
    //     cache[i] = cache[i-1] + cache[i-2];
    // }
    // return cache[n];
    
    const dp = [1,1];
    
    for (let i = 2; i <= n; i++) {
        const result = dp[0] + dp[1];
        dp[0] = dp[1];
        dp[1] = result;
    }
    return dp[1];
};