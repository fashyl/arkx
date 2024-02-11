For handling user data, managing lists of items, representing graphs or trees, and more.
# Arrays
 An array in JavaScript is a data structure that allows you to store multiple values in a single variable. These values can be of any data type (including numbers, strings, objects, and even other arrays), and each value is associated with a numeric index, starting from 0.
### Syntax:

Creating an array:

```javascript
let myArray = [1, 2, 3, 4, 5];
```

Accessing elements:

```javascript
console.log(myArray[0]); // Outputs: 1
```

Updating elements:

```javascript
myArray[1] = 10;
console.log(myArray); // Outputs: [1, 10, 3, 4, 5]
```

### Methods:

1. **push() and pop():**
   - `push()`: Adds one or more elements to the end of an array.
   - `pop()`: Removes the last element from an array.

```javascript
myArray.push(6);
console.log(myArray); // Outputs: [1, 10, 3, 4, 5, 6]

myArray.pop();
console.log(myArray); // Outputs: [1, 10, 3, 4, 5]
```

2. **shift() and unshift():**
   - `shift()`: Removes the first element from an array.
   - `unshift()`: Adds one or more elements to the beginning of an array.

```javascript
myArray.shift();
console.log(myArray); // Outputs: [10, 3, 4, 5]

myArray.unshift(0, 9);
console.log(myArray); // Outputs: [0, 9, 10, 3, 4, 5]
```

3. **slice():**
   - Returns a shallow copy of a portion of an array.

```javascript
let slicedArray = myArray.slice(1, 4);
console.log(slicedArray); // Outputs: [9, 10, 3]
```

4. **splice():**
   - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

```javascript
myArray.splice(2, 2, 20, 30);
splice(start, deleteCount, item1, item2, /* …, */ itemN)
console.log(myArray); // Outputs: [0, 9, 20, 30, 4, 5]
```

5. **concat():**
   - Combines two or more arrays.

```javascript
let anotherArray = [40, 50];
let combinedArray = myArray.concat(anotherArray);
console.log(combinedArray); // Outputs: [0, 9, 20, 30, 4, 5, 40, 50]
```

6. **length():**
   - represents the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.
```JS
let fruites = ["Banana", "Orange", "Apple"];
console.log(fruites.length) // 3
```
### Common Use Cases:

- **Storing a collection of related values:**
  ```javascript
  let colors = ['red', 'green', 'blue'];
  ```

- **Iterating over elements:**
  ```javascript
  for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
  }
  ```

- **Managing sets of data:**
  ```javascript
  let studentGrades = [90, 85, 95, 88, 92];
  ```

- **Implementing matrices**
```js
let colors = []
	[255, 0, 0], // Red
	[0, 255, 0], // Blue
	[0, 0, 255]  // Green
];
console.log(colors[2][2]) // Outputs 255
console.log(colors[3][1]) // Outputs 0

for ( let i = 0; i < colors.length; i++ ) {
	for ( let j = 0; j < colors[i].length; j++ ) {
			console.log(colors[i][j]); 
	}
}
```
- **Implementing queues and stacks:**
  ```javascript
  // Queue using push and shift FIFO
  myArray.push(6); // Adds the element 6 to the end of the queue ~ New customer
  let dequeuedElement = myArray.shift(); // Removes the first element ~ Satisfied customer?

  // Stack using push and pop LIFO
  myArray.push(7);
  let poppedElement = myArray.pop(); // Removes the last element from an array.
  ```

# Sorting & Searching
## Sorting
### . **Bubble Sort:**
- **Description:** Iteratively compares adjacent elements and swaps them if they are in the wrong order. The process is repeated until the entire array is sorted.
- **Time Complexity:** O(n^2) in the worst and average cases, O(n) in the best case (when the array is already sorted).
- **How ?** Start with the first element, compare it with the next, and swap if necessary. Continue this process until the entire list is sorted.
- ![BubbleSort|400](https://skilled.dev/images/bubble-sort.gif)
### 2. **Selection Sort:**
- **Description:** Divides the array into a sorted and an unsorted region. In each iteration, the smallest (or largest) element from the unsorted region is selected and swapped with the first element in the unsorted region.
- **Time Complexity:** O(n^2) in all cases (worst, average, and best).
- **How ?** Repeatedly find the minimum (or maximum) element in the *unsorted region* and swap it with the first element of the *sorted region*.
- ![SelectionSort | 400](https://res.cloudinary.com/practicaldev/image/fetch/s--nqLACVm8--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/jq1afuq2sqrsfyp0k0ii.gif)
### 3. **Insertion Sort:**
- **Description:** Builds the sorted array one element at a time by repeatedly taking elements from the unsorted part and inserting them into their correct position in the sorted part.
- **Time Complexity:** O(n^2) in the worst and average cases, O(n) in the best case (when the array is nearly sorted).
- ![InsertionSort|400](https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_494,h_523/https://thedukh.com/wp-content/uploads/2020/12/insertionsort.gif)
## Searching
### 1. **Linear Search:**
- **Description:** Iterates through each element in a collection (e.g., array) until a match is found.
- **Time Complexity:** O(n) - linear time complexity.
- ![LinearSearch|400](https://cdn.hashnode.com/res/hashnode/image/upload/v1660378050275/IeIWAipJM.gif)
### 2. **Binary Search:**
- **Description:** Applies to **sorted** collections and repeatedly divides the search range in half.
- **Time Complexity:** O(log n) - logarithmic time complexity.
- **Note:** Binary search works efficiently on sorted arrays.
- ![BinarySearch|400](https://d18l82el6cdm1i.cloudfront.net/uploads/bePceUMnSG-binary_search_gif.gif)
