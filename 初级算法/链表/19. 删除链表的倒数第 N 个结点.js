// 双指针
var removeNthFromEnd = function (head, n) {
    let fast = head;
    let slow = head;
    for (let i = 1; i <= n; i++) {
        fast = fast.next;
    }
    if (fast == null) return head.next //说明删除的是头节点
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next; //删除指定节点
    return head;
};