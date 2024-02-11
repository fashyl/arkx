// Condition on the sides
// aka The triangle inequality
// if x, y, and z are the lengths of the sides of the triangle,
// with no side being greater than z,
// then the triangle inequality states that
// z ≤ x + y ,

function isTriangle(a, b, c) {
    const arr = [a, b, c].sort((a,b) => {
        return a - b;
    });
    
    if (arr[2] >= arr[0] && arr[2] >= arr[1]) {
      if (arr[0] + arr[1] > arr[2]) {
        return true;
      }
    }
    return false;
  }

console.log(isTriangle(1, 2, 2));
console.log(isTriangle(7, 2, 2));

// Malk 3la 7altk? 
//function isTriangle(a,b,c)
// {
//     [a, b, c] = [a, b, c].sort((x, y) => x-y);
//     return a + b > c;
//   }
// https://en.wikipedia.org/wiki/Triangle_inequality#Mathematical_expression_of_the_constraint_on_the_sides_of_a_triangle