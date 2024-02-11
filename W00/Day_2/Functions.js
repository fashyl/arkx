function factorial(n) {
    let factorial = 1;
    for (let index = 1; index <= n; index++) {
        factorial *= index; 
    };
    return factorial;
}

function nDigits(number) {
    let numDigits = 1;
    let index = number;

    if (index < 0) { index = -index};
    while (index > 10) {
        index = index / 10;
        numDigits++;
    };
    return numDigits;
}

function numberToDay(number) {
    switch (number) {
        // 1 : Monday
        case 1: 
            console.log("Monday");
        break;
        // 2 : Tuesday
        case 2: 
            console.log("Tuesday");
        break;		
        // 3 : Wednsday
        case 3: 
            console.log("Wednesday");
        break;
        // 4 : Thursday
        case 4: 
            console.log("Thursday");
        break;
        // 5 : Friday
        case 5: 
            console.log("Friday");
        break;
        // 6 : Saturday
        case 6: 
            console.log("Saturday");
        break;	
        // 7 : Sunday
        case 7: 
            console.log("Sunday");
        break;
        // other : Unvalid Day
        default: 
            console.log("Unvalid Day");
        }
}

function max(d, e, f) {
    if (d > e && d > f) {
        return d;
	} else if (e > d && e > f) {
		return e; 
	} else {
		return f;
	}
}

function myGrade(score) {
    if (!(score > 0 && score <= 100)) {
        console.log("Invalid Input")
        } else if (score <= 15) {
            console.log("F")
        } else if (score <= 40) {
            console.log("E")
        } else if (score <= 55) {
            console.log("D")
        } else if (score <= 70) {
            console.log("C")
        } else if (score <= 85) {
            console.log("B")
        } else {
            console.log("A")
        };   
}

module.exports = {
    factorial
}