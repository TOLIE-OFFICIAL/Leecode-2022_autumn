// 递归：也就是函数重复调用自身，并明确有递归结束条件的编程。
// 迭代：也就是按找某种规则执行重复的活动，每一次执行的结果会作为下一次执行的初始值。
// 循环：满足条件的情况下，重复执行同一段代码。
// 遍历：按照一定的规则访问树形结构中的每一个节点，且每个节点仅访问一次。

// 递归实现
// var preorderTraversal = function (root) {
//   if (!root) return [];
//   let res = [];
//   res.push(root.val);
//   if (root.left != null) {
//     res = res.concat(preorderTraversal(root.left));
//   }
//   if (root.right != null) {
//     res = res.concat(preorderTraversal(root.right));
//   }
//   return res;
// };

// 非递归实现
var preorderTraversal = function (root) {
  if (!root) return [];
  let res = [];
  let stack = [];
  stack.push(root);
  while(stack.length){
    const cur = stack.pop();
    res.push(cur.val)
    if(cur.right){
      stack.push(cur.right);
    }
    if(cur.left){
      stack.push(cur.left);
    }
  }
  return res;
};
