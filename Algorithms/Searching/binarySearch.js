function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

const sortedArray = [2, 3, 4, 5, 8];
const targetBinary = 5;
const resultBinary = binarySearch(sortedArray, targetBinary);
console.log(`Element ${targetBinary} found at index: ${resultBinary}`);