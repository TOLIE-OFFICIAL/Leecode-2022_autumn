// 递归实现
// var isPowerOfThree = function (n) {
//   if (n === 1) return true;
//   if (n > 1 ) {
//     return isPowerOfThree(n / 3);
//   }
//   return false;
// };

// 这个效率最高似乎
// var isPowerOfThree = function (n) {
//   // 循环
//   while (n > 1) {
//     n = n / 3;
//   }
//   return n === 1;
// };

// 直接计算
// var isPowerOfThree = function (n) {
//   return (Math.log10(n) / Math.log10(3)) % 1 === 0;
// };
// console.log(isPowerOfThree(28));