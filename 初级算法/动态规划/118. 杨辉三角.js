// 直接计算
var generate = function (numRows) {
    // 创建一个空数组，用来存储结果
    let result = new Array();
    // 根据层数遍历
    for (let i = 0; i < numRows; i++) {
        let row = new Array(i + 1).fill(1);
        for (let j = 1; j < row.length - 1; j++) {
            row[j] = result[i - 1][j] + result[i - 1][j - 1];
        }
        result.push(row);
    }
    return result;
};


let result = generate(5);
console.log(result);