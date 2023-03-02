function getUrlParam(url, param) {
  let index = url.indexOf("?");
  if (index === -1) return;
  url = url.slice(index + 1);
  let arr = url.split("&");
  arr = arr.map((item) => {
    const [key, val] = item.split("=");
    return {
      key,
      val,
    };
  });
  let res = null;
  arr.forEach((item) => {
    if (item.key === param) {
      res = item.val;
    }
  });
  return res;
}

console.log(
  getUrlParam("https://www.gaotu.cn/?title=%E9%AB%98%E9%80%94", "title")
);
