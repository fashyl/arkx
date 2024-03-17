// return masked string
   // let myArray = cc.split(""); // String to ARRAY
    // let toArray = [];
    // for (let i = 0; i < cc.length; i++) { // String to ARRAY
    //     toArray[i] = cc[i];
    // }
    // for ( let j = 0; i < toArray.length - 4; j++) {
    //   toArray[j] = "#";
    // }

    // return 

function maskify(cc) {
    let str = "";
        for (let i = 0; i < cc.length; i++) {
            i < cc.length - 4 ? str = str + '#' : str = str + cc[i]
        }
    return str;
}



console.log(maskify('4556364607935616'));