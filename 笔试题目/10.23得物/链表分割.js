// function partition(head, target) {
//   let cur = head;
//   let bigList = new Node(Infinity); // 大于target的链表
//   let big = bigList;

//   let result = new Node(Infinity); // 结果
//   let res = result;
//   while (cur) {
//     if (cur.val < target) {
//       res.next = cur;
//       res = res.next;
//     } else {
//       big.next = cur;
//       big = big.next;
//     }
//     cur = cur.next;
//   }
//   result = result.next;
//   bigList = bigList.next;
//   cur = result;
//   while (cur.next) {
//     cur = cur.next;
//   }
//   cur.next = bigList;
//   return result;
// }

var partition = function(head, x) {
  //将链表中比X小的节点，放在左侧，比x大的元素放在x右侧，可以创建2个链表，分别装比x小的节点，和大的节点，然后连接到一起，返回即可

  if(!head || !head.next) return head;
  var smallList=new ListNode(-1),bigList=new ListNode(-1);
  var sCur=smallList,bCur=bigList;
  while(head){
      if(head.val< x){
          sCur.next=head;
          sCur=sCur.next;
      }else{
          bCur.next=head;
          bCur=bCur.next;
      }
      head=head.next;
  }
  sCur.next=bigList.next;
  bCur.next=null;
  return smallList.next;

};

console.log(partition(nodeList.head, 3));
