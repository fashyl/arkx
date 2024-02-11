class Person {
    constructor(personName, personAge) {
        this.personAge = personAge;
        this.personName = personName;
    }
    compareAge(value) {
        if(value.personAge == this.personAge) { console.log(`${value.personName} is the same age as me`)};
        if(value.personAge > this.personAge) { console.log(`${value.personName} is older than me`) } 
            else if (value.personAge < this.personAge) { console.log(`${value.personName} is younger than me`) }
    }
}

let p1 = new Person("Samuel", 24)
let p2 = new Person("Joel", 36)
let p3 = new Person("Lily", 22)

let mySelf = new Person("Souhail", 22)

mySelf.compareAge(p2)
mySelf.compareAge(p1)
mySelf.compareAge(p3)