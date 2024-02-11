/*
0 ,4 ,6 ,8 ,8 ,8 ,5 ,5 ,7
acc: 0; current: 0; index: 0; input[index + 1] : 4
acc: 0,4; current: 4; index: 1; input[index + 1] : 6
acc: 0,4,6; current: 6; index: 2; input[index + 1] : 8
acc: 0,4,6,8; current: 8; index: 3; input[index + 1] : 8
acc: 0,4,6,8,8; current: 8; index: 4; input[index + 1] : 8
acc: 0,4,6,8,8,8; current: 8; index: 5; input[index + 1] : 5
acc: 0,4,6,8,8,8,5; current: 5; index: 6; input[index + 1] : 5
acc: 0,4,6,8,8,8,5,5; current: 5; index: 7; input[index + 1] : 7
acc: 0,4,6,8,8,8,5,5,7; current: 7; index: 8; input[index + 1] : undefined
returning acc.push(current)
*/

function setReducer(input) {
    while (input.length != 1) {
        input = input.reduce((acc, current, index) => {
            if ( current == input[index - 1] ) { acc[acc.length - 1]++ }
                else { acc.push(1) }
                console.log(acc.join(" ,"));
              return acc;
            }, [])
        }
        return input.pop()
    }


// function setReducer(input) {
//     if( input.length == 1 ) { return input[0]}  
//     let newArray = [];
//         for (let i = 0; i < input.length; i++) {
//             if ( input[i] === input[i-1] ) {
//               newArray[newArray.length - 1]++;
//             } else {
//               newArray.push(1);
//             }
//             console.log(newArray.join(" ,"));
//           }
//     return setReducer(newArray);
// }

console.log([0, 4, 6, 8, 8, 8, 5, 5, 7].join(" ,"))
setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7]);