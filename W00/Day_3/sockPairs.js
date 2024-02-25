// const { bubbleSort } = require("./BubbleSort");
// function sockMerchant(socks) {
//     let count = 0;
//     let sorted = bubbleSort(socks);
//     for (let h = 0; h < sorted.length; h++) {
//             if ( sorted[h] === sorted[h+1] ) {
//                 count++;
//                 h++;
//             }
//         }
// return count;       
// } 

const { bubbleSort } = require("./BubbleSort");

function sockMerchant(socksArray) {
    let count = 0;
    for (let i = 0; i < socksArray.length - 1; i++) {
        for (let j = i + 1 ; j < socksArray.length; j++) {
            if (socksArray[i] == socksArray[j]) {
                count += 1;
                socksArray.splice(j,1);
                break;
            }
        }
    }    
    return count;
}

// Here are some test cases :
console.log(sockMerchant([1, 2, 1, 2, 1, 3, 2])); // 2
console.log(sockMerchant([2,3,4,4,5,3,2,5,5,5])); // 5
console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])); // 3
console.log(sockMerchant([1, 1, 3, 1, 2, 1, 3, 3, 3, 3])); // 4
console.log(sockMerchant([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 0
console.log(sockMerchant([2,2,3,2,2,2,2,2,2,2,2,2,2])); // 6
console.log(sockMerchant([1, 2, 1, 2, 1, 3, 2, 4, 3, 4, 5, 6, 5, 6, 7, 8, 7, 8, 9, 10, 9, 10, 11, 12, 11, 12, 13, 14, 13, 14, 15, 16, 15, 16, 17, 18, 17, 18, 19, 20, 19, 20]))
// Expected output: 20
console.log(sockMerchant([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5, 0, 2, 8, 8, 4, 1, 9, 7, 1, 6, 9, 3, 9, 9]))
// Expected output: 21
console.log(sockMerchant([10, 5, 9, 2, 8, 7, 1, 4, 5, 2, 3, 6, 9, 8, 7, 3, 1, 6, 4, 10, 8, 5, 3, 9, 6, 10, 2, 7, 1, 4, 5, 2, 3, 6, 9, 8, 7, 3, 1, 6, 4, 10, 8, 5, 3, 9]))
// Expected output: 21
console.log(sockMerchant([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]))
// Expected output: 20
console.log(sockMerchant([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]))
// Expected output: 0 (all unique)