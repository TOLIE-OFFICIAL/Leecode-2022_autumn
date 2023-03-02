// （1）首先最后一步只有两种可能，①要么迈1级台阶②要么迈2级台阶。
// （2）那么到某级的方法就=所有最后迈1级台阶的方法+所有最后迈2级的方法。
// （3）所有最后迈1级台阶的方法在dp[i-1]，所有最后迈2级台阶的方法在dp[i-2]。（以到i级为例）


// An = A(n-1) + A(n-2)
// 非递归，自底向上
// var climbStairs = function(n) {
//   let a = 1;
//   let b = 2;
//   if(n===1) return a;
//   if(n===2) return b;
//   let res = null;
//   for(let i = 3; i <= n; i++){
//     res = a + b;
//     a = b;
//     b = res;
//   }
//   return res;
// };

// 递归次数多，效率特别低
// var climbStairs = function (n) {
//   if (n === 1) return 1;
//   if (n === 2) return 2;
//   return climbStairs(n - 1) + climbStairs(n - 2);
// };

/**
 * 使用尾递归 优化
 * 递归非常耗费内存，因为需要同时保存成千上百个调用记录，很容易发生"栈溢出"错误（stack overflow）。
 * 但对于尾递归来说，由于只存在一个调用记录，所以永远不会发生"栈溢出"错误。
 */

var climbStairs = function (n) {
  return getStairs(n, 1, 1);
};

function getStairs(n, a, b) {
  if (n <= 1) return b;
  return getStairs(n - 1, b, a + b);
}



console.log(climbStairs(3));
// 1, 2
