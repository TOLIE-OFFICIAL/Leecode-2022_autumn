// 自顶向下:上层数值将值传递给下层，直到最后一层停止递归
var maxDepth = function (root, deep = 1) {
  if (!root) return 0;
  let curDeep = deep;
  if (root.left) {
    deep =maxDepth(root.left, curDeep + 1);
  }
  if (root.right) {
    deep = Math.max(maxDepth(root.right, curDeep + 1), deep);
  }
  return deep;
};

// 自底向上：上层数值依赖于下层数值，最后得到两个值（根的左子树的深度和根的右子树的深度）取最大值即可
// var maxDepth = function (root) {
//   if (!root) return 0;
//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// };
