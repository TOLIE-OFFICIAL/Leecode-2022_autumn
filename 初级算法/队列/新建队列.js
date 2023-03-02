// 队列：先进先出；栈：后进先出
function Queue() {
  var items = [];
  this.enqueue = function (element) {
    items.push(element);
  };
  this.dequeue = function () {
    return items.shift();
  };
  this.front = function () {
    return items[0];
  };
  this.isEmpty = function () {
    return items.length == 0;
  };
  this.size = function () {
    return items.length;
  };
  this.toString = function () {
    return items.toString();
  };
}
let queue = new Queue();
console.log(queue.size());

queue.enqueue(3333);
queue.enqueue(2222);
queue.enqueue(1111);

console.log(queue.dequeue(), "s"); //333
console.log(queue.front(), "b"); //222

console.log(queue.toString());
