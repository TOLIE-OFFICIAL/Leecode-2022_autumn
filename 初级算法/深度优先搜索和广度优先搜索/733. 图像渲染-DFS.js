// 深度优先搜索
// 利用队列
var floodFill = function (image, sr, sc, newColor) {
    let curColor = image[sr][sc];
    if (curColor == newColor) return image;
    //创建bfs的队列
    const bfs = [[sr, sc]];
    while (bfs.length) {
        // 移除队尾的一项，并返回被移除的这项
        // 并利用解构赋值，给i，j进行赋值
        let [i, j] = bfs.shift();
        // 修改当前位置的颜色
        image[i][j] = newColor;
        // 判断相邻位置的元素值是否与初始颜色相同，相同就压入队列，反之不做处理
        if (i - 1 >= 0 && image[i - 1][j] == curColor) bfs.push([i - 1, j]);
        if (i + 1 < image.length && image[i + 1][j] == curColor) bfs.push([i + 1, j]);
        if (j - 1 >= 0 && image[i][j - 1] == curColor) bfs.push([i, j - 1]);
        if (j + 1 < image[0].length && image[i][j + 1] == curColor) bfs.push([i, j + 1]);
    }
    return image;
}
let res = floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2);
console.log(res);