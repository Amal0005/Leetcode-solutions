/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    function merge(left, right) {
        const merged = [];
        let i = 0; j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                merged.push(left[i]);
                i++;
            } else {
                merged.push(right[j]);
                j++;
            }
        }
        while (i < left.length) {
            merged.push(left[i]);
            i++;
        }
        while (j < right.length) {
            merged.push(right[j]);
            j++;
        }
        return merged;
    }
    function mergeSort(arr, start = 0, end = arr.length - 1) {
        if (start === end) return [arr[start]]
        let mid = Math.floor((start + end) / 2);
        const left = mergeSort(arr, start, mid);
        const right = mergeSort(arr, mid + 1, end);
        return merge(left, right);
    }
    return mergeSort(nums)
};