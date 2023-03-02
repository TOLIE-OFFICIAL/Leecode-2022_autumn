var plusOne = function (digits) {
    const len = digits.length;
    if (digits[len - 1] != 9) {
        ++digits[len - 1];
        return digits;
    } else {
        for (let i = 1; i <= len; i++) {
            //如果末尾是9，就将其变成0，直至不为9，将不为9的位加一，返回digits
            //如果全是9，就继续向下执行
            if (digits[len - i] == 9) {
                digits[len - i] = 0;//  注意这里不能返回digits
            } else {
                ++digits[len - i];
                return digits;
            }
        }
    }
    //如果全是9，新建array填充0，再修改最高位为1
    const ans = new Array(len + 1).fill(0);
    ans[0] = 1;
    return ans;
};

console.log(plusOne([9]));
console.log(plusOne([4, 2, 3, 9, 9]));
console.log(plusOne([9, 9, 9, 9, 9]));