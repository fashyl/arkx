const { Sort } = require("../Day_3/BubbleSort")
let Array = {
    _array: [4, 2, 2, 7, 2],
    _mostOccured: 2,
    
    get result() {
        return `The most occured number in ${this._array} is ${this._mostOccured}`;
    },
    set testArray(array) {
        this._array = array;
        let ascArray = Sort.array;
        let count = 0;
        for (let i = 0; i < ascArray.length - 1; i++) {
            if (ascArray[i] = ascArray[i+1]) {
                count++;
                ascArray.splice(i+1,1);
            }
        }
    }

 // 1, 1, 1, 2, 2, 3, 3, 3, 3
}
