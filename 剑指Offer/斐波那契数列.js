// 非递归
var fib = function (n) {
  // 自下而上 配合记忆存储
  if (n <= 1) return n;
  let a = 0,
    b = 1,
    sum = 0;
  for (let i = 2; i <= n; i++) {
    sum = (a + b) % 1000000007; // 保证不越界
    /**
     * mod要尽可能大，确保程序中可能的计算结果对该值取模后在数据类型的表示范围内。例如，a和b都是32位int类型的值，
     * (a+b)的值取模后要在32位int类型表示的范围之内。如果mod值太小，比如极端点说，mod=1，则起不到足够的将ans缩小的作用。
     * mod应该是一个质数，防止ans取模后等于0。例如：（9*5）%15 = 0。
     * 综上可知要选择一个32int表示范围内尽可能大的质数。
     * 1e9+7 = 1000000007 是32位int型数据能表示的范围内较大的几个质数之一。容易被记住也是使用该值的一个原因。
     */
    a = b;
    b = sum;
  }
  return sum;
};
fib(5);

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
