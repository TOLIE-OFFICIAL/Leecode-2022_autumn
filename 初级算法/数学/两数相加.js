// 暴力枚举，复杂度n^2

// var twoSum = function (nums, target) {
//     for (let m = 0; m < nums.length; m++) {
//         for (let n = m + 1; n < nums.length; n++) {
//             if (nums[m] + nums[n] === target) {
//                 console.log([m, n]);
//             }
//         }
//     }
// };



// 利用map
var twoSum = function (nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const d = target - nums[i]

        // console.log(d);
        // console.log(map);

        if (map.has(d)) {
            return [map.get(d), i];
            // console.log([map.get(d), i]);
        }
        map.set(nums[i], i)
    }
};



twoSum([6, 4, 5, 11], 10);