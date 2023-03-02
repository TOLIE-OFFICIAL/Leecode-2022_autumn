/**
 *
 * 输入：n = 4
 * 输出："1211"
 * 解释：
 * countAndSay(1) = "1"
 * countAndSay(2) = 读 "1" = 一 个 1 = "11"
 * countAndSay(3) = 读 "11" = 二 个 1 = "21"
 * countAndSay(4) = 读 "21" = 一 个 2 + 一 个 1 = "12" + "11" = "1211"
 */
 var countAndSay = function (n) {
  if (n === 1) return "1";
  return getSay(countAndSay(n - 1));
};

function getSay(str) {
  let arr = str.split(""); // [ '2', '1' ]
  let res = "";
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr.splice(i, 1, arr[i]+",");
    }
  }
  arr = arr.join("").split(",");
  for (let i = arr.length - 1; i >= 0; i--) {
    res = arr[i].length + arr[i][0] + res;
  }
  return res;
}

console.log(getSay("1211"));
// console.log(countAndSay(3) ,typeof countAndSay(3));
// console.log(getSay(countAndSay(3)));
// console.log(countAndSay(5));
