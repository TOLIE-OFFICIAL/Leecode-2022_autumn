var MinStack = function () {
  this.stack = [];
  this.min = Infinity;
  this.length = this.stack.length;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (val < this.min) this.min = val;
  this.length++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let cur = this.stack.pop();
  if (cur === this.min) this.min = Math.min(...this.stack);
  this.length--;
  return cur;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

// console.log(Infinity);
