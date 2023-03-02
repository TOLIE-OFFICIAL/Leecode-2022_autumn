var MyLinkedList = function () {
  this.head = null;
  this.length = 0;
};

// get 根据index获取对应节点的数据
MyLinkedList.prototype.get = function (index) {
  if (index >= this.length || index < 0) return -1; // 不存在
  let curr = this.head,
    count = 0;
  while (count < index) {
    curr = curr.next;
    count++;
  }
  count = null;
  return curr.val;
};
// 在头部添加节点
MyLinkedList.prototype.addAtHead = function (val) {
  // 链表为空
  if (!this.head) {
    this.head = { val, next: null };
  } else {
    // 链表不为空
    let node = { val, next: this.head };
    this.head = node;
  }
  this.length++;
};
// 在尾部添加节点
MyLinkedList.prototype.addAtTail = function (val) {
  let node = { val, next: null };
  // 链表为空
  if (!this.head) {
    this.head = node;
  } else {
    // 链表不为空
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node;
  }
  this.length++;
};
// 在index位置之前插入添加节点
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (!this.head) this.addAtHead(val);
  if (index > this.length) return;
  if ((index = this.length)) this.addAtTail(val);
  else if (index <= 0) this.addAtHead(val);
  else {
    let curr = this.head,
      count = 0;
    while (count < index) {
      curr = curr.next;
      count++;
    }
    count = null;
    let newNode = { val: curr.val, next: curr.next };
    curr.next = newNode;
    curr.val = val;
  }
  this.length++;
};
// 删除index位置的节点
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index > this.length || !this.head) return;
  let curr = this.head;
  let count = 0;
  // 获取index位置节点
  while (count  < index) {
    curr = curr.next;
    count++;
  }
  count = null;
  curr.val = curr.next.val;
  curr.next = curr.next.next;
  this.length--;
};
