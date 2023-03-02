// MAX(n) = Math.max( MAX(n-1), MAX[n-2] + An )

// 递归   超时了
// var rob = function (nums) {
//   let len = nums.length;
//   let a = 0;
//   let b = nums[0];
//   if (!nums || len === 0) return a;
//   if (len === 1) return b;
//   return Math.max(
//     rob(nums.slice(0, len - 1)),
//     rob(nums.slice(0, len - 2)) + nums[len - 1]
//   );
// };

// 递归

// 自底向上 带字典
// var rob = function (nums) {
//   let len = nums.length;
//   let a = 0;
//   let b = nums[0];
//   let res = null;
//   if (len === 1) return b;
//   if (!nums || len == 0) return 0;
//   for (let i = 1; i < len; i++) {
//     res = Math.max(b, a + nums[i]);
//     a = b;
//     b = res;
//   }
//   return res;
// };

console.log(
  rob([
    114, 117, 207, 117, 235, 82, 90, 67, 143, 146, 53, 108, 200, 91, 80, 223,
    58, 170, 110, 236, 81, 90, 222, 160, 165, 195, 187, 199, 114, 235, 197, 187,
    69, 129, 64, 214, 228, 78, 188, 67, 205, 94, 205, 169, 241, 202, 144, 240,
  ])
);
// console.log(rob([2, 7, 9, 3, 1]));
