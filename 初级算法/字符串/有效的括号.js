// 利用栈进行比较
// 如果入栈的是右侧括号，则必须与栈顶的括号匹配
var isValid = function (s) {
    let stark = [];
    for (let i = 0; i < s.length; i++) {
        //如果是左括号就压入栈
        if (s[i] === '[' || s[i] === '{' || s[i] === '(') {
            stark.push(s[i]);
        } else {
            //不是左括号，就与栈最上方的字符进行比较，如果匹配就讲最上方的字符弹出栈
            let len = stark.length;
            if (!len == 0 && stark[len - 1] === leftOf(s[i])) {
                stark.pop();
            } else {
                // 如果不匹配返回FALSE
                return false;
            }
        }
    }
    // 循环结束之后，如果此时栈内为空，则返回true
    return stark.length === 0;
};

var leftOf = function (c) {
    if (c == '}') return '{';
    if (c == ')') return '(';
    return '[';
}

// isValid("([)]");