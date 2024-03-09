// There is an array of strings. All strings contains similar letters except one.

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'

// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

function findUniq(arr) {
  let uniq = false;
  return arr.find((str, index) => {
    for (let j = 0; j < str.length; j++) {
      if (uniq) return str;
        for (let i = 0; i < arr.length; i++) {
          if ( i !== index) {
            if (!arr[i].toLowerCase().includes(str[j].toLowerCase())) {
              uniq = true;
            } else {
              uniq = false;
              break;
            }
          }
      }
    }
    // return uniq ? str : null;
  });
}

console.log(findUniq(["", "", "", " ", "", "hello", "", "    ", ""])); // 'hello
console.log(
  findUniq(["apple", "banana", "banana", "orange", "orange", "pear"])
);
console.log(findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"])); // 'BbBb
console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"])); // 'foo
console.log(findUniq(["silvia", "vasili", "victor"])); // 'victor
console.log(
  findUniq(["Tom Marvolo Riddle", "I am Lord Voldemort", "Harry Potter"])
); // 'Harry Potter
console.log(findUniq(["    ", "a", " "]));