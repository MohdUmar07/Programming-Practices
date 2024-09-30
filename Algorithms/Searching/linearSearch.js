function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target
        }
    }
    return -1; // Return -1 if not found
}

const array = [5, 3, 8, 4, 2];
const target = 4;
const result = linearSearch(array, target);
console.log(`Element ${target} found at index: ${result}`); // Element 4 found at index: 3
