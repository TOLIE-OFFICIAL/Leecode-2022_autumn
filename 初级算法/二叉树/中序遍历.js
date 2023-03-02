// 非递归
// var inorderTraversal = function (root) {
//   let stack = [];
//   let res = [];
//   while (stack.length || root) {
//     // 一路向左，直到root是null
//     while (root) {
//       stack.push(root);
//       root = root.left;
//     }
//     // 最左侧的节点出栈，输出val
//     root = stack.pop();
//     res.push(root.val);
//     // 遍历此节点的右侧节点
//     // 右节点不存在，直接弹出之前的节点
//     root = root.right
//   }
//   return res
// };

// 递归
var inorderTraversal = function (root, res=[]) {
  if (!root) return [];
  inorderTraversal(root.left, res);
  res.push(root.val);
  inorderTraversal(root.right,res);
  return res;
};
