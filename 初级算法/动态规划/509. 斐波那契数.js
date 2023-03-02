var fib = function (n) {
    if (n == 0 || n == 1) return n;
    let dp_i_1 = 1; let dp_i_2 = 0;
    // 滚动更新，只保存要求位置的前两位数值
    for (let i = 2; i <= n; i++) {
        // DP table
        dp_i = dp_i_1 + dp_i_2;
        // 滚动更新
        dp_i_2 = dp_i_1;
        dp_i_1 = dp_i;
    }
    return dp_i;
};

let result = fib(3);
console.log(result);