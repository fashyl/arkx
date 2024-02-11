function calculator(a, b, c) {
    switch (b) {
        case '*':
            return a*c;
        case "-":
            return a-c;
        case "+":
            return a+c;
        case "/":
            return a/c;
        default:
            console.log("Invalid entry")
            break;
    }
}
console.log(calculator(3, '*', -4))// -12