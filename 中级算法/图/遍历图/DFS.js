import graph from "../实现图-邻接表法.js";
/**
 * 深度优先搜索
 * 因为图是多对多的结构，
 * 注意需要使用一些标志，判断否被访问过
 * 避免重复遍历
 *
 * 所以需要一个数据结构记录每个节点的访问状态
 * white 代表未遍历 / 未放入queue
 * gary 代表已放入queue
 * black代表已经遍历完成
 *
 * 采用递归
 *  */

function dfs(graph, initV) {
  let color = graph.initColors();
  let res = [];
  dfsVisit(graph, initV, color, res);
  return res;
}
function dfsVisit(graph, node, color, res) {
  color.set(node, "gray");
  res.push(node);
  let vNeighbours = graph.edges.get(node);
  for (let item of vNeighbours) {
    if (color.get(item) === "white") {
      dfsVisit(graph, item, color, res);
    }
  }
  // 此节点遍历完成，且兄弟节点也进入遍历
  color.set(node, "black");
}
// console.log("white" === 'white');
console.log(dfs(graph, "A"));
