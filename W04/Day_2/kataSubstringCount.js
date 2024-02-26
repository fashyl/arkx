// Complete the solution so that it returns the number of
// times the search_text is found within the full_text.  
// searchSubstr( fullText, searchText, allowOverlap = true )


// so that overlapping solutions are (not) counted. 
// If the searchText is empty, it should return `0`. 

function searchSubstr( fullText, searchText, allowOverlap = true ){
    if(!searchText) return 0
    // `match` returns an array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.
    if (!allowOverlap) return fullText.match(new RegExp(searchText, 'g')).length;
    if(fullText.length - searchText.length === 1) return fullText.split(new RegExp(searchText)).length;
    // Splits given string into an array by separating the string into substrings.
    return fullText.split(new RegExp(searchText)).length - 1;
}

// Usage examples
console.log(searchSubstr('aa_bb_cc_dd_bb_e', 'bb')); // should return 2 since bb shows up twice
console.log(searchSubstr('aaabbbcccc', 'bbb')); // should return 1
console.log(searchSubstr( 'aaa', 'aa' )); // should return 2
console.log(searchSubstr( 'aaa', '' )); // should return 0
console.log(searchSubstr( 'aaa', 'aa', false )); // should return 1
console.log(searchSubstr( 'aaaaaa', 'aa', false )); // should return 3