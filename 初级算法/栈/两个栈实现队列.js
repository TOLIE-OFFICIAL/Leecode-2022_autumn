function Queue() {
  function Stack() {
    var item = [];
    this.push = (node) => {
      item.push(node);
    };
    this.pop = () => {
      return item.pop();
    };
    this.isEmpty = () => {
      return item.length === 0;
    };
    this.get = () => {
      return item;
    };
  }

  const stack1 = new Stack();
  const stack2 = new Stack();

  this.push = (node) => {
    stack1.push(node);
  };
  this.pop = () => {
    if (stack2.isEmpty() && !stack1.isEmpty()) {
      while (!stack1.isEmpty()) {
        stack2.push(stack1.pop());
      }
    }
    // console.log(stack2.get());
    return stack2.pop();
  };
}
var queue = new Queue();
queue.push(0);
queue.push(1);
queue.push(2);

console.log(queue.pop());
