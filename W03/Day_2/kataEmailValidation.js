/*
Create a function validate() that takes a string email address and returns true if valid, false otherwise.

A valid email is defined as:

    Has an @ symbol within
    Has dots splitting up two or more strings at the right of the @.
    Has contents to the left of the @. Only one part is needed. Multiply parts should be seperated with dots.

PS: in Ruby.
*/


function validate(email) {
    return /\w@[\w\W]+\.\w+/.test(email)
}

// Which translates to 
// def validate(email)
//  return !!(/\w@[\w\W]+\.\w+/ =~ email)
// end