/*
    To make sure you're bringing your most valuable items on
    this journey you've decided to give all your items a score
    that represents how valuable this item is to you. It's your
    job to pack your bag so that you get the most value out of
    the items that you decide to bring.    

    For instance, given these inputs:
    scores = [15, 10, 9, 5]
    weights = [1, 5, 3, 4]
    capacity = 8

    The maximum score will be 29.
    This number comes from bringing 
    items 1, 3 and 4. 

*/
// Brute Force ?
function packBagpack(scores, weights, capacity) {
    return weights.reduce((previous, current) => {
        return previous - Math.max(...weights)
    }, capacity)
}

// Testing
console.log(packBagpack([15, 10, 9, 5], [1, 5, 3, 4], 8)); // 29
// console.log(packBagpack([20, 5, 10, 40, 15, 25], [1, 2, 3, 8, 7, 4], 10)); // 60