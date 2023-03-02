import graph from "../实现图-邻接表法.js";
// 不能引入，因为node是commonjs 不是一般的js
// 要想使用需要npm init 生成package.json,知名type为module

// console.log(graph);

/**
 * 广度优先搜索
 * 因为图是多对多的结构，
 * 注意需要使用一些标志，判断否被访问过
 * 避免重复遍历
 *
 * 所以需要一个数据结构记录每个节点的访问状态
 * white 代表未遍历 / 未放入queue
 * gary 代表已放入queue
 * black代表已经遍历完成，出队
 *  */

function bfs(graph, initV) {
  let color = graph.initColors();
  let queue = [initV];
  let res = [];
  while (queue.length) {
    let cur = queue.shift();
    // 处理相连接的节点
    let vNeighbours = graph.edges.get(cur);
    for (let item of vNeighbours) {
      if (color.get(item) === "white") {
        queue.push(item);
        color.set(item, "gary");
      }
    }
    // 遍历完成
    res.push(cur);
    color.set(cur, "black");
  }
  return res;
}

// console.log("white" === 'white');
console.log(bfs(graph, "A"));
