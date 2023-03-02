// 核心是修改路径上节点的节点值
// 每个节点的节点值都是这个节点之前节点值的和
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let stack = [root];
  while (stack.length) {
    let cur = stack.pop();
    // 此节点为叶节点，且路径和等于targetSum
    if (cur.val=== targetSum && cur.left == null && cur.right == null)
      return true;
    if (cur.right) {
      cur.right.val = cur.right.val + cur.val;
      stack.push(cur.right);
    }
    if (cur.left) {
      cur.left.val = cur.left.val + cur.val;
      stack.push(cur.left);
    }
  }
  return false;
};