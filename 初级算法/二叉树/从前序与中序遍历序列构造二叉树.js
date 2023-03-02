var buildTree = function (preorder, inorder) {
  const res = (inorder) => {
    if (inorder.length == 0 || !inorder) return null;
    let top = preorder.shift();
    let p = inorder.indexOf(top); //查找中序遍历中根节点所在位置
    let tree = new TreeNode(top);
    tree.left = res(inorder.slice(0, p));
    tree.right = res(inorder.slice(p + 1));
    return tree;
  };
  return res(inorder);
};
console.log([1, 2, 3].slice(3));
