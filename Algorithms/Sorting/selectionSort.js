function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

console.log(selectionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
