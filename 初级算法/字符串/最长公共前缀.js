var longestCommonPrefix = function (strs) {
    let minLength = strs[0].length;
    let str = '';
    for (let i = 1; i < strs.length; i++) {
        let strLength = strs[i].length;
        if (minLength > strLength) {
            minLength = strLength
        }
    }
    if (!strs.length) {
        return str;
    }
    for (let n = 0; n < minLength; n++) {//第m位的第几个
        for (let m = 1; m < strs.length; m++) {
            // set.add(strs[m][n]);
            if (strs[m][n] != strs[0][n]) {
                return str;
            }
        }
        str += strs[0][n];
    }
    return str;
};

// strs = ["dog", "racecar", "car"];
strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(strs));
