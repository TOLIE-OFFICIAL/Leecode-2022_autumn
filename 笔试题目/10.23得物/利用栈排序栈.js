// 没解出来
const mySort = function (stack) {
  let res = [];
  let temp = null;
  while (stack.length) {
    if (!temp) {
      stack.push(temp);
      temp = null;
    }
    let cur = stack.pop();
    if (cur >= res[res.length - 1]) {
      res.push(cur);
    } else {
      while (cur < res[res.length - 1]) {
        temp = res.pop();
      }
    }
  }
  return res;
};

console.log(mySort([1, 2, 3, 4, 5]));
