// ============================================================================
// DIFFERENCE BETWEEN REGULAR FUNCTION AND ARROW FUNCTION
// ============================================================================

// ============================================================================
// 1. SYNTAX
// ============================================================================
console.log("--- 1. SYNTAX ---");

// Regular function
function add1(a, b) {
  return a + b;
}

// Arrow function with block body
const add2 = (a, b) => {
  return a + b;
};

// Arrow function with concise body (implicit return)
const add3 = (a, b) => a + b;

// Arrow function with single parameter (no parentheses needed)
const square = x => x * x;

console.log(add1(5, 3)); // 8
console.log(add2(5, 3)); // 8
console.log(add3(5, 3)); // 8
console.log(square(4)); // 16


// ============================================================================
// 2. 'this' BINDING - MOST IMPORTANT DIFFERENCE
// ============================================================================
console.log("\n--- 2. 'this' BINDING ---");

// Regular function - has its own 'this'
const user1 = {
  name: 'John',
  age: 25,
  greet: function() {
    console.log(`Hello, I am ${this.name}`); // 'this' refers to user1
  }
};
user1.greet(); // "Hello, I am John"

// Arrow function - inherits 'this' from parent/lexical scope
const user2 = {
  name: 'Jane',
  age: 24,
  greet: () => {
    console.log(`Hello, I am ${this.name}`); // 'this' refers to window/global, not user2
  }
};
user2.greet(); // "Hello, I am undefined" (in strict mode or browser)

// Example with setTimeout
const obj = {
  value: 100,
  
  // Regular function - creates new 'this'
  regularFunc: function() {
    setTimeout(function() {
      console.log(this.value); // undefined - 'this' is window
    }, 100);
  },
  
  // Arrow function - preserves 'this' from obj
  arrowFunc: function() {
    setTimeout(() => {
      console.log(this.value); // 100 - 'this' refers to obj
    }, 100);
  }
};

// obj.regularFunc(); // undefined
// obj.arrowFunc();   // 100


// ============================================================================
// 3. ARGUMENTS OBJECT
// ============================================================================
console.log("\n--- 3. ARGUMENTS OBJECT ---");

// Regular function - has 'arguments' object
function testRegular(a, b) {
  console.log("Arguments in regular function:", arguments);
  console.log("arguments[0]:", arguments[0]);
  console.log("arguments[1]:", arguments[1]);
}
testRegular(10, 20); // Shows: [10, 20]

// Arrow function - NO 'arguments' object
const testArrow = (a, b) => {
  // console.log(arguments); // ReferenceError: arguments is not defined
  console.log("In arrow function, use rest parameters instead:");
};
testArrow(10, 20);

// Solution for arrow function - use rest parameters
const testArrowRest = (...args) => {
  console.log("Rest parameters in arrow function:", args);
};
testArrowRest(10, 20, 30); // Shows: [10, 20, 30]


// ============================================================================
// 4. CONSTRUCTOR - 'new' KEYWORD
// ============================================================================
console.log("\n--- 4. CONSTRUCTOR (new keyword) ---");

// Regular function - CAN be used as constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person('Alice', 30);
console.log("Regular function as constructor:", person1); // { name: 'Alice', age: 30 }

// Arrow function - CANNOT be used as constructor
const PersonArrow = (name, age) => {
  this.name = name;
  this.age = age;
};
// const person2 = new PersonArrow('Bob', 25); // TypeError: PersonArrow is not a constructor


// ============================================================================
// 5. HOISTING
// ============================================================================
console.log("\n--- 5. HOISTING ---");

// Regular function - HOISTED (can call before declaration)
console.log(multiply(2, 5)); // 10 - works fine
function multiply(a, b) {
  return a * b;
}

// Arrow function - NOT HOISTED (Temporal Dead Zone - TDZ)
// console.log(divide(10, 2)); // ReferenceError: divide is not defined
const divide = (a, b) => a / b;
console.log(divide(10, 2)); // 5 - works after declaration


// ============================================================================
// 6. IMPLICIT RETURN
// ============================================================================
console.log("\n--- 6. IMPLICIT RETURN ---");

// Regular function - needs explicit return
function getSum(a, b) {
  return a + b;
}

// Arrow function - implicit return (one-liner)
const getProduct = (a, b) => a * b;

// Arrow function - explicit return (multiple lines)
const getAverage = (a, b) => {
  const sum = a + b;
  return sum / 2;
};

console.log("Sum:", getSum(5, 3)); // 8
console.log("Product:", getProduct(5, 3)); // 15
console.log("Average:", getAverage(5, 3)); // 4


// ============================================================================
// 7. CALLBACK FUNCTIONS (Arrow functions excel here)
// ============================================================================
console.log("\n--- 7. CALLBACK FUNCTIONS ---");

const numbers = [1, 2, 3, 4, 5];

// Using arrow function with map
const squared = numbers.map(n => n * n);
console.log("Squared:", squared); // [1, 4, 9, 16, 25]

// Using arrow function with filter
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log("Even numbers:", evenNumbers); // [2, 4]

// Using arrow function with setTimeout (preserves 'this')
const timer = {
  name: 'Timer',
  start: function() {
    setTimeout(() => {
      console.log(`${this.name} started`); // Works with arrow function
    }, 100);
  }
};


// ============================================================================
// SUMMARY TABLE
// ============================================================================
console.log("\n--- SUMMARY ---");
console.log(`
FEATURE              | REGULAR FUNCTION | ARROW FUNCTION
---------------------|------------------|------------------
Syntax               | function() {}    | () => {}
'this' binding       | Own 'this'       | Inherits 'this'
'arguments' object   | Yes              | No (use ...rest)
'new' keyword        | Yes              | No
Hoisting             | Yes              | No (TDZ)
Implicit return      | No               | Yes (single expr)
Best use            | Methods, Classes | Callbacks, short functions
`);
