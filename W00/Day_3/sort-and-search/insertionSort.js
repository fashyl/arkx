function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        let j = i;
        while ( j >= 0 && array[j - 1] > temp ) { // shift to the right
            array[j] = array[j - 1];
            j--;
        }
        array[j] = temp;
    }
    return array;
}

console.log(insertionSort([1, 2, 1, 2, 1, 3, 2, 4, 3, 4, 5, 6, 5, 6, 7, 8, 7, 8, 9, 10, 9, 10, 11, 12, 11, 12, 13, 14, 13, 14, 15, 16, 15, 16, 17, 18, 17, 18, 19, 20, 19, 20]).join(' '))
console.log(insertionSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5, 0, 2, 8, 8, 4, 1, 9, 7, 1, 6, 9, 3, 9, 9]).join(' '))
console.log(insertionSort([10, 5, 9, 2, 8, 7, 1, 4, 5, 2, 3, 6, 9, 8, 7, 3, 1, 6, 4, 10, 8, 5, 3, 9, 6, 10, 2, 7, 1, 4, 5, 2, 3, 6, 9, 8, 7, 3, 1, 6, 4, 10, 8, 5, 3, 9]).join(' '))
console.log(insertionSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]).join(' '))