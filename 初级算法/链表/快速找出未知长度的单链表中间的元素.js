// 思路:
// 双指针slow和fast,fast每次走2步,slow每次走1步,
// fast到终点,slow刚好位于正中

var middleNode = function (head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}