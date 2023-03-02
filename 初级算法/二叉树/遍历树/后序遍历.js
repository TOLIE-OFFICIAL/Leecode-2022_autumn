// 非递归
// 对于迭代求前序遍历可以根节点先入栈，然后右子树进栈，最后左子树进栈； 根左右
// 此时便可以根节点先入栈，然后左子树进栈，最后右子树进栈，最后将列表逆序即为所求。  根右左 <=> 左右根
var postorderTraversal = function (root) {
  let res = [];
  let stack = [];
  stack.push(root);
  while (stack.length) {
    const cur = stack.pop();
    res.push(cur.val);
    if (cur.left) {
      stack.push(cur.left);
    }
    if (cur.right) {
      stack.push(cur.right);
    }
  }
  return res.reverse();
};
