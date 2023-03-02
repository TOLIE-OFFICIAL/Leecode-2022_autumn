/***
 * 图的特点：
    1.一组顶点：通常用 V （Vertex）表示顶点的集合；
    2一组边：通常用E（Edge）表示边的集合； (边是顶点和顶点之间的连线);
    3.边可以是有向的，也可以是无向的。比如A----B表示无向，A ---> B 表示有向；
 */

function Graph() {
  this.vertexes = []; // 数组存储节点
  this.edges = new Map(); // 利用hash表存储各个节点的边
}

// 添加节点
Graph.prototype.addVertex = function (v) {
  this.vertexes.push(v);
  this.edges.set(v, new Array());
};

// 添加边
Graph.prototype.addEdge = function (v1, v2) {
  // 传入俩个节点
  this.edges.get(v1).push(v2);
  this.edges.get(v2).push(v1);
};

// 添加toString()方法，以邻接表的形式输出图
Graph.prototype.toString = function () {
  let str = "";
  for (let item of this.vertexes) {
    str += item + "--->" + this.edges.get(item).toString() + "\n";
    // console.log(item + "--->" + this.edges.get(item).toString());
  }
  return str;
};

// 添加一个数组记录是否被访问过
Graph.prototype.initColors = function () {
  let color = new Map();
  for (let i = 0; i < this.vertexes.length; i++) {
    // console.log(this.vertexes[i]);
    // color[i] = "white";
    color.set(this.vertexes[i], "white");
  }
  return color;
};

// <!--- 测试 ---->
let graph = new Graph();

//2.添加顶点
let myVertexes = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (let i = 0; i < myVertexes.length; i++) {
  graph.addVertex(myVertexes[i]);
}

//3.添加边
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
// 输出
// console.log(graph.toString());

export default graph;

// console.log(graph.initColors());
