// 直接使用java等语言中的解法，会造成执行栈溢出，但整体的思路是一样的

/* var dx = [-1, 0, 0, 1];
var dy = [0, 1, -1, 0];
// 保存初始位置的值，传入搜索函数中，开始搜索
var floodFill = function (image, sr, sc, newColor) {
    let curColor = image[sr][sc];
    if (curColor == newColor) {
        return image;
    }
    bfs(image, sr, sc, curColor, newColor);
    return image;
}
// 广度优先搜索
var bfs = function (image, sr, sc, curColor, newColor) {
    if (image[sr][sc] == curColor) {
        image[sr][sc] = newColor;
    }
    for (let i = 0; i < dx.length; i++) {
        sr = sr + dx[i];
        sc = sc + dy[i];
        if (sr >= 0 && sr < image.length && sc >= 0 && sc < image[0].length) {
            bfs(image, sr, sc, curColor, newColor)
        }
    }
}*/

var floodFill = function (image, sr, sc, newColor) {
    const row = image.length, col = image[0].length
    let curColor = image[sr][sc];
    if (curColor == newColor) return image;
    const bfs = (i, j) => {
        // 如果越界或者值不等于初始颜色，不再修改颜色
        if (i < 0 || i >= row || j < 0 || j >= col || image[i][j] != curColor) return
        // 修改目标位置的颜色为新的颜色
        image[i][j] = newColor
        // 判断其他相邻四个位置的情况
        bfs(i - 1, j);
        bfs(i + 1, j);
        bfs(i, j - 1);
        bfs(i, j + 1);
    }

    bfs(sr, sc);
    // 所有的判断结束之后，返回最终结果
    return image;
}


let res = floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2);
console.log(res);