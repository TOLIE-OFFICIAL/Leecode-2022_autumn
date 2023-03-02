// 说明:为什么返回数值是整数，但输出的答案是数组呢?
// 请注意，输入数组是以 “引用” 方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
// 所以函数会根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。

var removeElement = function (nums, val) {
    let fast = 0;
    let slow = 0;
    while (fast < nums.length) {
        if (nums[fast] != val) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    // return 3;  // 返回结果就是 [2,2,2] 3
    return slow;
};