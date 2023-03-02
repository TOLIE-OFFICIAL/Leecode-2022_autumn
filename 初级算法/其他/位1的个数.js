// 输入必须是长度为 32 的 二进制串 。
// var hammingWeight = function (n) {
//   let arr = n
//     .toString(2)
//     .split("")
//     .filter((item) => item === "1");
//   return arr.length;
// };

// var hammingWeight = function (n) {
//   let res = 0;
//   while (n !== 0) {
//     res++;
//     n = n & (n - 1);// 按位与（&）两个二进制的同一位只有都为1，与的结果这一位置才是1，其他全为 0
//   }
//   return res;
// };

// 多次调用
var hammingWeight = function (n) {
  let allArgs = [...arguments];
  let res = 0;
  // 聚合所有的参数
  function fn(...args) {
    allArgs = allArgs.concat([...args]);
    return fn;
  }
  // 计算
  function weight(n) {
    while (n !== 0) {
      res++;
      n = n & (n - 1); // 按位与（&）两个二进制的同一位只有都为1，与的结果这一位置才是1，其他全为 0
    }
  }
  fn.value = function () {
    allArgs.forEach((item) => {
      weight(item);
    });
    return res;
  };
  return fn;
};

console.log(
  hammingWeight(00000000000000000000000000001011)(
    00000000000000000000000000001011
  )(00000000000000000000000000001011).value()
);
// function add(a, b) {
//   console.log([...arguments]);
//   return a + b;
// }
// add(1, 2);
