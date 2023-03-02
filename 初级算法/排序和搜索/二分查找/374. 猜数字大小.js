var guess = function (num) {
    if (num < 2) {
        return 1;
    } else if (num > 2) {
        return -1;
    } else {
        return 0
    }
};
var guessNumber = function (n) {
    if (n == 1) return 1;
    let left = 0;
    let right = n - 1;
    while (left <= right) {
        let mid = Math.ceil(left + (right - left) / 2);
        if (guess(mid) == 0) {
            return mid;
        } else if (guess(mid) == -1) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
};

console.log(guessNumber(2));