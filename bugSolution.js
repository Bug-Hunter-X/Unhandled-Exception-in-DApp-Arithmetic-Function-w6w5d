function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  } catch (error) {
    console.error("Error: ", error.message); 
    return 0; // Or handle the error appropriately
  }
}

// Example usage
console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6
console.log(multiply(7, 2)); // Output: 14
console.log(divide(9, 3)); // Output: 3
console.log(divide(5,0)); // Output: Error: Division by zero, then 0 