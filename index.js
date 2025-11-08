function greet(name) {
  return `Hello, ${name}!`;
}

// New function: add two numbers
function add(a, b) {
  return a + b;
}


// Example usage
console.log(greet('CI/CD World'));
console.log(add(6,6));



module.exports = { greet, add };