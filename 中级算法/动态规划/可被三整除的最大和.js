// 问题是： 1. 三个数字不一定比四个数字的和小
//        2. 递归次数过多，递归栈满
// var maxSumDivThree = function (nums) {
//   let sum = nums.reduce((prev, next) => {
//     return prev + next;
//   }, 0);
//   if (sum % 3 === 0) return sum;
//   else if (nums.length === 1) {
//     return 0;
//   } else return getMax(sum, nums);
// };
// let max = 0;
// function getMax(num, arr) {
//   let nextMax = 0;
//   for (let item of arr) {
//     let temp = num - item;
//     nextMax = Math.max(temp, nextMax);
//     if (temp % 3 === 0) {
//       max = Math.max(temp, max);
//     } else continue;
//   }
//   if (max === 0) {
//     return getMax(nextMax, arr);
//   } else {
//     return max;
//   }
// }

/**  动态规划 + 状态转移
 *
 * 一共有三种状态，模三余0，模三余1，模三余2
 * 面对一个元素，要么添加要么不添加
 *
 * dp[i][0]表示nums[0...i]模三余零的最大和
 * dp[i][1]表示nums[0...i]模三余一的最大和
 * dp[i][2]表示nums[0...i]模三余二的最大和
 * */
var maxSumDivThree = function (nums) {
  let len = nums.length;
  var dp = new Array(len + 1);
  dp[0] = [0, -Infinity, -Infinity]
  for (let i = 1; i <= len; i++) {
    dp[i] = new Array(3);
    if (nums[i - 1] % 3 === 0) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][0] + nums[i - 1]);
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][1] + nums[i - 1]);
      dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][2] + nums[i - 1]);
    } else if (nums[i - 1] % 3 === 1) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] + nums[i - 1]);
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + nums[i - 1]);
      dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + nums[i - 1]);
    } else if (nums[i - 1] % 3 === 2) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + nums[i - 1]);
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][2] + nums[i - 1]);
      dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][0] + nums[i - 1]);
    }
  }
  // console.log(dp[1]==dp[0]);
  return dp[len][0];
};

console.log(maxSumDivThree([3, 6, 5, 1, 8]));
