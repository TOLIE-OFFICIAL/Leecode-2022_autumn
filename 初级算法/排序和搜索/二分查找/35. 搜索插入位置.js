var searchInsert = function (nums, target) {
    let n = nums.length;
    let left = 0;
    let right = n - 1;
    while (left < right) {
        // 注意这里要取整，js没有java的隐形转换
        let mid = Math.ceil(left + (right - left) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if (left > right) {
        return left;
    }
    if (nums[left] == target) {
        return left
    } else if (nums[left] > target) {
        return left
    } else {
        return left + 1;
    }
};

console.log(searchInsert([1, 3, 5, 6], 2));