// 方法一、直接平方后排序
// var sortedSquares = function (nums) {
//     const arr = nums.map(item => item ** 2);
//     arr.sort(function (a, b) {
//         return a - b;
//     });
//     return arr;
// };

// nums是递增的,nums小于零的部分平方后递减,nums大于零的部分平方后递增
var sortedSquares = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let result = [];
    while (left <= right) {
        if (nums[left] ** 2 >= nums[right] ** 2) {
            result.unshift(nums[left] ** 2);
            ++left;
        } else {
            result.unshift(nums[right] ** 2);
            --right
        }
    }
    return result;
};


let res = sortedSquares([-7, -3, 2, 3, 11]);
console.log(res);

