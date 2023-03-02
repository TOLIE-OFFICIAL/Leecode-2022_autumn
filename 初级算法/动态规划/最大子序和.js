// 1. 返回最大自序和

// 状态转移方程
var maxSubArray = function (nums) {
  let res = [nums[0]];
  let len = nums.length;
  if (!nums || len === 0) return 0;
  for (let i = 1; i < len; i++) {
    // res[i - 1]代表前 i - 1 项中的最大子序列和
    // 如果 a < 0, 直接舍弃，因为会导致res[i]减小
    res[i] = Math.max(0, res[i - 1]) + nums[i];
  }
  return Math.max(...res);
};

// 2. 返回最大自序的开始和结束下标

var maxSubArrayIndex = function (nums) {
  let dp_i = nums[0];// i - 1项的最大子序列和
  let max = Number.MIN_SAFE_INTEGER; // 最终的最大子序列和
  let len = nums.length;
  let res = [];
  let begin = 0;
  if (!nums || len === 0) return 0;
  for (let i = 1; i < len; i++) {
    if (dp_i < 0) {
      // dp 小于0,从nums[i]重新计算
      dp_i = nums[i];
      begin = i;
    } else {
      dp_i += nums[i];
    }
    // dp大于前面的最大值的时候，维护结果数组
    // 并更新max
    if (dp_i > max) {
      max = dp_i;
      res[0] = begin;
      res[1] = i;
    }
  }
  return res;
};
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSubArrayIndex([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([7,-6,3]));
console.log(maxSubArrayIndex([7,-6,3]));
