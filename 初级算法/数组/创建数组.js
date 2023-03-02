// 创建一个1~n的数组
function getArr(num) {
  let res = [];
  for (let i = 0; i < num; i++) {
    res.push(i);
  }
  return res;
}

console.log(getArr(5));