// Write a method that takes an array of consecutive (increasing)
// letters as input and that returns the missing letter in the array.

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

function findMissingLetter(array) {
    let current;
  for (let i = 0; i < array.length; i++) {
    current = array[i].charCodeAt(); // 'O' : '79' 
    if((current + 1) !== array[i + 1].charCodeAt()) {
        break;
    }
  }
  return String.fromCharCode(current + 1);
} // f d9ay9 with Simoooooo

console.log(findMissingLetter(['a','b','c','d','f'])); // 'e'
console.log(findMissingLetter(['O','Q','R','S'])); // 'P'

// **NOTES* 
// The charCodeAt() method returns an integer between 0 and 65535 
// representing the UTF-16 code unit at the given index.

// The opposite of this is String.fromCharCode(10)
"ABC".charCodeAt(0) // returns 65
String.fromCharCode(65,66,67); // returns 'ABC'

// Here is a quick ASCII characters reference:

ASCII = {
"31": "",      "32": " ",     "33": "!",     "34": "\"",    "35": "#",    
"36": "$",     "37": "%",     "38": "&",     "39": "'",     "40": "(",    
"41": ")",     "42": "*",     "43": "+",     "44": ",",     "45": "-",    
"46": ".",     "47": "/",     "48": "0",     "49": "1",     "50": "2",    
"51": "3",     "52": "4",     "53": "5",     "54": "6",     "55": "7",    
"56": "8",     "57": "9",     "58": ":",     "59": ";",     "60": "<",    
"61": "=",     "62": ">",     "63": "?",     "64": "@",     "65": "A",    
"66": "B",     "67": "C",     "68": "D",     "69": "E",     "70": "F",    
"71": "G",     "72": "H",     "73": "I",     "74": "J",     "75": "K",    
"76": "L",     "77": "M",     "78": "N",     "79": "O",     "80": "P",    
"81": "Q",     "82": "R",     "83": "S",     "84": "T",     "85": "U",    
"86": "V",     "87": "W",     "88": "X",     "89": "Y",     "90": "Z",    
"91": "[",     "92": "\\",    "93": "]",     "94": "^",     "95": "_",    
"96": "`",     "97": "a",     "98": "b",     "99": "c",     "100": "d",    
"101": "e",    "102": "f",    "103": "g",    "104": "h",    "105": "i",    
"106": "j",    "107": "k",    "108": "l",    "109": "m",    "110": "n",    
"111": "o",    "112": "p",    "113": "q",    "114": "r",    "115": "s",    
"116": "t",    "117": "u",    "118": "v",    "119": "w",    "120": "x",    
"121": "y",    "122": "z",    "123": "{",    "124": "|",    "125": "}",    
"126": "~",    "127": ""
}