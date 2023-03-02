// 除上较大的，结果就会偏小，mid 就需要左移
// 反之就需要右移
var isPerfectSquare = function (num) {
    let left = 0;
    let right = num;
    while (left <= right) {
        let mid = Math.ceil(left + (right - left) / 2);
        if (num / mid > mid) {
            left = mid + 1;
        } else if (num / mid < mid) {
            right = mid - 1;
        } else return true;
    }
    return false;
};

let result = isPerfectSquare(100);
console.log(result);