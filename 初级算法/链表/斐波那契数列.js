// 给定 n ，请计算 F(n)

// 一、递归实现
// var fib = function(n) {
//   if (n == 0) {
//     return 0;
//   } else if (n == 1) {
//     return 1;
//   } else if (n > 1) {
//     return fib(n - 1) + fib(n - 2);
//   }
// };

// 利用栈实现递归
var fib = function (n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  let stack = new Array(2);
  stack[0] = 0;
  stack[1] = 1;

  for (let num = 2; num <= n; num++) {
    let first = stack.pop();
    let second = stack.pop();
    stack.push(first);
    stack.push(second + first);
  }
  return stack.pop();
};

console.log(fib(3));
