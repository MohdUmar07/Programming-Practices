function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const sorted = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted.push(left[i]);
            i++;
        } else {
            sorted.push(right[j]);
            j++;
        }
    }

    return sorted.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
