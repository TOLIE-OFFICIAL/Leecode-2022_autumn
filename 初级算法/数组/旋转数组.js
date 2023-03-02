// 循环k次，且性能不佳
// var rotate = function (nums, k) {
//   let length = nums.length;
//   k = k % length; //k对length取余，减少循环次数
//   let last = null;

//   for (let i = 0; i < k; i++) {
//     last = nums[length - 1];
//     nums.unshift(last);
//     nums.pop();
//   }
// };

// 使用临时数组
// 执行用时：88 ms, 在所有 JavaScript 提交中击败了77.89% 的用户
// 内存消耗：49.9 MB, 在所有 JavaScript 提交中击败了88.15% 的用户
// var rotate = function (nums, k) {
//   let len = nums.length;
//   let temp = new Array(len); //直接分配固定的空间出来，而不是动态分配
//   //   深拷贝复制一份数组
//   for (let i = 0; i < len; i++) {
//     temp[i] = nums[i];
//   }
//   for (let i = 0; i < len; i++) {
//     // 解决问题的关键就是（i+k）%len
//     nums[(i + k) % len] = temp[i];
//   }
// };

// 多次翻转

// 环形旋转
