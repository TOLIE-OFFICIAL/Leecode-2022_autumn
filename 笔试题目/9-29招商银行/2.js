// V8

/**
 * 第一行给三个数，第一个是第二行的字符长度
 * 第二个是数字a，第二个是数字b
 * 
 * 第二行是由 1 和 0 组成的字符
 * 一次操作只能将一个数字 由0变成1 或者 由1变成0
 * 求将1组成的每个连续子串的长度变为 a的倍数
 * 将0组成的连续子串长度变为b的倍数的最小操作次数
 */


let input_array = readline()
  .split(" ")
  .map((item) => parseInt(item));
if (input_array[0] < input_array[3] + input_array[3]) {
  print(-1);
  return;
}
let target = readline()
let cur = target[0];

