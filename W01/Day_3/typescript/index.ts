const user = {
    name: 'john',
    age: 36
};

// console.log(user.age) // error

// Type Annotations
let age: number = 45
let name: string = 'Souhail'
let isActive: boolean = true
let password = 'password' // Inferred :string


// Functions
function addition(a:number, b:number):number {
    return a + b;
}

function additionVoid(a:number, b:number):void {
    return a + b; // Type 'number' is not assignable to type 'void'.ts(2322)
}

// Objects
type User = {
    readonly _id:number, // unique id! 'readonly' is self-explanatory
    name:string,
    age:number,
    isActive:boolean
    time?:number // 
}

const shyl:User = {
    _id: 20,
    name: 'shyl',
    age: 22,
    isActive: false,
    isBroke : true // Object literal may only specify known properties,
    // and 'isBroke' does not exist in type 'User'.ts(2353)
}

shyl.age = 18 // you wish

// Operations
interface Person { name: string; age: number; }
interface Address { city: string; zip: string; }

 // Intersection
let contactInfo: Person & Address = { 
    name: "John", 
    age: 30, 
    city: "New York", 
    zip: "10001"
};

 // Union
 let myValue: string | number = "hello";  // Value can be a string or a number
    // Here the nationality is optional on the User
    interface User {
        name: string;
        age: number;
        natioanlity?: string; // equivalent to string | undefined
    }
    
// Arrays 
const array:number[] = [1, 2, 3, 5, 99, 12]
array.push("Hello") // Argument of type 'string' 
// is not assignable to parameter of type 'number'.ts(2345) 

// Tuples
let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Hello', 'xD']; // type '[number, false, string, string]'
// is not assignable to type '[number, boolean, string]


console.log();
export {}