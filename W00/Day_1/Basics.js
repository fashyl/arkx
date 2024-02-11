// The Basics
//
	// Task 1
	const firstname = "shyl"
	const lastname = "FARAJI";
	const PI = 3.14159;
	const radius = 5;
	const favoriteSuperhero = "Omniman";
	const favoriteQuote = "**** you Nvidia - Linus Torvalds";

	// Task 2 
	let fullname = firstname + lastname; // This is wrong
										// The correct way of concatenating
										// is using backticks ``
	let area = PI * radius ** 2
	let perimeter = 2 * PI * radius
	let motivation = " A wise man not named " + favoriteSuperhero + " once said : " + favoriteQuote

	// Task 3
	let a = 3;
	let b = 10;
	let temp = a;
	a = b;
	b = temp;
	console.log("After swapping: a = ", a, " and b = ", b);

// Conditional Statements
//
	// Task 1 : Even or Odd
	let variable = 7;   
	variable % 2 == 0 ? console.log("The number is even") : console.log("The number is odd");

	// Task 2 : Days of the week
	var day = 4;
	switch (day) {
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

	// Task 3 : Maximum
	let d = -15;
	let e = 6;
	let f = 2.6;
	// your program goes here
	if (d > e && d > f) {
        console.log(d);
		
	} else if (e > d && e > f) {
		console.log(e); 
	} else {
		console.log(f);
	}
	// should output : 6

    // Task 4 : The Grades
    let score = process.argv[2];
    // your program goes here
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
    // Output : B