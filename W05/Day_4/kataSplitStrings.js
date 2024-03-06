// Splits the string into pairs of two characters.
// If the string contains an odd number of characters 
// then it should replace the missing second
// character of the final pair with an underscore ('_').

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    let result = [];
    for (let index = 0; index < str.length; index+=2) {
       result.push([str[index], str[index + 1] || '_'].join(''));
    }
    return result;
}

console.log(solution("abcdef")); //  ["ab", "cd", "ef"]
console.log(solution("abcdefg")); //  ["ab", "cd", "ef", "g_"]
console.log(solution("")); //  []