// 使用reduce方法实现提取深度为1的数组

const { reverse } = require("dns");

/* 一、*/
// var myFlat = function (arr) {
//   return arr.reduce((prev, cur) => {
//     // console.log(prev);
//     return prev.concat(cur);
//   }, []);
// };

// console.log(myFlat([1, 2, 3, [4, 5, 6]]));

/* 二、*/
// var myFlat = (arr) =>[].concat(...arr)
// console.log(myFlat([1, 2, 3, [4, 5, 6]]));

// 扁平深度为n的数组

/* 
  递归实现 迭代的时候判断迭代对象是否是数组，如果是数组就带入迭代
  如果深度大于0，即需要扁平化，所以执行flat代码，
*/
// var myFlat = function (arr,deep=1) {
//   return deep !=0 ?arr.reduce((prev, curr) => {
//     return prev.concat(Array.isArray(curr) ? myFlat(curr) : curr);
//   }, []):arr;
// };
// console.log(myFlat([1, 2, 3, [4, [5, 6], 7]]));

/* 生成器实现 !!!!!不怎么理解*/
// function* flatten(arr){
//   for (let item of arr){
//     if(Array.isArray(item)){
//       //
//       yield* flatten(item);
//     }else{
//       // console.log(item);
//       yield  item;
//     }
//   }
// }

// let result =[...flatten([1,2,3,[4,5],[6,7,[8,9]]])]
// console.log(result);

/* 栈实现 */
var myFlat = function (arr) {
  let res = [];
  let stack = [...arr];
  while (stack.length) {
    let cur = stack.pop();
    if (Array.isArray(cur)) {
      stack.push(...cur);
    } else {
      // 最后一个项先进结果数组
      res.push(cur)
    }
  }
  // 返回翻转之后的数组
  return res.reverse()
};
console.log(myFlat([1, 2, 3, [4, [5, 6], 7]]));
