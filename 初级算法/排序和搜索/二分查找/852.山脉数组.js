var peakIndexInMountainArray = function (arr) {
	let right = arr.length - 1;
	let left = 0;
	let ans = 0;
	while (left <= right) {
		let mid = Math.ceil(left + (right - left) / 2);
		if (arr[mid] < arr[mid + 1]) {
			left = mid + 1;
		} else {
			ans = mid;
			right = mid - 1;
		}
	}
	return ans;
};

let result = peakIndexInMountainArray([0, 1, 2, 0]);
console.log(result);