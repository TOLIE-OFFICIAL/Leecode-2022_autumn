// 一、根据轮转的位置，分割拼接数组
// 本地运行正确但是力扣报错
/*var rotate = function (nums, k) {
    let arr = nums.slice(-k);
    arr = arr.concat(nums);
    for (let i = 0; i < k; i++) {
        arr.pop();
    }
    return arr;
};*/

// 二、循环插入删除
/*var rotate = function (nums, k) {
    let right = nums.length - 1;
    for (let i = 0; i < k; i++) {
        nums.splice(0, 0, nums[right]);
        nums.pop();
    }
    return nums;
};*/

// 三、三次翻转数组
var reverseArr = function (arr, right, left) {
    while (right >= left) {
        arr[right] = [arr[left], arr[left] = arr[right]][0];
        right--;
        left++;
    }
};
var rotate = function (nums, k) {
    let len = nums.length - 1;
    k %= nums.length;
    // k对长度取余数，如果k=3，长度为2，翻转三次和翻转一次是一样的
    reverseArr(nums, len, 0);
    reverseArr(nums, k - 1, 0);
    reverseArr(nums, len, k);
    return nums;
};

let res = rotate([1, 2, 3, 4, 5, 9, 10, 11], 3);
console.log(res);
