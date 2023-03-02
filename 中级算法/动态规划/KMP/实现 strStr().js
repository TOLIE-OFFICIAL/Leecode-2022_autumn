// 1.暴力破解
var strStr = function (haystack, needle) {
    let n = needle.length;
    let h = haystack.length;
    if (n === 0) {
        return 0
    }
    // 循环遍历haystack
    for (let i = 0; i <= h - n; i++) {
        let a = i;//haystack的新起点
        let b = 0;//needle的起点
        while (b < n && haystack[a] == needle[b]) {
            // b<n,遍历过程中的所有字符都相同
            // while循环结束
            a++;
            b++;
        }
        // 循环结束之后，如果相同的位数等于needle的位数
        // 表示成功匹配,并返回此时的下标i
        if (b == n) {
            return i
        }
    }

    return -1;
};

console.log(strStr('hello', 'll'));
// strStr('hello', 'll');