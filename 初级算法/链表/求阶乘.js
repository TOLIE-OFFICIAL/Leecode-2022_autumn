// 迭代
var jiecheng = function (n) {
  let num = 1;
  let res = 1;
  while(num <=n){
    res = res *num;
    ++num;
  }
  return res;
};

// 递归 
// var jiecheng = function (n) {
//   // 结束条件
//   if (n === 1) {
//     return 1;
//   } else {
//     return jiecheng(n - 1) * n;
//   }
// };

console.log(jiecheng(4));
