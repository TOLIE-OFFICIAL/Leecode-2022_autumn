var romanToInt = function (s) {
    const map = new Map()
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);

    const len = s.length;
    let result = map.get(s[len - 1]);
    if (len == 1) {
        return map.get(s);
    } else {
        for (let i = 1; i < len; i++) {
            if (map.get(s[i]) > map.get(s[i - 1])) {
                result -= map.get(s[i - 1]);
            } else {
                result += map.get(s[i - 1]);
            }
        }
        return result;
    }
}

s = "MCMXCIV";
romanToInt(s);