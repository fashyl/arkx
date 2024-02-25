function linearSearch(array, item) {
    let result = ''
    for (let i = 0; i < array.length; i++) {
        if ( array[i] === item ) result = true;
    }

    if(!result) return 'Not found.'
    return 'FOUND!!';
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
console.log(linearSearch([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10));
console.log(linearSearch([5, 3, 7, 2, 8, 4, 6, 1, 9, 10], 10));
console.log(linearSearch([100, 200, 300, 400, 10, 500], 10));
console.log(linearSearch([50, 30, 70, 20, 80, 40, 60, 10, 90, 100], 10));

console.log(linearSearch(["apple", "banana", "cherry", "date", "elderberry"], 'date'));
console.log(linearSearch(["zebra", "xylaphone", "wombat", "vulture", "unicorn"], 'x'));