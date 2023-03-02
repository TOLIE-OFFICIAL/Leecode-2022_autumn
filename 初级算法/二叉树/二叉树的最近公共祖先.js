// 思路
// 递归寻找从root分别到两个节点的路径，
// 从两个路径中找到公共节点，直到找到第一个不相同的节点为止，返回这个节点的前一个节点

// 注意！！！提示里的前提：所有 Node.val 互不相同
var lowestCommonAncestor = function (root, p, q) {
  const getPath = (root, target, path) => {
    if (!root) return false;
    path.push(root);
    if (root.val === target.val) return true;
    if (getPath(root.left, target, path) || getPath(root.right, target, path))
      return true;
    path.pop();
  };

  let p_path = [];
  let q_path = [];

  getPath(root, p, p_path);
  getPath(root, q, q_path);
  let i = 0;
  for (; i < Math.min(q_path.length, p_path.length); i++) {
    if (p_path[i] != q_path[i]) break;
  }
  return p_path[i - 1];
};
