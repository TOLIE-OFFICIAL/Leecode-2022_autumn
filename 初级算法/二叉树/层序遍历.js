// 队列实现，BFS广度优先搜索
// var levelOrder = function (root) {
//   if(!root) return [];
//   let queue = [root];
//   let res = [];
//   while (queue.length) {
//     let len = queue.length;
//     let arr = [];
//     for (let i = 0; i < len; i++) {
//       let cur = queue.shift();
//       arr.push(cur.val);
//       if (cur.left) {
//         queue.push(cur.left);
//       }
//       if (cur.right) {
//         queue.push(cur.right);
//       }
//     }
//     res.push(arr);
//   }
//   return res;
// };

// DFS 深度优先搜索
var levelOrder = function (root) {
  if (!root) return [];
  let res = [];
  getOrder(root, 0, res);
  return res;

  function getOrder(root, level, res) {
    if (!root) return;
    if (level >= res.length) {
      res.push([]);
    }
    res[level].push(root.val);
    // 递归调用，实现DFS
    getOrder(root.left, level + 1, res);
    getOrder(root.right, level + 1, res);
  }
};

// console.log([1,2,3][1])
