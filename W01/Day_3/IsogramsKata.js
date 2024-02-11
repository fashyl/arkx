/*
// Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.

// Example

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false

*/

function isIsogram(str){
        for (let h = 0; h < str.length; h++) {
            for (let i = 0; i < str.length; i++) {
                if (i != h) { 
                    if (str[i].toLowerCase() == str[h].toLowerCase()) {
                        return false;
                    }
                }
            }
        }
    return Boolean(str);
}

console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));