var twoSum = function (numbers, target) {
    let len = numbers.length;
    for (let i = 0; i < len; i++) {
        // 这里没有考虑越界问题？？？
        const temp = target - numbers[i];
        let end = len - 1;
        let start = i + 1;
        while (start <= end) {
            let mid = Math.ceil(start + (end - start) / 2);
            if (numbers[mid] > temp) {
                end = mid - 1;
            } else if (numbers[mid] < temp) {
                start = mid + 1;
            } else {
                return [i + 1, mid + 1];
            }
        }
    }
    return [-1, -1];
};