/**
 * 状态转移方程
 * dp[i] = Math.min(dp[i - j1],dp[i - j2],dp[i - j3]) + 1
 */

// 1. 递归过多，效率低
// var coinChange = function (coins, amount) {
//   if (amount === 0) return 0;
//   let res = Infinity;
//   let len = coins.length;
//   for (let i = 0; i < len; i++) {
//     if (amount < coins[i]) continue;
//     else if (amount === coins[i]) return 1;
//     else {
//       let temp = coinChange(coins, amount - coins[i]) + 1;
//       if (res > temp) res = temp;
//     }
//   }
//   return res === Infinity || res === 0 ? -1 : res;
// };

// 2. 循环 带字典
var coinChange = function (coins, amount) {
  let len = coins.length;
  let dp = [0];
  for (let i = 1; i <= amount; i++) {
    let min = Infinity;
    for (let j = 0; j < len; j++) {
      if (i < coins[j]) continue;
      else {
        min = Math.min(dp[i - coins[j]] + 1, min);
      }
    }
    dp[i] = min;
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 12));
