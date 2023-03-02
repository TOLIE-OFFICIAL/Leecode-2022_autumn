// 深度优先搜索

// 非递归
// var preorderTraversal = function(root) {
//   if (!root) return [];
//   let res = [];
//   let stack = [];
//   stack.push(root);
//   while (stack.length) {
//     const cur = stack.pop();
//     res.push(cur.val);
//     if (cur.right) {
//       stack.push(cur.right);
//     }
//     if (cur.left) {
//       stack.push(cur.left);
//     }
//   }
//   return res;
// };

// 递归
var preorderTraversal = function (root, res = []) {
  if (!root) return res;
  res.push(root.val);
  preorderTraversal(root.left, res);
  preorderTraversal(root.right, res);
  return res;
};
