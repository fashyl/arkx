// Complete the function `scramble(str1, str2)` that returns `true` 
// if a portion of `str1` characters can be rearranged to match `str2`,
// otherwise returns `false`.

// **Notes:**
// -   Only lower case letters will be used (a-z). 
// -   No punctuation or digits will be included.
// -   Performance needs to be considered.
 
// slow as hell. > 60s
function scraaaaaaaaaaaamable(str1, str2) {
    return [...str2].map(char2 => [...str1].some(char1 => char1 === char2)).join('') === str2
  }  

// still slow > 60s
function scraaaaaaaaaaaaaaaaaaaaaaamble(str1, str2) { // linear? 
    let count = 0;
    for (let i = 0; i < str2.length; i++) {
        let j = 0;
        while(count < str2.length && j < str1.length) {
            console.log('iteration : ', j, ' str2 : ', str2[i], ' str2 : ', str1[j])
            if(str2[i] === str1[j]) count++;
            j++
        }
        console.log(count);
    }
    return count === str2.length;
}
// 0.05s user 0.03s system 86% cpu 0.090 total
function scramble(str1, str2) {
  const freq = {};
  for (let char of str1) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!freq[char]) return false;
    else freq[char]--;
  }
  return true;
}

  let s1 = "abcdefghijklmnopqrstuvwxyz".repeat(10_000);
  let s2 = "zyxcba".repeat(9_000);
  console.log(scramble(s1, s2))// true;

console.log(scramble('rkqodlw', 'world')); // ==> True
console.log(scramble('cedewaraaossoqqyt', 'codewars')); // ==> True
console.log(scramble('katas', 'steak')); // ==> False
