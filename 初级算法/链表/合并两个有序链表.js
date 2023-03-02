// 非递归
// var mergeTwoLists = function (list1, list2) {
//   if (!list1) return list2;
//   if (!list2) return list1;
//   let res = new ListNode();
//   let cur = res;
//   while (list1 && list2) {
//     if (list1.val > list2.val) {
//       cur.next = list2;
//       list2 = list2.next;
//     } else {
//       cur.next = list1;
//       list1 = list1.next;
//     }
//     cur = cur.next;
//   }
//   cur.next = !list1 ? list2 : list1;
//   return res.next;
// };

// 递归
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
