function mostOccured(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        let count = 1
        for( let j = i + 1; j < array.length; j++) {
            // console.log(`comparing ${array[i]} to ${array[j]}`)
            if ( array[i] == array[j]) count++
        }
        if ( count > result && count > 1) result = count;
    }
    return result;
}


console.log(mostOccured([3, 3, 3, 1, 1, 1, 2, 2, 2]));
console.log(mostOccured([1, 2, 3, 4, 1, 2, 2, 2, 5]));
console.log(mostOccured([5, 5, 5, 5, 5, 5, 5]));
console.log(mostOccured([1, 2, 3, 4, 5, 6]));
console.log(mostOccured([-1, -2, -3, -4, -1, -2, -2, -2, -5]));