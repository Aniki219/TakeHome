// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation:
// The variable 'internal' and the function 'nestedFunction' are both defined within 'myFunction's Function scope,
// therefore 'nestedFunction' can access 'internal' as it is defined in a parent scope.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(val) {
  let counter = 0;
  for (let i = val; i > 0; i--) {
    counter += i;
  }
  return counter;
}
console.log(summation(4));
