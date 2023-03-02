// 一、贪心算法
// 计算数组中所有上升阶段的值
var maxProfit = function (prices) {
  let index = 1;
  let result = 0;
  let d = 0;
  while (index < prices.length) {
    d = prices[index] - prices[index - 1];
    if (d > 0) result += d;
    index++;
  }
  return result;
};
