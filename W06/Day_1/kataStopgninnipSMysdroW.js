// Write a function that takes in a string of one or more words, and
// returns the same string, but with all words that have five or more letters
// reversed (Just like the name of this Kata). Strings passed in will consist
// of only letters and spaces. Spaces will be included only when more
// than one word is present.

function spinWords(string) {
  return string
    .split(" ")
    .map((str) => {
      let swap = [];
      if (str.length >= 5) {
        for (let i = str.length; i >= 0; i--) {
          swap.push(str[i]);
        }
        return swap.join('');
      }
      return str;
    })
    .join(" ");
} // 9 minutes.

console.log(spinWords("Welcome")); // "emocleW"
console.log(spinWords("Hey fellow warriors")); // "Hey wollef sroirraw"
console.log(spinWords("This is a test")); // "This is a test"
console.log(spinWords("This is another test")); // "This is rehtona test"
console.log(spinWords("You are almost to the last test")); // "You are tsomla to the last test"
console.log(spinWords("Just kidding there is still one more")); // "Just gniddik ereht is llits one more"
console.log(spinWords("Seriously this is the last one")); // "ylsuoireS this is the last one"

// **NOTE**: Array.prototype.reverse()
// The reverse() method of Array instances reverses an array in place and returns the reference to the same array,
// the first array element now becoming the last, and the last array element becoming the first.