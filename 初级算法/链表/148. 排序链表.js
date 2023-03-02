// 冒泡排序   ！！超时
// var sortList = function (head) {
//   if (!head) return head;
//   let left = head;
//   let right = head.next;
//   while (right?.next && left?.next) {
//     console.log(111);
//     // 第一个节点值挨个与后面比，找出最小的放在最左边
//     if (left.val > right.val) {
//       [left.val, right.val] = [right.val, left.val];
//     }
//     right = right.next;
//     if (!right) {
//       left = left.next;
//       right = left.next;
//     }
//   }
//   return head;
// };
