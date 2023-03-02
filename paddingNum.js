var paddingNum = function (num) {
  const NUM = num;
  const arr = ("" + Math.abs(num)).split("");
  // 整数部分长度len
  let len = arr.includes(".") ? arr.indexOf(".") + 1 : arr.length;
  // 整数部分超度小于等于3,直接以字符串的形式返回
  if (len <= 3) return "" + NUM;
  while (len > 3) {
    arr[len - 3] = [",", arr[len - 3]];
    len = len - 3;
  }
  return NUM > 0
    ? arr.flat().join("") +getNum(NUM)
    : "-" + arr.flat().join("") + getNum(NUM);
};

// 获取小数部分的内容，返回一个字符串
var getNum = function (num) {
  let res = num - Math.trunc(num);
  return res ? res : "";
};
// console.log([1111].length)
console.log(paddingNum(-1234567));
