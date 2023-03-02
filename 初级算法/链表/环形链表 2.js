var detectCycle = function (head) {
  if (!head) return null;
  let slow = head,
    fast = head,
    length = 0,
    count = 0;
  while (slow) {
    slow = slow.next;
    length++
  }
  slow = head;
  console.log(length);
  // while (fast && fast.next) {
  //   // 每次多走一步，第一次相遇的时候多走n步，那么这个环就有n个节点
  //   fast = fast.next.next;
  //   slow = slow.next;
  //   count++;
  //   //如果相遇，说明有环，直接返回true
  //   if (fast == slow) return length-count;
  // }
  // return null;
};
