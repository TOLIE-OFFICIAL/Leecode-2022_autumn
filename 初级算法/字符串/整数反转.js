// 对10取余，最终结果*10加上取余结果
var reverse = function (x) {
  let res = 0;
  let num = Math.abs(x);
  // 题目要求的范围（-2^31 = -2147483648 到 2^31 - 1 = 2147483647）
  let MAX_VALUE = Math.pow(2, 31) - 1;
  while (num != 0) {
    let pop = num % 10;
    if (res > MAX_VALUE / 10 || (res === MAX_VALUE / 10 && pop > 7)) return 0;
    res = res * 10 + pop;
    num = Math.floor(num / 10);
  }
  return x < 0 ? -res : res;
};

console.log(reverse(-123));
