var levelOrder = function(root) {
  let res = [];
  if(!root) return res;
  let stack = [root]
  while(stack.length){
    // 关键在于这个size，表示每层的节点个数
    let size = stack.length;
    let arr = [];
    for(let i = 0; i < size; i++){
      let cur = stack.shift();
      arr.push(cur.val);
      if(cur.left){
        stack.push(cur.left)
      }
      if(cur.right){
        stack.push(cur.right)
      }
    }
    res.push(arr)
    
  }
return res;
};