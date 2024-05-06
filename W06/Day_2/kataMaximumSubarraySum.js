// The maximum sum subarray problem consists in finding the maximum
// sum of a contiguous subsequence in an array or list of integers:

//  maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
//  should be 6: [4,-1, 2, 1]

// - Easy case is when the list is made up of only positive
// numbers and the maximum sum is the sum of the whole array.
// - If the list is made up of only negative numbers, return 0 instead.
// - Empty list is considered to have zero greatest sum.

// Note that the empty list or array is also a valid sublist/subarray.

/**
 * Hors-sujet, was solving for non-contiguousness
 */
var maxNonContiguousSequence = function (arr) {
  let max = 0;
  function subsequence(arr, current = [], index = 0, score, k) {
    console.log(current);
    if (k === current.length && score > max) {
      max = score;
      return;
    }

    if (index === arr.length) return;

    subsequence(arr, [...current, arr[index]], index + 1, score + arr[index], k);
    subsequence(arr, current, index + 1, score, k);
  }

  for(k = 0; k < arr.length; k++ ) {
    subsequence(arr, [] , 0 , 0, k);
  }

  return max;
};

/**
 * Kadane's Algorithm: the elegance.
 * 
 * Because of its exploitation of the following key mathematical observation:
 * If we're considering the maximum sum of a contiguous subsequence ending at the current element, 
 * 
 * - either this subsequence extends the previous contiguous subsequence (by adding the current element) 
 * - or it starts a new subsequence at the current element. (current_max =< 0) 
 * 
 * @param arr - The input array.
 * @returns The maximum sum of a contiguous subsequence.
 * @link https://en.wikipedia.org/wiki/Maximum_subarray_problem
 */
const maxSequence= function (arr) {
  if(!arr.length) return 0;

    let max = 0;
    let current = 0;
  
    for (let i = 0; i < arr.length; i++) {
      current = Math.max(arr[i], current + arr[i]);
      max = Math.max(max, current);
    }
  
    return max;
}


console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // should be 6
