//callback function example
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye); // Calling greet with sayGoodbye as a callback function

// return callback;
function performOperation(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(performOperation(5, 3, add));

//return funtction inside function
function outerFunction() {
    console.log("This is the outer function.");

    function innerFunction() {
        console.log("This is the inner function.");
    }

    return innerFunction; // Returning the inner function
}

const myInnerFunction = outerFunction();

