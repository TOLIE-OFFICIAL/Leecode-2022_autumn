// // 整数数组 nums ，其中元素已经按  升序  排列，请你将其转换为一棵 高度平衡 二叉搜索树。
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var sortedArrayToBST = function (nums) {
  let len = nums.length;
  if (!nums || len === 0) return null;
  let mid = Math.floor((0 + nums.length) / 2);
  let root = new TreeNode();
  root.val = nums[mid];
  if (len === 1) return root;
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9, 10]));

// console.log([-10, -3, 0, 5, 9].slice(0, 2));
