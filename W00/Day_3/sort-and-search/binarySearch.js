function binarySearch(array, element) {
  while (array.length > 0) {
    let half = Math.floor(array.length / 2);
    if (array[half] == element) return element + " FOUND!";
    if (element > array[half]) {
      array.splice(0, half);
    } else {
      array.splice(half, array.length);
      console.log(array);
    }
  }
  return 'NOT FOUND';
}


console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
console.log(binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 40));
console.log(binarySearch([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 14));
console.log(binarySearch([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 900));
console.log(binarySearch([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 25));

console.log(binarySearch(["apple", "banana", "cherry", "date", "elderberry"], "date"));
console.log(binarySearch(["cat", "dog", "elephant", "fish", "giraffe"], "fish"));
console.log(binarySearch(["airplane", "boat", "car", "train", "truck"], "car"));
console.log(binarySearch(["apple", "banana", "grape", "orange", "strawberry"], "grape"));
console.log(binarySearch(["ant", "bee", "caterpillar", "dragonfly", "earwig"], "bee"));