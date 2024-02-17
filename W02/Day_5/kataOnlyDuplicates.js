// Given a string,
// remove any characters that are unique from the string.

// Example:
// input: "abccdefee"
// output: "cceee"

function onlyDuplicates(str) {
  return [...str].filter((char, i, arr) => {
    for (let j = 0; j < arr.length; j++) {
      if (j !== i && char === arr[j]) return true;
    }
  }).join('');
}