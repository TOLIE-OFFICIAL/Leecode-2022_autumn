/*
递归法。
  两个节点同时为空true，两个节点其中一个为空false
  两个节点相等 且 左节点的左子树等于有节点的右子树 且 左节点的右子树等于右节点的左子树，为镜像返回true。
*/

// var isSymmetric = function (root) {
//   if (!root) return true;
//   function compare(left, right) {
//     // 两个节点同时为空true
//     if (left === null && right === null) {
//       return true;
//     }
//     // 两个节点其中一个为空false
//     if (left === null && right) return false;
//     if (left && right === null) return false;
//     // 两个节点相等 且 左节点的左子树等于有节点的右子树
//     // 且 左节点的右子树等于右节点的左子树，为镜像返回true。
//     if (
//       left.val === right.val &&
//       compare(left.left, right.right) &&
//       compare(left.right, right.left)
//     ) {
//       return true;
//     }
//     return false;
//   }
//   return compare(root.left, root.right);
// };

// 非递归法 ,左右子树遍历结果相同！！！！不可行

// 非递归法 ,层序遍历，空值保留null
var isSymmetric = function (root) {
  if (!root) return true;

};
console.log([null].toString());