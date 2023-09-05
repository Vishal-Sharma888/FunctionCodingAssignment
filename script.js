// Soluction 1
function greet() {
    console.log("Hello, World!");
  }
  
  // Calling the function
  greet();
 
// Soluction 2:
function printSum(a, b) {
    var sum = a + b;
    console.log(`Sum of ${a}, ${b} is ${sum}`);
  }
  
  // Calling the function
  printSum(3, 4);

// Soluction 3:-
const add = (a, b) => a + b;

// Calling the arrow function
const result = add(3, 4);
console.log(result); // This will log 7 to the console

// Soluction 7
function factorial(n) {
    if (n < 0) {
      return undefined; // Factorial is undefined for negative numbers
    }
    
    let result = 1;
    
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    
    return result;
  }
  
  // Example usage:
  const n = 5;
  const result1 = factorial(n);
  console.log(`Factorial of ${n} is ${result}`);
