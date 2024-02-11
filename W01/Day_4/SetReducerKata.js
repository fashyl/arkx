function setReducer(input){
    if (input.length === 1) {
        return input[0];
    }

    let newArray = [];
    let count = 1
    for(let i = 0 ; i < input.length - 1; i++){
        if (input[i] == input[i + 1]){
            count++
        } else {
            newArray.push(count);
            count = 1
        }    
    }

    newArray.push(count); // the solution to using one loop instead of three.
    return setReducer(newArray)
}

function SetReducerReducer(input) {
    while(input.length != 1) {
        input = input.reduce((acc, currentNum, index) => {
            if ( currentNum != input[index - 1]) { 
                acc.push(1) ;
            } else {
                acc[acc.length - 1]++; // if the next num is similar, increment the current, if the next one is, increment again.
            }
            console.log(acc.join(" ,"));
            return acc;
        }, [])
        console.log(`====> ${input.join(" ,")}`)
    }
    return input.pop();    
}


console.log(SetReducerReducer([2, 4, 4, 6, 2, 1, 1, 5, 6, 7, 8, 8, 8, 8, 9, 0, 1, 1, 5, 4, 4]));