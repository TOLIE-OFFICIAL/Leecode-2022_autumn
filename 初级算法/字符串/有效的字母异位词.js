var isAnagram = function (s, t) {
  let map = new Map();
  for (let i of s) {
    if (!map.has(i)) {
      map.set(i, 1);
    } else {
      map.set(i, map.get(i) + 1);
    }
  }
  for (let i of t) {
    if (!map.has(i)) {
      return false;
    } else {
      map.set(i, map.get(i) - 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) != 0) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("nagaram", "anagram"));
