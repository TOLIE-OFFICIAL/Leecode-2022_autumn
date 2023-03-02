var countGoodSubstrings = function (s) {
    var arr = [];
    let res = 0;
    let left = 0, right = 2;
    while (right < s.length) {
        let i = left;
        for (; i <= right; i++) {
            if (arr.indexOf(s[i]) == -1) {
                arr.push(s[i]);
            } else {
                arr = [];
                break;
            };
        }
        left++;
        right++;
        if (arr.length == 3) {
            res++;
            arr = [];
        }
    }
    return res;
};

let s = "aababcabc";
let result = countGoodSubstrings(s);
console.log(result);