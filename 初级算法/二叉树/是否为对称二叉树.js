// 递归，！！注意不能直接比较复杂变量是否相等
/**
  var isSymmetric = function (root) {
  function compare(left, right) {
    // if(left ===right) return true; // !!!  × JS不能直接比较两个对象是否相等
    if (left === null && right === null) return true;
    // 先判断左右节点是否都存在
    if(left&&!right) return false;
    if(!left&&right) return false;
    // 左右节点存在了在判断左右节点的值是否相等
    // 再判断左右节点的孩子是否对称
    if (
      left.val === right.val &&
      compare(left.left, right.right) &&
      compare(left.right, right.left)
    ) {
      return true;
    } 
  }
  return compare(root,root)
};
*/

// 非递归 栈遇到相同的节点就弹出栈首的节点
var isSymmetric = function (root) {
  let queue = [root, root];
  while (queue.length) {
    let left = queue.shift();
    let right = queue.shift();
    // 都为空，返回true
    if (!right && !left) continue;
    // 有一个不为空，返回false
    if (left && !right) return false;
    if (!left && right) return false;
    // 两个值都不为空，且两值相同返回true
    if (left.val !== right.val) return false;

    queue.push(left.left);
    queue.push(right.right);
    queue.push(left.right);
    queue.push(right.left);
  }
  return true;
};
