// 二叉搜索樹的特點就是，左側節點值必須小於父節點，
// 父節點的值必須小於右側節點
function insertNode(root, node) {
  if (node.key < root.key) {
    if (!root.left) {
      root.left = node;
    } else {
      insertNode(root.left, node);
    }
  } else {
    if (!node.right) {
      root.right = node;
    } else {
      insertNode(root.right, node);
    }
  }
}
let BST = function () {
  function Node(key) {
    this.left = null;
    this.right = null;
    this.key = key;
  }
  var root = null;
  this.insert = function (key) {
    let node = new Node(key);
    if (!root) {
      root = node;
    } else {
      insertNode(root, node);
    }
  };
};

let bts = new BST();
console.log(bts);
