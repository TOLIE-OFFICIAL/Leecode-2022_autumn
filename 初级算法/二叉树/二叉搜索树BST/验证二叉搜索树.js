var isValidBST = function (
  root,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER
) {
  if (!root) return true;
  if (root.val >= max || root.val <= min) return false;
  return (
    // 某个节点的左子树来说，最小值就是最小值，最大值是当前节点的值
    // 某个节点的右子树来说，最小值就是当前节点的值，最大值是最大值
    isValidBST(root?.left, min, root.val) &&
    isValidBST(root?.right, root.val, max)
  );
};

console.log(5 <= undefined);
// 中序遍历
// var isValidBST = function (root) {
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
//     root = root.right;
//   }
//   return res;
// };
