// 字符串可变语言：C/C++, Ruby, PHP, Swift
// 字符串不可变语言：Java, Python, C#, Javascript, Go

// 思路：拆分长字符串
/*var reverseString = function (str) {
    let fast = str.length - 1;
    let arr = [];
    while (fast >= 0) {
        arr.push(str[fast]);
        fast--;
    }
    return arr.join('');
}
var reverseWords = function (s) {
    let res = [];
    let word = s.split(' ');
    for (let item of word) {
        res.push(reverseString(item));
    }
    return res.join(' ');
};

let s = "Let's take LeetCode contest";
console.log(reverseWords(s));
*/
