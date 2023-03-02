const internal = require("stream");

function PriorityQueue() {
  var items = [];
  function PriorityElement(priority, element) {
    this.priority = priority;
    this.element = element;
  }
  this.enqueue = function (priority, element) {
    let queueElem = new PriorityElement(priority, element);
    if (items.length == 0) {
      return items.push(queueElem);
    } else {
      for (let i = 0; i < items.length; i++) {
        if(items[i].priority>=queueElem.priority) continue;
        return items.splice(i, 0, queueElem);
      }
      return items.push(queueElem)
    }
  };
  this.dequeue = function () {
    return items.shift()
  };
  this.toString = function () {
    return items.toString()
  };
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue(2,'tom');
console.log(priorityQueue.toString())
priorityQueue.enqueue(1,'jack');
priorityQueue.enqueue(3,'jarry');
console.log(priorityQueue.toString())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())