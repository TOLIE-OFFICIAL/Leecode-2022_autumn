// // 递归
// var inorderTraversal = function (root) {
//   if (!root) return [];
//   let res = [];
//   if (root.left) {
//     res = res.concat(inorderTraversal(root.left));
//   }
//   res.push(root.val);
//   if (root.right) {
//     res = res.concat(inorderTraversal(root.right));
//   }
//   return res;
// };

// 非递归
var inorderTraversal = function(root) {
  let res = [];
  let stack = [];
  while (stack.length > 0 || root !== null) {
    // 循环，找到左子树为null的左侧节点
      while(root !== null) {
          stack.push(root);
          root = root.left;
      }
      root = stack.pop()
      // 左节点为空，所以直接返回当前节点的val，即输出根节点val
      // console.log(root);
      res.push(root.val);
      // 同样处理右子树
      root = root.right;
  }
  return res;
};
